import ImageFrame, { ImageFrameWidth } from './imageFrame'

export function CarouselView({ step, title, description, imgSrc }: any) {
  return (
    <div className="flex flex-row">
      <div className="w-80 md:w-96 pt-10 md:pt-12 xl:pt-16 pl-5 md:pl-10 h-full">
        <div className="flex items-center text-blue-700 font-medium pb-2 md:pb-6 xl:pb-12 text-sm md:text-xl xl:text-4xl ">
          {step}
        </div>
        <div className="flex items-center font-semibold text-sm md:text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-1 md:pt-3 xl:pt-6 text-xs md:text-md xl:text-xl">
          {description}
        </div>
      </div>
      <div className="flex p-12 xl:h-[550px] max-w-[600px]">
        <ImageFrame size={300} src={imgSrc}></ImageFrame>
      </div>
    </div>
  )
}
export function CarouselTest({ step, title, description, imgSrc }: any) {
  return (
    <div className="flex flex-row">
      <div className="w-60 md:w-96 pt-10 md:pt-12 xl:pt-16 pl-5 h-full">
        <div className="flex items-center text-blue-700 font-medium pb-2 md:pb-6 xl:pb-12 text-sm md:text-xl xl:text-4xl ">
          {step}
        </div>
        <div className="flex items-center font-semibold text-sm md:text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-1 md:pt-3 xl:pt-6 text-xs sm:text-md xl:text-xl">
          {description}
        </div>
      </div>
      <div className="flex h-20 md:h-64 w-48 md:w-96 md:p-12 mt-24 md:mt-12">
        <ImageFrameWidth size={300} src={imgSrc}></ImageFrameWidth>
      </div>
    </div>
  )
}

export function CarouselView1() {
  return (
    <CarouselView
      step="step 1"
      title="Add Donna to the CC"
      description="When scheduling with someone, please include Donna's email address in the CC when sending the email"
      imgSrc="/assets/carousel/carouselImage1.png"
    />
  )
}

export function CarouselView2() {
  return (
    <CarouselView
      step="step 2"
      title="Donna will ask for you preference & approval with Google Chat"
      description="Please check your Google Chat. Donna will ask for your preference, and ask for your approval
      when she finds the right time slot for the meeting."
      imgSrc="/assets/carousel/carouselImage2.png"
    ></CarouselView>
  )
}

export function CarouselView3() {
  return (
    <CarouselView
      step="step 3"
      title="Donna will send an email to schedule the meeting"
      description="Once Donna finds the right time slot for the meeting,
      Donna will ask for the availability themselves."
      imgSrc="/assets/carousel/carouselImage3.png"
    ></CarouselView>
  )
}

export function CarouselView4() {
  return (
    <CarouselTest
      step="step 4"
      title="Send Google Invite"
      description="Once the meeting is scheduled, a Google Calendar invite will be sent."
      imgSrc="/assets/carousel/carouselImage4.png"
    ></CarouselTest>
  )
}
