'use client'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  CarouselView1,
  CarouselView2,
  CarouselView3,
  CarouselView4,
} from './carouselView'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRouter } from 'next/navigation'
function CustomCarousel2() {
  const router = useRouter()
  const settings = {
    className: 'relative',
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    // autoplaySpeed: 10000,
    centerMode: true,
    touchMove: false,
  }
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMoving, setIsMoving] = useState(false)
  const sliderRef = useRef<Slider>(null)
  const previousButton = () => {
    if (isMoving) return
    if (currentSlide <= 0) return
    else {
      setIsMoving(true)
      setCurrentSlide(currentSlide - 1)
      sliderRef.current?.slickGoTo(currentSlide - 1)
      setTimeout(() => setIsMoving(false), 1000)
    }
  }
  const nextButton = () => {
    if (isMoving) return
    if (currentSlide > 3) return
    else if (currentSlide == 3) {
      router.replace('/completed')
    } else {
      setIsMoving(true)
      setCurrentSlide(currentSlide + 1)
      sliderRef.current?.slickGoTo(currentSlide + 1)
      setTimeout(() => setIsMoving(false), 1000)
    }
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
      <Slider {...settings} ref={sliderRef} className="flex my-4 h-[450px]">
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
      <div className="flex flex-row justify-center">
        <div
          className="border-[1px] shadow-md rounded-full w-6 h-6 flex items-center justify-center"
          onClick={previousButton}
        >
          <IoIosArrowBack />
        </div>
        <div className="flex justify-center px-5">
          <p className="text-lg">{currentSlide + 1} / 4</p>
        </div>
        <div
          className="border-[1px] shadow-md rounded-full w-6 h-6 flex items-center justify-center"
          onClick={nextButton}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default CustomCarousel2