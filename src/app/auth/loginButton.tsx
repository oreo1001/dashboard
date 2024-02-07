'use client'
import { getAuthState, reset, setAuth } from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginButton({refreshToken} : any) {
  const router = useRouter()
  const profile = useAppSelector(getAuthState)
  const dispatch = useAppDispatch()
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
  const logout = ()=>{
    reset
  }
  const sendProfileAPI = async () => {
    let response = await axios.post('/api/auth/profile')
    console.log(response.data)
    dispatch(setAuth(response.data))
  }
  const sendRefreshTokenToBack = async () =>{
    await axios.post('/api/auth/profile',{"refreshToken": refreshToken})
  }

  return (
    <>{profile.isLogin?(
    <div
      className="w-full h-10 border-2 cursor-pointer"
      onClick={logout}
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
  <div className="w-full h-10 cursor-pointer border-2" onClick={sendProfileAPI}>Test</div>
  </>
  )
}