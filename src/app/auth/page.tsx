'use client'
import MainDarkMode from '../mainDarkMode'
import { getAuthState, reset } from '@/redux/slices/authSlice'
import { useAppSelector } from '@/redux/hooks'
import NavBar from './navBar'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Auth() {
  const router = useRouter()
  const profile = useAppSelector(getAuthState)
  console.log(profile)

  const scopeList = [
    'https://www.googleapis.com/auth/calendar.readonly',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'openid',
  ]
  const GOOGLE_AUTHORIZATION_URL =
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    new URLSearchParams({
      prompt: 'consent',
      access_type: 'offline',
      scope: scopeList.join(' '),
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      redirect_uri: 'http://localhost:3000/api/auth/callback/google',
    })
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  const handleSignIn2 = async () => {
    let data = await axios.get(GOOGLE_AUTHORIZATION_URL)
    console.log(data)
  }
  return (
    <div className="h-screen">
      <MainDarkMode>
        {profile.isLogin ? ( //세션 정보가 있으면 signOut()호출
          <div
            className="w-full h-10 border-2 cursor-pointer"
            onClick={() => reset}
          >
            log out
          </div>
        ) : (
          <div
            className="w-full h-10 cursor-pointer border-2"
            onClick={handleSignIn}
          >
            Login
          </div>
        )}
      </MainDarkMode>
    </div>
  )
}
