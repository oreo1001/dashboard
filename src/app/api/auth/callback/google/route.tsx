import axios from 'axios'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

async function getRefreshTokenFromAuthCode(authCode: string) {
  const url = 'https://oauth2.googleapis.com/token'
  const params = {
    code: authCode,
    client_id:
      process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    client_secret:
      process.env.GOOGLE_CLIENT_SECRET ||
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/api/auth/callback/google',
    grant_type: 'authorization_code',
  }

  const response = await axios.post(url, params)
  const tokens = response.data
  console.log(tokens['refresh_token'])
  console.log(tokens['scope'])
  // tokens를 저장하고, 메인 페이지로 리다이렉트
  //'http://localhost/oauth2callback',
}

export async function GET(req: Request, res: any) {
  const url = new URL(req.url)
  const authCode = url.searchParams.get('code') || ''
  await getRefreshTokenFromAuthCode(authCode)
  redirect('/auth')
}
export async function POST(req: Request) {
  const url = new URL(req.url)
  const authCode = url.searchParams.get('code') || ''
  await getRefreshTokenFromAuthCode(authCode)
  return NextResponse.json({ message: 'Post Successed' })
}
