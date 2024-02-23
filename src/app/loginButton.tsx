'use client'
import React from 'react'
import { getAuthState, reset } from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useCookies } from 'react-cookie'
import {
  GoogleButton,
  GoogleButton2,
  GoogleButton3,
} from './component/googleButton'

export default function LoginButton() {
  const profile = useAppSelector(getAuthState)
  const [cookies, setCookie, removeCookie] = useCookies()

  // const logout = () => {
  //   removeCookie('refresh_token')
  //   removeCookie('access_token')
  //   dispatch(reset())
  // }
  return (
    <>
      {!profile.isLogin ? (
        <GoogleButton3></GoogleButton3>
      ) : (
        <div></div>
        // <div
        //   onClick={logout}
        //   className="flex my-auto w-16 sm:w-20 lg:w-24 xl:w-32 h-8 md:h-10  cursor-pointer border-[0.5px] rounded-md bg-blue-400"
        // >
        //   <div className="text-white m-auto">Logout</div>
        // </div>
      )}
    </>
  )
}
