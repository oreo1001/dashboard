'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col w-[960px] justify-center mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center text-3xl font-bold pb-5">
          <div className="flex">당신의 비즈니스를 바꿀</div>
          <div className="flex">혁신적인 메일 그리고 캘린더 커리비</div>
        </div>
        <div className="flex flex-col justify-center text-lg">
          <div className="flex">지금껏 경험해 보지 못 한 간편한 비즈니스</div>
          <div className="flex">커리비와 시작해 보세요.</div>
        </div>
        <Image
          src="/assets/landing/노션1_그림자없음.png"
          width={800}
          height={800}
          alt="1"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
        <Image
          src="/assets/landing/노션2_그림자없음.png"
          width={800}
          height={800}
          alt="1"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
        <Image
          src="/assets/landing/노션3.png"
          width={800}
          height={800}
          alt="1"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
        <Image
          src="/assets/landing/노션4.png"
          width={800}
          height={800}
          alt="1"
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          style={{
            maxWidth: '100%',
            width: 'auto',
            height: 'auto',
          }}
        />
      </div>
    </>
  )
}

export default MainContent
