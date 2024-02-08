'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import './globals.css'
import Switcher from './switcher'
import GOOGLE_AUTHORIZATION_URL from './googleUrl'

export function MainNavbar({ onToggleTheme }: any) {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex h-16 justify-between">
        <button onClick={() => router.push('/')}>
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/캘린더-로고.png"
              alt="Logo"
              width={40}
              height={40}
              style={{
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
              }}
            />
            <span className="ml-2 font-sans text-[#759CCC] text-xl">
              CareeBee
            </span>
          </div>
        </button>
        <div className="flex-row md:flex hidden">
          <Switcher onToggle={onToggleTheme} />

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
