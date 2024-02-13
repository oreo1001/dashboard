import LoginButton from './loginButton'
import ImageFrame, { ImageButton } from './component/imageFrame'
import { MainNavbar } from './mainNavBar'

export default function MainContent() {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex flex-col items-center w-full bg-[url('/assets/main1.png')] bg-cover bg-center h-64 sm:h-96 md:h-[400px] lg:h-[500px] xl:h-[700px]">
        <MainNavbar></MainNavbar>
        <div className="max-w-[960px] w-full sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[300px] flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex text-lg md:text-2xl lg:text-3xl xl:text-4xl pb-5 font-semibold text-white">
            One and only mail assistant
          </div>
          <div className="w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3 flex py-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white pb-8">
            Donna is your personal scheduling assistant that manages and
            coordinates your appointments.
          </div>
          <LoginButton></LoginButton>
        </div>
      </div>
    </div>
  )
}
