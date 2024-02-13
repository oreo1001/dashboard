import ImageFrame, { ImageButton } from './component/imageFrame'

export function Computer() {
  return (
    <div className="pt-12 flex flex-row">
      <div className="flex flex-col justify-center items-end">
        <div className="flex flex-row w-20">
          <ImageButton
            src="/assets/logo/google-calendar-logo.png"
            size={50}
          ></ImageButton>
          <div className="ml-3 ">
            <ImageButton
              src="/assets/logo/gmail-logo.png"
              size={50}
            ></ImageButton>
          </div>
        </div>
        <div className="flex flex-row pt-5">
          <div className="shadow-custom-light w-14 h-16 rounded-md flex flex-col items-center">
            <div className="flex justify-center w-full text-[8px]">9</div>
            <div className="pt-1 flex flex-row w-full">
              <div className="border-l-2 border-[#F2C44D] ml-1 h-2"></div>
              <div className="pl-1 text-[6px]">11am online meeting</div>
            </div>
          </div>
          <div className="shadow-custom-light w-[60px] h-[80px] rounded-md flex flex-col items-center ml-3 justify-start">
            <div className="flex justify-center w-full text-[8px]">10</div>
            <div className="pt-1 flex flex-row justify-start">
              <div className="border-l-2 border-[#4DADF2] h-2"></div>
              <div className="pl-1 text-[6px]">1pm meeting</div>
            </div>
            <div className="pt-1 flex flex-row justify-start">
              <div className="border-l-2 border-[#F2754D] h-2"></div>
              <div className="pl-1 text-[6px]">6pm having dinner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-12 mb-12">
        <ImageFrame src={'/assets/assistant1.png'} size={400}></ImageFrame>
      </div>
      <div>
        <div className="flex flex-row">
          <ImageButton
            src="/assets/logo/google-logo.png"
            size={50}
          ></ImageButton>
          <div className="ml-3 ">
            <ImageButton
              src="/assets/logo/dona-logo.png"
              size={50}
            ></ImageButton>
          </div>
        </div>
      </div>
    </div>
  )
}
