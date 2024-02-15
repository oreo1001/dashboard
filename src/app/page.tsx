import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import { AssistantView, MainView } from './mainView'
import { Computer } from './temp/computer'
import ImageFrame, { ImageButton } from './component/imageFrame'
import ShortExplain, { ShortExplain2 } from './component/shortExplain'
import Carousel from './temp/customCarousel22'
import CustomCarousel2 from './guide/guideCarousel'

export default function Main() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen min-h-screen">
      <DarkMode>
        <MainContent></MainContent>
        <ShortExplain2></ShortExplain2>

        <div className="pt-[100px] flex flex-col items-center">
          <AssistantView></AssistantView>
        </div>
        <div className="pt-[100px] flex flex-col items-center">
          <MainView
            title="For busy people like you"
            description="For the busy person who can't keep track of their schedule Donna knows your schedule, sends and receives emails, and schedules appointments for you."
            imgSrc="/assets/mainImage1.png"
          />
          <MainView
            title="Of course you'll join me, right?"
            description="Donna will send you a second confirmation email to make sure you don't miss it! If the other person accepts, the appointment will be saved to their calendar too, so neither of you will forget."
            imgSrc="/assets/mainImage2.png"
          />
          <MainView
            title="You can check your schedule in the calendar"
            description="Events that you accept an invitation to are automatically added to your Google Calendar, saving you the trouble of adding them to your calendar each time."
            imgSrc="/assets/mainImage3.png"
          />
          {/* <div className="mt-48 w-screen h-[50px] flex justify-center items-center gradient-animated bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="w-[1200px] flex flex-col">
              <div className="text-white">privacy policy</div>
              <div className="text-white">copyright wonmo</div>
            </div>
          </div> */}
          <div className="w-full bg-[#15203B]">
            <div className="mx-12 h-[200px] flex flex-col justify-center item-start pl-2 md:pl-6 pb-5">
              <div className=" text-white text-lg xl:text-xl">
                Privacy policy
              </div>
              <div className=" text-white text-sm xl:text-md pt-3">
                Copyright © 2024 Wonmo, INC. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </DarkMode>
    </div>
  )
}
