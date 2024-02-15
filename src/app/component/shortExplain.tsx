import ImageFrame, { ImageButton } from './imageFrame'

function ImageButtonBlock({ src, text, text2 }: any) {
  return (
    <div className="flex flex-row">
      <div className="w-10 sm:w-12 xl:w-14 h-10 sm:h-12 xl:h-14">
        <ImageButton size={100} src={src}></ImageButton>
      </div>
      <div className="flex flex-col pl-5 xl:pl-8">
        <div className="text-sm sm:text-base lg:text-xl xl:text-2xl font-semibold">
          {text}
        </div>
        <div className="text-xs sm:text-sm lg:text-md xl:text-lg">{text2}</div>
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
            text="No more hiring process"
            text2="You can use Donna by just singing in.
            It takes a few seconds."
          />
          <ImageButtonBlock
            src="/assets/icon/스케쥴.png"
            text="You can cancel any time"
            text2="If you're not satisfied with Donna,
            you can cancel at any time."
          />
          <ImageButtonBlock
            src="/assets/icon/돈.png"
            text="Affordable"
            text2="20 times more affordable than
            human assistants."
          />
          <ImageButtonBlock
            src="/assets/icon/시간.png"
            text="Handled within 10 minutes"
            text2="Donna doesn’t sleep 
            You can ask her anything, at any time."
          />
        </div>
      </div>
    </div>
  )
}
export function ShortExplain2() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4 font-semibold text-base md:text-2xl xl:text-4xl py-12 md:py-24 xl:py-28 justify-center text-center">
        <div>Stressed due to emailing back-and-forth?</div>
        <div className="pt-2">Donna is a perfect solution</div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col justify-between items-start h-64 md:h-84 lg:h-[400px] xl:h-[450px]">
          <ImageButtonBlock
            src="/assets/icon/업무시간.png"
            text="No more hiring process"
            text2="You can use Donna by just singing in.
            It takes a few seconds."
          />
          <ImageButtonBlock
            src="/assets/icon/스케쥴.png"
            text="You can cancel any time"
            text2="If you're not satisfied with Donna,
            you can cancel at any time."
          />
          <ImageButtonBlock
            src="/assets/icon/돈.png"
            text="Affordable"
            text2="20 times more affordable than
            human assistants."
          />
          <ImageButtonBlock
            src="/assets/icon/시간.png"
            text="Handled within 10 minutes"
            text2="Donna doesn’t sleep 
            You can ask her anything, at any time."
          />
        </div>
      </div>
    </div>
  )
}
