'use client'
import React, { useEffect } from 'react'
import { getAuthState, reset, setAuth } from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import ImageFrame from './component/imageFrame'
import { GoogleButton, GoogleButton2 } from './component/googleButton'

export default function LoginButton() {
  const profile = useAppSelector(getAuthState)
  const [cookies, setCookie, removeCookie] = useCookies()

  const logout = () => {
    removeCookie('refresh_token')
    removeCookie('access_token')
  }
  useEffect(() => {
    const TOKEN_EXPIRE_TIME = 3600 * 500 //(30분)
    const dispatch = useAppDispatch()
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
    const dispatch = useAppDispatch()
    const sendRefreshTokenToBack = async () => {
      if (cookies.refresh_token === undefined) {
        dispatch(reset())
      } else {
        const tempRefreshToken = cookies.refresh_token
        const response = await axios.post(
          process.env.NEXT_PUBLIC_API_SERVER + '/auth/signIn',
          {
            refreshToken: tempRefreshToken,
          },
          {
            withCredentials: true,
          },
        )
        console.log(response.data)
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
  return (
    <>
      {!profile.isLogin ? (
        <GoogleButton></GoogleButton>
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
          <ImageFrame src={profile.picture} size={80}></ImageFrame>
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}
