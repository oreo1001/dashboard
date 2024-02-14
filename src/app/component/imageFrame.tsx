import Image from 'next/image'

interface ImageFrameProps {
  size: number
  src: string
}

export default function ImageFrame({ size, src }: ImageFrameProps) {
  return (
    <Image
      className="rounded-xl"
      src={src}
      alt="frame"
      width={size}
      height={size}
      quality={100}
      placeholder="blur"
      blurDataURL="/assets/placeholder.png"
      style={{
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
      }}
    />
  )
}
export function ImageFrameWidth({ size, src }: ImageFrameProps) {
  return (
    <Image
      className="rounded-xl"
      src={src}
      alt="frame"
      width={size}
      height={size}
      quality={100}
      placeholder="blur"
      blurDataURL="/assets/placeholder.png"
      style={{
        maxHeight: '100%',
        width: 'auto',
      }}
    />
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
        quality={100}
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

export function ImageButton({ size, src }: ImageFrameProps) {
  return (
    <Image
      className="p-1 border-1 rounded-md shadow-custom-light"
      src={src}
      alt="frame2"
      width={size}
      height={size}
      layout="responsive"
      placeholder="blur"
      blurDataURL="/assets/placeholder.png"
      style={{
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
      }}
    />
  )
}
