'use client'
import MainDarkMode from '../mainDarkMode'
import {
  decrement,
  increment,
  reset,
  selectValue,
} from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import NavBar from './navBar'
import { useRouter } from 'next/navigation'

export default function Auth() {
  const router = useRouter()
  const count = useAppSelector(selectValue)
  const dispatch = useAppDispatch()
  const ifLogin = false

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
  console.log(GOOGLE_AUTHORIZATION_URL)
  const handleClick = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <div className="h-screen">
      <MainDarkMode>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <div>{count}</div>

        {ifLogin ? ( //세션 정보가 있으면 signOut()호출
          <div className="cursor-pointer">log out</div>
        ) : (
          <div
            className="w-full h-10 cursor-pointer border-2"
            onClick={handleClick}
          >
            Login
          </div>
        )}
      </MainDarkMode>
    </div>
  )
}
