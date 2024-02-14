'use client'

import { useRouter } from 'next/navigation'
import { IoCheckmark } from 'react-icons/io5'
import CustomCarousel from '../component/customCarousel'

export default function CompletedContent() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center min-h-screen">
      <IoCheckmark
        className="mt-[200px] bg-blue-400 text-white rounded-full shadow-lg"
        size={100}
      ></IoCheckmark>
      <div className="mt-14 text-4xl font-semibold text-center px-3">
        Your Donna E-mail has been issued!
      </div>
      <div className="mt-8 flex flex-row border-[2px] border-stone-200 rounded-xl shadow-sm">
        <div className="flex">
          <div className="flex justify-center items-center ml-5 my-auto w-14 h-14 rounded-full bg-cyan-200">
            <div className="text-3xl">D</div>
          </div>
          <div className="py-3 flex flex-col px-3 pr-5">
            <div className="font-semibold text-xl">Donna</div>
            <div className="text-md">Nice to e-meet you!</div>
            <div className="text-stone-400">
              Hello I&apos;m Donna, your e-secretary, please copy me on any...
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div
          className="pt-8 text-2xl pr-8 cursor-pointer"
          onClick={() => router.replace('/')}
        >
          Back to Home
        </div>

        <div
          onClick={() => router.push('https://mail.google.com/mail/u/0/#inbox')}
          className="cursor-pointer pt-8 text-2xl text-stone-500 underline decoration-blue-400 underline-offset-8"
        >
          Check your Gmail
        </div>
      </div>
    </div>
  )
}
