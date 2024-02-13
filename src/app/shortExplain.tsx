import ImageFrame, { ImageButton } from './component/imageFrame'

export default function ShortExplain() {
  return (
    <div className="flex flex-col">
      <div className="flex px-2 font-semibold text-2xl pt-48 justify-center">
        더 편한 비즈니스를 원하시나요? 도나를 추천드려요!
      </div>
      <div className="flex flex-row pt-16 justify-center">
        <div className="pl-5 flex">
          <ImageFrame size={200} src={'/assets/mainImage1.png'}></ImageFrame>
        </div>
        <div className="pl-16 flex flex-col justify-between  pr-5 pb-5">
          <div className="flex flex-row">
            <ImageButton
              size={32}
              src={'/assets/icon/업무시간.png'}
            ></ImageButton>
            <div className="flex items-center pl-5 ">
              일정을 생각할 시간조차 없이 바빠요
            </div>
          </div>
          <div className="flex flex-row">
            <ImageButton
              size={32}
              src={'/assets/icon/스케쥴.png'}
            ></ImageButton>
            <div className="flex items-center pl-5 ">
              일정이 너무 많아 정리가 안 돼요!
            </div>
          </div>
          <div className="flex flex-row">
            <ImageButton size={32} src={'/assets/icon/돈.png'}></ImageButton>
            <div className="flex items-center pl-5 ">
              비서를 고용하고 싶지만 가격이 부담돼요
            </div>
          </div>
          <div className="flex flex-row">
            <ImageButton size={32} src={'/assets/icon/시간.png'}></ImageButton>
            <div className="flex items-center pl-5 ">
              자동화로 시간을 절약하고 싶어요!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
