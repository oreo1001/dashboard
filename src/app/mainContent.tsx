import LoginButton from './loginButton'
import ImageFrame, { ImageButton } from './component/imageFrame'
import { MainNavbar } from './mainNavBar'

export default function MainContent() {
  return (
    <div className="flex flex-col justify-start items-center">
      <MainNavbar></MainNavbar>
      <div className="flex flex-col items-center w-full bg-[url('/assets/mainBackground1.png')] bg-cover bg-center h-96 md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <div className="max-w-[1200px] w-full pt-24 md:pt-28 lg:pt-32 xl:pt-[200px] flex flex-col justify-start items-start px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex text-lg md:text-2xl lg:text-3xl xl:text-4xl pb-5 font-semibold text-white">
            Your Personal Scheduling Assistant
          </div>
          <div className="w-2/3 md:w-2/3 lg:w-1/2 flex py-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white pb-8">
            No more Emailing back-and-forth. Donna sets up a meeting on your
            behalf.
          </div>
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  )
}
