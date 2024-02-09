import Image from 'next/image'

interface ImageFrameProps {
  size: number
  src: string
}

export default function ImageFrame({ size, src }: ImageFrameProps) {
  return (
    <div>
      <Image
        className="rounded-xl"
        src={src}
        alt="frame"
        width={size}
        height={size}
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
        style={{
          maxWidth: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  )
}

export function ImageFrameGrayBorder({ size, src }: ImageFrameProps) {
  return (
    <div>
      <Image
        className="rounded-xl border-2 border-gray-500"
        src={src}
        alt="frame2"
        width={size}
        height={size}
        placeholder="blur"
        blurDataURL="/assets/placeholder.png"
        style={{
          maxWidth: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  )
}
