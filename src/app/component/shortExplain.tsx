import ImageFrame, { ImageButton } from './imageFrame'

function ImageButtonBlock({ src, text }: any) {
  return (
    <div className="flex flex-row">
      <div className="w-10 sm:w-12 xl:w-14 h-10 sm:h-12 xl:h-14">
        <ImageButton size={100} src={src}></ImageButton>
      </div>
      <div className="flex items-center pl-5 xl:pl-8 text-xs sm:text-base lg:text-xl xl:text-2xl">
        {text}
      </div>
    </div>
  )
}

export default function ShortExplain() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4 font-semibold text-base md:text-2xl xl:text-4xl py-12 md:py-24 xl:py-36 justify-center text-center">
        <div>Stressed due to emailing back-and-forth?</div>
        <div className="pt-2">Donna is a perfect solution</div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-64 md:w-84 lg:w-[400px] xl:w-[500px] h-64 md:h-84 lg:h-[400px] xl:h-[450px] pl-5 flex">
          <ImageFrame size={400} src={'/assets/mainImage1.png'}></ImageFrame>
        </div>
        <div className="pl-8 md:pl-16 lg:pl-20 xl:pl-24 flex flex-col justify-between pr-5 pb-5">
          <ImageButtonBlock
            src="/assets/icon/업무시간.png"
            text="일정을 생각할 시간조차 없이 바빠요"
          />
          <ImageButtonBlock
            src="/assets/icon/스케쥴.png"
            text="일정이 너무 많아 정리가 안 돼요!"
          />
          <ImageButtonBlock
            src="/assets/icon/돈.png"
            text="비서를 고용하고 싶지만 가격이 부담돼요"
          />
          <ImageButtonBlock
            src="/assets/icon/시간.png"
            text="자동화로 시간을 절약하고 싶어요!"
          />
        </div>
      </div>
    </div>
  )
}
