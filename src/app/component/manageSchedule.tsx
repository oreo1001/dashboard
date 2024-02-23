import Image from 'next/image'
const items = [
  {
    imageUrl: '/assets/carousel/videoCalls.png',
    bgColor: 'bg-[#E7EFFF]',
    title: 'Video Calls',
  },
  {
    imageUrl: '/assets/carousel/carouselImage4.png',
    bgColor: 'bg-[#D2E1FF]',
    title: 'Coffee Chat',
  },
  {
    imageUrl: '/assets/dinner1.png',
    bgColor: 'bg-[#E7E8FF]',
    title: 'Meal Appointment',
  },
]

export default function ManageSchedule() {
  return (
    <div className="w-full px-12">
      <div className="flex px-4 font-semibold text-base md:text-2xl xl:text-4xl py-12 md:py-24 xl:py-28 justify-center text-center">
        Donna manages all your shedules
      </div>
      <div className="grid grid-cols-3 gap-8">
        {items.map((item, index) => (
          <GridItem
            key={index}
            imageUrl={item.imageUrl}
            bgColor={item.bgColor}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

interface GridItemProps {
  imageUrl: string
  bgColor: string
  title: string
}

export const GridItem: React.FC<GridItemProps> = ({
  imageUrl,
  bgColor,
  title,
}) => (
  <div className="flex flex-col shadow-custom-light rounded-3xl">
    <div
      className={`rounded-t-3xl relative h-24 sm:h-32 md:h-48 lg:h-64 xl:h-80 ${bgColor}`}
    >
      <Image
        className="border-1 p-5 rounded-xl"
        src={imageUrl}
        alt="cover"
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
      />
    </div>
    <div className="rounded-b-3xl h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-white flex justify-center items-center font-semibold text-[10px] sm:text-sm md:text-md lg:text-lg xl:text-xl">
      {title}
    </div>
  </div>
)
