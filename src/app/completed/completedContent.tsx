'use client'

import { useRouter } from 'next/navigation'
import { IoCheckmark } from 'react-icons/io5'
import { MainNavbar } from '../mainNavBar'

export default function CompletedContent() {
  const router = useRouter()
  return (
    <div className="h-screen flex flex-col">
      <MainNavbar></MainNavbar>
      <div className="flex-grow flex flex-col justify-center items-center">
        <IoCheckmark
          className=" bg-blue-400 text-white rounded-full shadow-lg"
          size={100}
        ></IoCheckmark>
        <div className="mt-14 text-xl md:text-3xl font-semibold text-center px-3">
          Your Donna E-mail has been issued by heinz@wonmo.net!
        </div>
        <div className="mt-8 flex flex-row border-[2px] border-stone-200 rounded-xl shadow-sm">
          <div className="flex">
            <div className="flex justify-center items-center ml-5 my-auto w-10 h-10 md:w-14 md:h-14 rounded-full bg-cyan-200">
              <div className="text-2xl md:text-3xl">D</div>
            </div>
            <div className="py-3 flex flex-col mx-3 mr-5">
              <div className="font-semibold text-xl">Donna</div>
              <div className="text-md">Nice to e-meet you!</div>
              <div className="text-stone-400">
                Hello I&apos;m Donna, your e-secretary, please copy me on any...
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="pt-8 text-xl md:text-2xl text-stone-500">
            Check your&nbsp;
          </div>
          <div
            onClick={() =>
              router.push('https://mail.google.com/mail/u/0/#inbox')
            }
            className="cursor-pointer pt-8 text-xl md:text-2xl text-blue-400 underline decoration-blue-400 underline-offset-8"
          >
            Gmail
          </div>
        </div>
      </div>
    </div>
  )
}
