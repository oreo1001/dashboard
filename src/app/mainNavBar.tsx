'use client'

import { useRouter } from 'next/navigation'
import './globals.css'
import Switcher from './component/switcher'
import GOOGLE_AUTHORIZATION_URL from './component/googleUrl'
import ImageFrame from './component/imageFrame'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAuthState } from '@/redux/slices/authSlice'
import Image from 'next/image'
import { clickUserButton, selectUserButton } from '@/redux/slices/tempSlice'

export function MainNavbar() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  const profile = useAppSelector(getAuthState)
  const dispatch = useAppDispatch()
  const userButton = useAppSelector(selectUserButton)
  const buttonClick = (event: any) => {
    event.stopPropagation()
    if (!userButton) {
      dispatch(clickUserButton(true))
    }
  }

  return (
    <div className="bg-[#15203B] w-full px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <button onClick={() => router.push('/')}>
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="pl-4"
              src={'/assets/dona-logo/도나-로고-컬러.png'}
              alt="frame"
              width={30}
              height={30}
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
              style={{
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
              }}
            />
            <Image
              className="pl-4"
              src={'/assets/dona-logo/도나-텍스트-화이트.png'}
              alt="frame"
              width={70}
              height={20}
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
              style={{
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
              }}
            />
          </div>
        </button>
        <div className="flex flex-row items-center">
          {/* <Switcher /> */}
          {!profile.isLogin ? (
            <div className="flex ml-10 my-auto w-28 h-10 cursor-pointer rounded-md bg-blue-400">
              <div className="text-white m-auto" onClick={handleSignIn}>
                Get started
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer flex justify-center items-center w-12 h-12 rounded-full bg-blue-500"
              onClick={buttonClick}
            >
              <div className="text-xl md:text-2xl text-white font-medium flex">
                {profile.name.substring(1, 2)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
