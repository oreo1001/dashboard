import ImageFrame, { ImageButton } from './imageFrame'
import Image from 'next/image'

function ImageButtonBlock({ src, text, text2 }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center relative w-20 sm:w-28 xl:w-32 h-20 sm:h-28 xl:h-32 rounded-full bg-[#D8E4FF]">
        <Image
          className="p-5 border-1"
          src={src}
          alt="cover"
          fill
          style={{ objectFit: 'contain' }}
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
        />
      </div>
      <div className="flex flex-col w-40 sm:w-48 xl:w-56 justify-center">
        <div className="flex justify-center items-center text-center h-10 sm:h-12 md:h-14 xl:h-20 my-3 text-sm sm:text-base lg:text-xl xl:text-2xl font-semibold text-[#789FFF]">
          {text}
        </div>
        <div className="text-xs text-center sm:text-sm lg:text-md xl:text-lg">
          {text2}
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:gap-10 px-6 sm:px-24 md:px-10 xl:px-12">
        <ImageButtonBlock
          src="/assets/icon/고용.png"
          text="No more hiring process"
          text2="You can use Donna by just singing in.
            It takes a few seconds."
        />
        <ImageButtonBlock
          src="/assets/icon/유저.png"
          text="You can cancel any time"
          text2="If you're not satisfied with Donna,
            you can cancel at any time."
        />
        <ImageButtonBlock
          src="/assets/icon/돈1.png"
          text="Affordable"
          text2="20 times more affordable than
            human assistants."
        />
        <ImageButtonBlock
          src="/assets/icon/시간절약.png"
          text="Handled within 10 minutes"
          text2="Donna doesn’t sleep 
            You can ask her anything, at any time."
        />
      </div>
    </div>
  )
}

// export default function ShortExplain() {
//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col px-4 font-semibold text-base md:text-2xl xl:text-4xl py-12 md:py-24 xl:py-36 justify-center text-center">
//         <div>Stressed due to emailing back-and-forth?</div>
//         <div className="pt-2">Donna is a perfect solution</div>
//       </div>
//       <div className="flex flex-row justify-center">
//         <div className="w-64 md:w-84 lg:w-[400px] xl:w-[500px] h-64 md:h-84 lg:h-[400px] xl:h-[450px] pl-5 flex">
//           <ImageFrame size={400} src={'/assets/mainImage1.png'}></ImageFrame>
//         </div>

//         <div className="flex flex-col ">
//           <ImageButtonBlock
//             src="/assets/icon/고용.png"
//             text="No more hiring process"
//             text2="You can use Donna by just singing in.
//             It takes a few seconds."
//           />
//           <ImageButtonBlock
//             src="/assets/icon/스케쥴.png"
//             text="You can cancel any time"
//             text2="If you're not satisfied with Donna,
//             you can cancel at any time."
//           />
//           <ImageButtonBlock
//             src="/assets/icon/돈.png"
//             text="Affordable"
//             text2="20 times more affordable than
//             human assistants."
//           />
//           <ImageButtonBlock
//             src="/assets/icon/시간절약.png"
//             text="Handled within 10 minutes"
//             text2="Donna doesn’t sleep
//             You can ask her anything, at any time."
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
