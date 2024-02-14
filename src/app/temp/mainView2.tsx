import ImageFrame from '../component/imageFrame'

export function MainView1() {
  return (
    <div className="flex flex-col">
      <div className="w-[450px] pt-12">
        <div className="font-semibold text-lg text-center">
          For busy people like you
        </div>
        <div className="pt-3 text-md text-center">
          For the busy person who can&apos;t keep track of their schedule Donna
          knows your schedule, sends and receives emails, and schedules
          appointments for you.
        </div>
      </div>
      <div className="p-12 flex justify-center">
        <ImageFrame size={300} src={'/assets/mainImage1.png'}></ImageFrame>
      </div>
    </div>
  )
}

export function MainView2() {
  return (
    <div className="flex flex-row pt-36">
      <div className="w-96 pt-12 pl-5">
        <div className="text-blue-600 font-semibold text-lg">
          Of course you&apos;ll join me, right?
        </div>
        <div className="pt-3 text-md">
          Donna will send you a second confirmation email to make sure you
          don&apos;t miss it! If the other person accepts, the appointment will
          be saved to their calendar too, so neither of you will forget.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame size={300} src={'/assets/mainImage2.png'}></ImageFrame>
      </div>
    </div>
  )
}

export function MainView3() {
  return (
    <div className="flex flex-row py-36">
      <div className="w-96 pt-12 pl-5">
        <div className="text-blue-600 font-semibold text-lg">
          You can check your schedule in the calendar
        </div>
        <div className="pt-3 text-md">
          Events that you accept an invitation to are automatically added to
          your Google Calendar, saving you the trouble of adding them to your
          calendar each time.
        </div>
      </div>
      <div className="p-12">
        <ImageFrame size={300} src={'/assets/mainImage3.png'}></ImageFrame>
      </div>
    </div>
  )
}
