'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  CarouselView1,
  CarouselView2,
  CarouselView3,
  CarouselView4,
} from './carouselView'

function CustomCarousel2() {
  const settings = {
    className: 'relative',
    dots: true,
    autoplaySpeed: 10000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    // centerMode: true,
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold">
          도나와 더 편리한 비즈니스 생활을 누리세요!
        </div>
        <div className="text-md pt-4">
          도나는 당신의 스케쥴을 조율하여 일정을 관리합니다.
        </div>
        <div className="text-md">앞으로 복잡한 일정 관리에서 벗어나세요!</div>
      </div>
      <Slider {...settings} className="flex my-4 h-[450px]">
        <div className="flex items-center ">
          <div className="flex items-center justify-center h-full">
            <CarouselView1></CarouselView1>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center justify-center h-full">
            <CarouselView2></CarouselView2>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center justify-center h-full">
            <CarouselView3></CarouselView3>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center justify-center h-full">
            <CarouselView4></CarouselView4>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default CustomCarousel2
