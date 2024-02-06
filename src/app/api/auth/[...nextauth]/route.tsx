import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import Providers from "next-auth/providers"

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  })
async function refreshAccessToken(token: any) {
  try {
    const url =
      'https://oauth2.googleapis.com/token?' +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken,
      })

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }
    console.log('자체 토큰:', token.refreshToken)
    console.log('url에서 얻어오는:', refreshedTokens.refresh_token)

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: GOOGLE_AUTHORIZATION_URL || '',
    }),
  ],
  callbacks: {
    async jwt(params: { token: any; user: any; account: any }) {
      // Initial sign in
      if (params.account && params.user) {
        const jwt = {
          accessToken: params.account.accessToken,
          accessTokenExpires: Date.now() + params.account.expires_in * 1000,
          refreshToken: params.account.refresh_token,
          user: params.user,
        }
        console.log('Refresh Token:', jwt.refreshToken) // refreshToken 출력
        return jwt
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < params.token.accessTokenExpires) {
        return params.token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(params.token)
    },
    async session(params: { session: any; token: any }) {
      if (params.token) {
        params.session.user = params.token.user
        params.session.accessToken = params.token.accessToken
        params.session.error = params.token.error
      }
      return params.session
    },
  },
})

export { handler as GET, handler as POST }
