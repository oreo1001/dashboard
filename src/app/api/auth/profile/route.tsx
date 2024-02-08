import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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

export async function POST(nextReq: NextRequest) {
  const accessToken = nextReq.cookies.get('access_token')
  if (accessToken === undefined) {
    return NextResponse.json({ error: 'no token in cookie' })
  } else {
    const profile = await getUserData(accessToken.value)
    return NextResponse.json(profile, { headers: corsHeaders })
  }
}
