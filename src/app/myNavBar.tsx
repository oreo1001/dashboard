'use client'

import Image from 'next/image'
import {useRouter} from 'next/navigation'
import './globals.css'

export function MyNavbar(){
    const router = useRouter()
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex justify-between h-16">
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
            <span className="ml-2 font-bold text-xl font-mono">CareeBee</span>
          </div>
        </button>
        <div className="flex items-center">
          {/* <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">
            회원가입
          </button> */}
        </div>
      </div>
    </div>
  )
}