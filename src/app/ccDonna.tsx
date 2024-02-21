import ImageFrame, { ImageButton } from './component/imageFrame'
import Image from 'next/image'

export default function CCDonna() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center w-80">
        <div>Spending too much time scheduling meetings? Just cc Donna</div>
        <div>
          Don't worry about keeping track of when you're free, Donna will
          coordinate and schedule time with your counterparts on your behalf.
          Don't waste your time anymore!
        </div>
      </div>
      <div className="w-16"></div>
      <div className="w-32 h-32 rounded-full bg-black">hi</div>
    </div>
  )
}

export function CDonna() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 md:p-20">
      <div className="flex flex-col font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl">
        <div className="">Spending too much time scheduling meetings?</div>
        <div className="">Just cc Donna,</div>
        <div className="">and then it’s taken care of.</div>
        <div className="mt-5 md:mt-24 flex justify-center">
          <ImageFrame size={1000} src={'/assets/mainCC.png'}></ImageFrame>
        </div>
      </div>
      <div className=""></div>
      <div className="relative p-10 flex">
        <div className="absolute bottom-10 w-16 h-16 z-10">
          <Image
            className="p-2 border-1 rounded-xl shadow-custom-light bg-white"
            src={'/assets/icon/달력.png'}
            alt="cover"
            fill
            style={{ objectFit: 'contain' }}
            placeholder="blur"
            blurDataURL="/assets/placeholder.png"
          />
          {/* <ImageFrame size={30} src={'/assets/icon/달력.png'}></ImageFrame> */}
        </div>
        <div className="absolute right-9 w-16 h-16 z-10">
          <Image
            className="p-2 border-1 rounded-xl shadow-custom-light bg-white"
            src={'/assets/icon/시계.png'}
            alt="cover"
            fill
            style={{ objectFit: 'contain' }}
            placeholder="blur"
            blurDataURL="/assets/placeholder.png"
          />
        </div>
        <div className="relative w-56 md:w-72 xl:w-80 h-56 md:h-72 xl:h-80">
          <Image
            src={'/assets/donnaMain.png'}
            alt="cover"
            fill
            style={{ objectFit: 'contain' }}
            placeholder="blur"
            blurDataURL="/assets/placeholder.png"
          />
        </div>
        {/* <ImageFrame size={300} src={'/assets/donnaMain.png'}></ImageFrame> */}
      </div>
    </div>
  )
}
