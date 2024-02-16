'use client'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()
  return (
    <div className="w-full bg-[#15203B]">
      <div className="mx-12 h-[200px] flex flex-col justify-center item-start pl-2 md:pl-6 pb-5">
        <div
          onClick={() => router.push('/privacy')}
          className=" text-white text-lg xl:text-xl cursor-help"
        >
          Privacy policy
        </div>
        <div className=" text-white text-sm xl:text-md pt-3">
          Copyright © 2024 Wonmo, INC. All rights reserved
        </div>
      </div>
    </div>
  )
}
