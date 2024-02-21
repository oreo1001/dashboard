import { IoCheckmark } from 'react-icons/io5'
import ImageFrame from './component/imageFrame'

export function MainView({ title, description, imgSrc }: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between py-0 md:py-10">
      <div className="flex flex-col w-96 sm:w-[500px] md:w-96 xl:w-[470px] h-24 md:h-96 justify-center">
        <div className="font-semibold text-lg sm:text-lg md:text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-2 md:pt-4 xl:pt-8 text-xs sm:text-sm md:text-md xl:text-lg">
          {description}
        </div>
      </div>
      <div className="flex flex-col my-[50px] md:my-0 pt-0 md:pt-[200px] w-full md:w-96 xl:w-[400px] h-full md:h-48 xl:h-[200px] justify-center ml-0 md:ml-12 lg:ml-16 xl:ml-36">
        <ImageFrame size={300} src={imgSrc}></ImageFrame>
      </div>
    </div>
  )
}
export function MainViewColor({ num, title, description, imgSrc, color }: any) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between mb-20 py-5 md:py-10 rounded-3xl ${color} px-10 sm:px-12 md:px-14 lg:px-20`}
    >
      <div className="flex flex-col w-96 sm:w-[500px] md:w-96 xl:w-[470px] h-24 md:h-96 pt-0 md:pt-10">
        <div className="font-semibold text-lg sm:text-lg md:text-lg xl:text-2xl text-blue-600">
          step {num}
        </div>
        <div className="pt-2 md:pt-4 xl:pt-8 font-semibold text-lg sm:text-lg md:text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-1 md:pt-2 xl:pt-4 text-xs sm:text-sm md:text-md xl:text-lg">
          {description}
        </div>
      </div>
      <div className="flex flex-col my-[50px] md:my-0 pt-0 md:pt-[200px] w-full md:w-96 xl:w-[400px] h-full md:h-48 xl:h-[200px] justify-center ml-0 md:ml-12 lg:ml-16 xl:ml-36">
        <ImageFrame size={300} src={imgSrc}></ImageFrame>
      </div>
    </div>
  )
}
export function AssistantView() {
  return (
    <>
      <div className="w-full bg-[url('/assets/mainBackground2.png')] bg-cover bg-center h-96 md:h-[400px] lg:h-[500px] xl:h-[700px] flex justify-center">
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
              Tailored to your preferences
            </div>
          </div>

          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              Send emails all day long
            </div>
          </div>
          <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              Reliable and Trustworthy
            </div>
          </div>
          {/* <div className="font-semibold pt-5 md:pt-8 xl:pt-12 text-white flex flex-row">
            <IoCheckmark
              className="text-white rounded-full shadow-lg h-4 md:h-8"
              size={30}
            ></IoCheckmark>
            <div className="pt-1 pl-3 text-xs md:text-sm lg:text-base xl:text-lg">
              회신을 바로 보내서 빠른 소통이 가능해요
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
