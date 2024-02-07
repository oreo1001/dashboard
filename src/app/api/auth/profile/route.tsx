import axios from 'axios'
import next from 'next'
import {cookies} from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

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
    if(accessToken===undefined){
        return NextResponse.json({error : "no token in cookie"})
    }else{
        const profile = await getUserData(accessToken.value)
        console.log(profile)
        return NextResponse.json(profile)
    }
}