import LoginButton from './loginButton'
import ImageFrame from './component/imageFrame'

export default function MainContent() {
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="max-w-[600px] pt-[150px] flex flex-col justify-center items-center">
        <div className="flex text-4xl pb-5 text-center font-semibold text-gray-700 items-center justify-center">
          One and only mail assistant
        </div>
        <div className="flex py-3 text-lg text-center text-gray-600 ">
          Donna is your personal scheduling assistant that manages and
          coordinates your appointments.
        </div>
        <div className="pb-12 border-t-[1px] border-stone-200 w-full"></div>
        <div className="mb-12">
          <ImageFrame src={'/assets/assistant1.png'} size={600}></ImageFrame>
        </div>
        <LoginButton></LoginButton>
      </div>
    </div>
  )
}
