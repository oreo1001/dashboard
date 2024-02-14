import { IoCheckmark } from 'react-icons/io5'
import ImageFrame from './component/imageFrame'

export function MainView({ title, description, imgSrc }: any) {
  return (
    <div className="flex flex-col md:flex-row justify-between py-0 md:py-10">
      <div className="flex flex-col w-96 xl:w-[470px] h-48 md:h-96 justify-center">
        <div className="font-semibold text-lg sm:text-lg md:text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-2 md:pt-4 xl:pt-8 text-xs sm:text-sm md:text-md xl:text-lg">
          {description}
        </div>
      </div>
      <div className="flex flex-col my-[50px] md:my-0 pt-0 md:pt-[200px] w-64 md:w-96 xl:w-[400px] h-32 md:h-48 xl:h-[200px] justify-center ml-0 md:ml-12 lg:ml-16 xl:ml-36">
        <ImageFrame size={300} src={imgSrc}></ImageFrame>
      </div>
    </div>
  )
}
export function AssistantView() {
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
