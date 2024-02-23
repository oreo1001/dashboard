'use client'

import { useRouter } from 'next/navigation'
import { IoCheckmark } from 'react-icons/io5'
import { MainNavbar } from '../mainNavBar'
import { useCookies } from 'react-cookie'
import { useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { sendProfileAPI, sendRefreshTokenToBack } from '../guide/loginFunction'
import Image from 'next/image'
import SimpleWindow from '../component/simpleWindow'

export default function CompletedContent() {
  const [cookies, setCookie, removeCookie] = useCookies()
  const dispatch = useAppDispatch()
  useEffect(() => {
    sendProfileAPI(dispatch, cookies)
  }, [])
  useEffect(() => {
    sendRefreshTokenToBack(dispatch, cookies)
  }, [cookies.refresh_token]) // 쿠키가 변경될 때마다 useEffect 실행
  const router = useRouter()
  return (
    <div className="h-screen flex flex-col">
      <SimpleWindow />
      <MainNavbar></MainNavbar>
      <div className="flex-grow flex flex-col justify-center items-center">
        <IoCheckmark
          className=" bg-blue-400 text-white rounded-full shadow-lg"
          size={100}
        ></IoCheckmark>
        <div className="mt-14 text-xl md:text-3xl font-semibold text-center px-3">
          You are ready to use Donna!
        </div>

        <div className="mt-10 text-md md:text-lg xl:text-xl font-semibold text-center px-3">
          Donna needs to learn a bit more about you to become personalized for
          you!
        </div>

        <div className="mt-2 text-md md:text-lg xl:text-xl font-semibold text-center px-3">
          Below is the email I sent to suggest an onboarding meeting so that it
          can be more tailored to you.
        </div>

        <div className="mt-2 text-md md:text-lg xl:text-xl font-semibold text-center px-3">
          Try asking Donna to schedule a meeting with me!
        </div>

        <div className="mt-8 flex flex-row border-[2px] border-stone-200 rounded-xl shadow-sm">
          <div className="relative flex justify-center items-center my-auto rounded-full ml-5">
            <Image
              className="rounded-full"
              src="/assets/김정원.jpeg"
              alt="cover"
              width={70}
              height={70}
              placeholder="blur"
              blurDataURL="/assets/placeholder.png"
            />
          </div>
          <div className="py-3 flex flex-col ml-4 mr-5">
            <div className="font-semibold text-xl">
              Jungwon(jungwon@wonmo.net)
            </div>
            <div className="text-md">Nice to e-meet you!</div>
            <div className="text-stone-400">
              Hello I&apos;m Jungwon, I want to know your preferences to
              schedule ...
            </div>
          </div>
        </div>
        {/* <div className="mt-8 flex flex-row border-[2px] border-stone-200 rounded-xl shadow-sm">
          <div className="flex">
            <div className="relative flex justify-center items-center my-auto w-[70px] h-[70px] rounded-full ml-5">
              <Image
                src="/assets/donnaMain.png"
                alt="cover"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/assets/placeholder.png"
              />
            </div>
            <div className="py-3 flex flex-col ml-4 mr-5">
              <div className="font-semibold text-xl">
                Donna(donna@wonmo.net)
              </div>
              <div className="text-md">Nice to e-meet you!</div>
              <div className="text-stone-400">
                Hello I&apos;m Donna, your e-secretary, please copy me on any...
              </div>
            </div>
          </div>
        </div> */}
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
