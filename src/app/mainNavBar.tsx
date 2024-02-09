'use client'

import { useRouter } from 'next/navigation'
import './globals.css'
import Switcher from './component/switcher'
import GOOGLE_AUTHORIZATION_URL from './component/googleUrl'
import ImageFrame from './component/imageFrame'

export function MainNavbar() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex h-16 justify-between">
        <button onClick={() => router.push('/')}>
          <div className="flex-shrink-0 flex items-center">
            <ImageFrame
              src={'/assets/logo/dona-logo.png'}
              size={40}
            ></ImageFrame>
            <span className="ml-2 font-sans text-[#759CCC] text-xl">Donna</span>
          </div>
        </button>
        <div className="flex-row md:flex hidden">
          <Switcher />

          <div className="flex ml-10 my-auto w-28 h-10 cursor-pointer border-[0.5px] rounded-md bg-blue-400">
            <div className="text-white m-auto" onClick={handleSignIn}>
              Get started
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
