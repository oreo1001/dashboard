'use client'
import { useState } from 'react'

interface CarouselProps {
  components: React.ReactNode[]
}

export default function Carousel({ components }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + components.length) % components.length)
  }

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % components.length)
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex justify-center">
        {components.map((Component, index) => (
          <div
            key={index}
            className={`flex justify-center items-center transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {Component}
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <button onClick={goPrev}>Prev</button>
        <button className="pl-10" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  )
}
