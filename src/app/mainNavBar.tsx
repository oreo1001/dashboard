'use client'

import { useRouter } from 'next/navigation'
import './globals.css'
import Switcher from './component/switcher'
import GOOGLE_AUTHORIZATION_URL from './component/googleUrl'
import ImageFrame from './component/imageFrame'
import { useAppSelector } from '@/redux/hooks'
import { getAuthState } from '@/redux/slices/authSlice'
import Image from 'next/image'

export function MainNavbar() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  const profile = useAppSelector(getAuthState)

  return (
    <div className="bg-[#15203B] w-full px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <button onClick={() => router.push('/')}>
          <div className="flex-shrink-0 flex items-center">
            <Image
            className='pl-4'
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
             className='pl-4'
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
        <div className="flex-row md:flex hidden">
          {/* <Switcher /> */}
          {!profile.isLogin ? (
            <div className="flex ml-10 my-auto w-28 h-10 cursor-pointer rounded-md bg-blue-400">
              <div className="text-white m-auto" onClick={handleSignIn}>
                Get started
              </div>
            </div>
          ) : (
            <>
              {/* <Image
                className="ml-10 my-2 rounded-full"
                src={profile.picture}
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
              /> */}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
