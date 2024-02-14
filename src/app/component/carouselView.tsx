import ImageFrame from './imageFrame'

export function CarouselView({ step, title, description, imgSrc }: any) {
  return (
    <div className="flex flex-row">
      <div className="w-96 pt-12 xl:pt-16 pl-5 h-full">
        <div className="flex items-center text-blue-700 font-medium pb-6 xl:pb-12 text-xl xl:text-4xl ">
          {step}
        </div>
        <div className="flex items-center font-semibold text-lg xl:text-2xl">
          {title}
        </div>
        <div className="pt-3 xl:pt-6 text-md xl:text-xl">{description}</div>
      </div>
      <div className="flex p-12 xl:h-[550px]">
        <ImageFrame size={300} src={imgSrc}></ImageFrame>
      </div>
    </div>
  )
}

export function CarouselView1() {
  return (
    <CarouselView
      step="step 1"
      title="먼저 도나를 CC에 추가하세요"
      description="상대방과 일정을 조율할 일이 생겼을 때 참조에 도나의 이메일 주소를 추가하여 메일을 발송하세요."
      imgSrc="/assets/carousel/carouselImage1.png"
    />
  )
}

export function CarouselView2() {
  return (
    <CarouselView
      step="step 2"
      title="선호 시간대를 알려주세요"
      description="DONNA에게 원하는 때를 간단하게 알려주세요! 당신의 캘린더에 있는 일정과
    시간이 겹친다면 다른 시간을 추천드릴거예요. 내 일정이 언제 비었는지
    생각할 필요 없으니 편리하죠."
      imgSrc="/assets/carousel/carouselImage2.png"
    ></CarouselView>
  )
}

export function CarouselView3() {
  return (
    <CarouselView
      step="step 3"
      title="상대방과 일정 조율"
      description=" DONNA가 당신의 선호 시간대를 파악하였다면 상대방에게 메일을 보내 일정
      조율을 시작할 것 입니다. 만약 상대방이 선약이 있다면 당신의 의견을
      듣고 다시 조율할 것이니 걱정 마세요."
      imgSrc="/assets/carousel/carouselImage3.png"
    ></CarouselView>
  )
}

export function CarouselView4() {
  return (
    <CarouselView
      step="step 4"
      title="구글 캘린더 일정 초대"
      description=" 모든 일정 조율이 끝나면 DONNA가 당신과 상대방 모두에게 구글 캘린더
    일정 초대 메일을 보낼것 입니다. 이를 수락하면 구글 캘린더에 일정이
    등록되고, 도나는 이를 바탕으로 새로운 일정을 만들때 참고하게 될거예요."
      imgSrc="/assets/carousel/carouselImage4.png"
    ></CarouselView>
  )
}
