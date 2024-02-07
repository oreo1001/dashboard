import axios from 'axios'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
// import { setAuth } from '@/redux/slices/authSlice'
// import { useAppDispatch } from '@/redux/hooks'
// const dispatch = useAppDispatch()

async function getRefreshTokenFromAuthCode(authCode: string) {
  const url = 'https://oauth2.googleapis.com/token'
  const params = {
    code: authCode,
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirect_uri: 'http://localhost:3000/api/auth/callback/google',
    grant_type: 'authorization_code',
  }

  const response = await axios.post(url, params)
  const tokens = response.data
  return {
    accessToken: tokens['access_token'],
    refreshToken: tokens['refresh_token'],
  }
}
async function getUserData(accessToken: string) {
  const profileUrl =
    'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + accessToken
  const profileResponse = await axios.get(profileUrl)
  const profile = profileResponse.data
  return {
    id: 'google-' + profile.id,
    email: profile.email,
    name: profile.name,
    picture: profile.picture,
  }
}
async function sendRefreshToken(authData: any, refreshToken: string) {
  const params = {
    ...authData,
    refreshToken: refreshToken,
  }
  // const apiResponse = await axios.post(
  //   process.env.LOCAL_BACK_API_SERVER || '',
  //   params,
  // )
  // console.log(apiResponse)
  // dispatch(setAuth(authData))
  console.log(params)
}

export async function GET(req: Request, res: any) {
  const url = new URL(req.url)
  const authCode = url.searchParams.get('code') || ''
  const tokens = await getRefreshTokenFromAuthCode(authCode)
  const profile = await getUserData(tokens.accessToken)
  sendRefreshToken(createAuthData(profile), tokens.refreshToken)
  res.setHeader('Set-Cookie', {
    tokens: {
      refresh_token: tokens.refreshToken,
      access_token: tokens.accessToken,
    },
  })
  //res.redirect('/auth')
  redirect('/auth')
  // return NextResponse.json({
  //   profile: createAuthData(profile),
  //   token: tokens.refreshToken,
  // })
}
export async function POST(req: Request, res: any) {
  const url = new URL(req.url)
  const authCode = url.searchParams.get('code') || ''
  await getRefreshTokenFromAuthCode(authCode)
  //return NextResponse.json({ message: 'Post Successed' })
  res.redirect()
}

function createAuthData(profile: any) {
  return {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    picture: profile.picture,
  }
}
