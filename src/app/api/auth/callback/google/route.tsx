import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

async function getRefreshTokenFromAuthCode(authCode: string) {
  const url = 'https://oauth2.googleapis.com/token'
  const params = {
    code: authCode,
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirect_uri: process.env.THIS_APP_URL + '/api/auth/callback/google',
    grant_type: 'authorization_code',
  }

  const response = await axios.post(url, params)
  const tokens = response.data
  return {
    accessToken: tokens['access_token'],
    refreshToken: tokens['refresh_token'],
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const url = new URL(req.url)
  const authCode = url.searchParams.get('code') || ''
  const tokens = await getRefreshTokenFromAuthCode(authCode)
  cookies().set('access_token', tokens.accessToken)
  cookies().set('refresh_token', tokens.refreshToken)
  redirect('/guide')
}

// export async function POST(req: Request, res: NextResponse) {
//   const url = new URL(req.url)
//   const authCode = url.searchParams.get('code') || ''
//   const tokens = await getRefreshTokenFromAuthCode(authCode)
//   res.cookies.set('access_token',tokens.accessToken,{path:'/auth'})
//   res.cookies.set('refresh_token',tokens.refreshToken,{path:'/auth'})
//   redirect('/auth')
// }
