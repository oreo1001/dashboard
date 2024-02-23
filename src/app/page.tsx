import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import { AssistantView, MainView, MainViewColor } from './mainView'
import { Computer } from './temp/computer'
import ImageFrame, { ImageButton } from './component/imageFrame'
import { ShortExplain2 } from './component/shortExplain'
import Carousel from './temp/customCarousel22'
import CustomCarousel2 from './guide/guideCarousel'
import Footer from './footer'
import CCDonna from './component/ccDonna'
import ManageSchedule from './component/manageSchedule'
import SimpleWindow from './component/simpleWindow'

export default function Main() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen min-h-screen">
      <DarkMode>
        <SimpleWindow />
        <MainContent></MainContent>
        <CCDonna></CCDonna>
        <ShortExplain2></ShortExplain2>

        <div className="flex flex-col items-center">
          <ManageSchedule></ManageSchedule>
        </div>

        <div className="mt-[100px] flex flex-col px-4 font-semibold text-xl md:text-2xl xl:text-4xl py-12 md:py-24 xl:py-28 justify-center text-center">
          <div>Following these steps and meet Donna!</div>
        </div>
        <div className="flex flex-col items-center">
          <MainViewColor
            num="1"
            title="Add Donna to the CC"
            description="When scheduling with someone, please include Donna's email address in the CC when sending the email"
            imgSrc="/assets/carousel/carouselImage1.png"
            color="bg-[#E7EFFF]"
          ></MainViewColor>
          <MainViewColor
            num="2"
            title="Donna will ask for you preference & approval with Google Chat"
            description="Please check your Google Chat. Donna will ask for your preference, and ask for your approval
      when she finds the right time slot for the meeting."
            imgSrc="/assets/carousel/carouselImage2.png"
            color="bg-[#E7E7FF]"
          ></MainViewColor>
          <MainViewColor
            num="3"
            title="Donna will send an email to schedule the meeting"
            description="Once Donna finds the right time slot for the meeting,
            Donna will ask for the availability themselves."
            imgSrc="/assets/carousel/carouselImage3.png"
            color="bg-[#EFE7FF]"
          ></MainViewColor>
          <MainViewColor
            num="4"
            title="Send Google Invite"
            description="Once the meeting is scheduled, a Google Calendar invite will be sent."
            imgSrc="/assets/carousel/carouselImage4.png"
            color="bg-[#EFEFFF]"
          ></MainViewColor>
          {/* <MainView
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
          /> */}
          <Footer></Footer>
        </div>
      </DarkMode>
    </div>
  )
}
