'use client'

import { useRouter } from 'next/navigation'
import '../globals.css'
import Switcher from '../component/switcher'
import ImageFrame from '../component/imageFrame'

export default function MyNavbar() {
  const router = useRouter()
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex justify-between h-16">
        <button onClick={() => router.push('/')}>
          <div className="flex-shrink-0 flex items-center">
            <ImageFrame
              src={'/assets/logo/캘린더-로고.png'}
              size={40}
            ></ImageFrame>

            <span className="ml-2 font-bold text-xl font-mono">CareeBee</span>
          </div>
        </button>
        <div className="flex items-center justify-start">
          <button
            onClick={() => router.push('/assistant')}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
          >
            Playground
          </button>
        </div>
        <div className="flex justify-end">
          <Switcher />
        </div>
      </div>
    </div>
  )
}
