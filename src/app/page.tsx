import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import { MainView1, MainView2, MainView3, MainView4 } from './mainView'
import { Computer } from './temp/computer'
import ImageFrame, { ImageButton } from './component/imageFrame'
import ShortExplain from './component/shortExplain'
import Carousel from './temp/customCarousel22'
import CustomCarousel2 from './component/customCarousel'

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
          {/* <div className="mt-48 w-screen h-[50px] flex justify-center items-center gradient-animated bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="w-[1200px] flex flex-col">
              <div className="text-white">privacy policy</div>
              <div className="text-white">copyright wonmo</div>
            </div>
          </div> */}
          <div className="max-w-[1200px] w-full mt-24 h-[100px] flex flex-col justify-start pl-6">
            <div className="text-blue-400 text-lg">Privacy policy</div>
            <div className="text-sm pt-3">
              Copyright © 2024 Wonmo, INC. All rights reserved{' '}
            </div>
          </div>
        </div>
      </DarkMode>
    </div>
  )
}
