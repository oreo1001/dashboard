import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import { MainView1, MainView2, MainView3, MainView4 } from './mainView'
import { Computer } from './computer'

export default function Main() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen min-h-screen">
      <DarkMode>
        <MainContent></MainContent>
        <div className="pt-[100px] flex flex-col items-center">
          <MainView1></MainView1>
          <MainView2></MainView2>
          <MainView3></MainView3>
          <MainView4></MainView4>
          <Computer></Computer>
          <div className="mt-48 w-screen h-[200px] flex justify-center items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div className="w-[960px] flex flex-col">
              <div className="text-white">privacy policy</div>
              <div className="text-white">copyright wonmo</div>
            </div>
          </div>
        </div>
      </DarkMode>
    </div>
  )
}
