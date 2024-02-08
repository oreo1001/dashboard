import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

async function refreshAccessTokenByRefreshToken(refreshToken: string) {
  const url = 'https://oauth2.googleapis.com/token'
  const params = {
    refresh_token: refreshToken,
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
    grant_type: 'refresh_token',
  }
  const response = await axios.post(url, params)
  const newAccessToken = response.data['access_token']
  return newAccessToken
}

export async function GET(nextReq: NextRequest) {
  const refreshToken = nextReq.cookies.get('refresh_token')
  if (refreshToken === undefined) {
    return NextResponse.json({ error: 'no token in cookie' })
  } else {
    const newAccessToken = await refreshAccessTokenByRefreshToken(
      refreshToken.value,
    )
    cookies().set('access_token', newAccessToken)
    return NextResponse.json({ message: 'access token was recreated' })
  }
}
