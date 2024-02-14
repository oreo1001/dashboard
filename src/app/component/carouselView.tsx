import { IoCheckmark } from 'react-icons/io5'
import ImageFrame from './imageFrame'

export function CarouselView1() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col h-full w-96 pt-12 pl-5">
        <div className="flex items-center text-blue-700 font-medium pb-6 text-xl ">
          step 1
        </div>
        <div className="flex items-center font-semibold text-lg">
          먼저 도나를 CC에 추가하세요
        </div>
        <div className="pt-3 text-md">
          상대방과 일정을 조율할 일이 생겼을 때 참조에 도나의 이메일 주소를
          추가하여 메일을 발송하세요.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame
          size={300}
          src={'/assets/carousel/carouselImage1.png'}
        ></ImageFrame>
      </div>
    </div>
  )
}

export function CarouselView2() {
  return (
    <div className="flex flex-row">
      <div className="w-96 pt-12 pl-5">
        <div className="flex items-center text-blue-700 font-medium pb-6 text-xl ">
          step 2
        </div>
        <div className="flex items-center font-semibold text-lg">
          선호 시간대를 알려주세요
        </div>
        <div className="pt-3 text-md">
          DONNA에게 원하는 때를 간단하게 알려주세요! 당신의 캘린더에 있는 일정과
          시간이 겹친다면 다른 시간을 추천드릴거예요. 내 일정이 언제 비었는지
          생각할 필요 없으니 편리하죠.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame
          size={300}
          src={'/assets/carousel/carouselImage2.png'}
        ></ImageFrame>
      </div>
    </div>
  )
}

export function CarouselView3() {
  return (
    <div className="flex flex-row">
      <div className="w-96 pt-12 pl-5">
        <div className="flex items-center text-blue-700 font-medium pb-6 text-xl ">
          step 3
        </div>
        <div className="flex items-center font-semibold text-lg">
          상대방과 일정 조율
        </div>
        <div className="pt-3 text-md">
          DONNA가 당신의 선호 시간대를 파악하였다면 상대방에게 메일을 보내 일정
          조율을 시작할 것 입니다. 만약 상대방이 선약이 있다면 당신의 의견을
          듣고 다시 조율할 것이니 걱정 마세요.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame
          size={300}
          src={'/assets/carousel/carouselImage3.png'}
        ></ImageFrame>
      </div>
    </div>
  )
}

export function CarouselView4() {
  return (
    <div className="flex flex-row">
      <div className="w-96 pt-12 pl-5">
        <div className="flex items-center text-blue-700 font-medium pb-6 text-xl ">
          step 4
        </div>
        <div className="flex items-center font-semibold text-lg">
          구글 캘린더 일정 초대
        </div>
        <div className="pt-3 text-md">
          모든 일정 조율이 끝나면 DONNA가 당신과 상대방 모두에게 구글 캘린더
          일정 초대 메일을 보낼것 입니다. 이를 수락하면 구글 캘린더에 일정이
          등록되고, 도나는 이를 바탕으로 새로운 일정을 만들때 참고하게 될거예요.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame
          size={300}
          src={'/assets/carousel/carouselImage4.png'}
        ></ImageFrame>
      </div>
    </div>
  )
}
