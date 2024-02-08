'use client'
import React, { useEffect } from 'react'
import { getAuthState, reset, setAuth } from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import GOOGLE_AUTHORIZATION_URL from './googleUrl'
import Image from 'next/image'

export default function LoginButton() {
  const TOKEN_EXPIRE_TIME = 3600 * 500 //(30분)
  const router = useRouter()
  const profile = useAppSelector(getAuthState)
  const dispatch = useAppDispatch()
  const [cookies, setCookie, removeCookie] = useCookies()

  const logout = () => {
    removeCookie('refresh_token')
    removeCookie('access_token')
  }
  useEffect(() => {
    const sendProfileAPI = async () => {
      if (cookies.access_token === undefined) {
        dispatch(reset())
      } else {
        let response = await axios.post('/api/auth/profile')
        if (response.data['error'] === undefined) {
          dispatch(setAuth(response.data))
          setTimeout(silentRefreshAccessToken, TOKEN_EXPIRE_TIME)
        }
      }
    }
    sendProfileAPI()
  }, [cookies.access_token]) // 쿠키가 변경될 때마다 useEffect 실행
  useEffect(() => {
    const sendRefreshTokenToBack = async () => {
      if (cookies.refresh_token === undefined) {
        dispatch(reset())
      } else {
        await axios.post(
          process.env.NEXT_PUBLIC_API_SERVER + '/api/auth/signIn',
          {
            refreshToken: cookies.refreshToken,
          },
        )
      }
    }
    sendRefreshTokenToBack()
  }, [cookies.refresh_token])

  const silentRefreshAccessToken = async () => {
    try {
      await axios.get('/api/auth/refresh')
      console.info('silent refresh success')
    } catch (e) {
      console.log(e)
    }
  }
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <>
      {!profile.isLogin ? (
        <div
          className="flex flex-row w-56 h-12 cursor-pointer border-[0.5px] rounded-md bg-blue-400"
          onClick={handleSignIn}
        >
          <div className="ml-3 my-auto flex items-center w-8 h-8 bg-white rounded-md">
            <Image
              src="/assets/google-logo.png"
              alt="google logo"
              width={16}
              height={16}
              // style={{
              //   maxWidth: '100%',
              //   width: 'auto',
              //   height: 'auto',
              // }}
              loading="lazy"
              className="m-auto"
            />
          </div>

          <div className="ml-2 my-auto flex text-white items-center">
            Sign up with Google
          </div>
        </div>
      ) : (
        <div
          onClick={logout}
          className="flex my-auto w-28 h-10 cursor-pointer border-[0.5px] rounded-md bg-blue-400"
        >
          <div className="text-white m-auto">Logout</div>
        </div>
      )}
      {profile.id ? (
        <>
          <div className="pt-5">{profile.id}</div>
          <div>{profile.email}</div>
          <div>{profile.name}</div>
          {/* <div>{profile.picture}</div> */}
          {profile.picture ? (
            <Image src={profile.picture} width="80" height="80" alt="" />
          ) : (
            <Image
              src={'/assets/placeholder.png'}
              width="80"
              height="80"
              alt=""
            />
          )}
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}
