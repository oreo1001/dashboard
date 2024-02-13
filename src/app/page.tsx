import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import { MainView1, MainView2, MainView3, MainView4 } from './mainView'
import { Computer } from './computer'
import ImageFrame, { ImageButton } from './component/imageFrame'
import ShortExplain from './shortExplain'
import Carousel from './customCarousel'
import CustomCarousel2 from './carousel2'

export default function Main() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen min-h-screen">
      <DarkMode>
        <MainContent></MainContent>
        <ShortExplain></ShortExplain>

        <div className="pt-[100px] flex flex-col items-center">
          <MainView4></MainView4>
        </div>
        <div className="pt-[100px] flex flex-col items-center">
          <MainView1></MainView1>
          <MainView2></MainView2>
          <MainView3></MainView3>
          {/* <Computer></Computer> */}
          <div className="mt-48 w-screen h-[50px] flex justify-center items-center gradient-animated bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="w-[1200px] flex flex-col">
              <div className="text-white">privacy policy</div>
              <div className="text-white">copyright wonmo</div>
            </div>
          </div>
        </div>
        {/* <Carousel
          components={[MainView1(), MainView2(), MainView3(), MainView4()]}
        /> */}
        <div>
          <CustomCarousel2></CustomCarousel2>
        </div>
      </DarkMode>
    </div>
  )
}
