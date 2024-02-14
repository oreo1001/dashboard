import { IoCheckmark } from 'react-icons/io5'
import ImageFrame from './component/imageFrame'

export function MainView1() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col h-full w-96 pt-12 pl-5">
        <div className="flex items-center font-semibold text-lg">
          For busy people like you
        </div>
        <div className="pt-3 text-md">
          For the busy person who can&apos;t keep track of their schedule Donna
          knows your schedule, sends and receives emails, and schedules
          appointments for you.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame size={300} src={'/assets/mainImage1.png'}></ImageFrame>
      </div>
    </div>
  )
}

export function MainView2() {
  return (
    <div className="flex flex-row pt-36">
      <div className="w-96 pt-12 pl-5">
        <div className="font-semibold text-lg">
          Of course you&apos;ll join me, right?
        </div>
        <div className="pt-3 text-md">
          Donna will send you a second confirmation email to make sure you
          don&apos;t miss it! If the other person accepts, the appointment will
          be saved to their calendar too, so neither of you will forget.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame size={300} src={'/assets/mainImage2.png'}></ImageFrame>
      </div>
    </div>
  )
}

export function MainView3() {
  return (
    <div className="flex flex-row pt-36">
      <div className="w-96 pt-12 pl-5">
        <div className="font-semibold text-lg">
          You can check your schedule in the calendar
        </div>
        <div className="pt-3 text-md">
          Events that you accept an invitation to are automatically added to
          your Google Calendar, saving you the trouble of adding them to your
          calendar each time.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame size={300} src={'/assets/mainImage3.png'}></ImageFrame>
      </div>
    </div>
  )
}
export function MainView4() {
  return (
    <>
      <div className="w-full bg-[url('/assets/main2.png')] bg-cover bg-center h-96 md:h-[400px] lg:h-[500px] xl:h-[700px] flex justify-center">
        <div className="flex flex-col max-w-[1200px] xl:pl-[100px] md:pl-[50px] pl-3 xl:pt-[200px] lg:pt-24 pt-16 w-full">
          <div className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl text-white">
            Why we have to use ai assistant?
          </div>
          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              {' '}
              간단한 사용법
            </div>
          </div>

          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              24시간 365일 언제든 메일을 주고받을 수 있어요
            </div>
          </div>
          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              비서 고용 금액보다 저렴한 금액으로 이용할 수 있어요
            </div>
          </div>
          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              회신을 바로 보내서 빠른 소통이 가능해요
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
