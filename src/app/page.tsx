import DarkMode from './darkMode'
import { MainNavbar } from './mainNavBar'
import MainContent from './mainContent'
import ImageFrame from './component/imageFrame'
import { MainView1, MainView2, MainView3 } from './mainView'

export default function Main() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen min-h-screen">
      <DarkMode>
        <MainNavbar></MainNavbar>
        <MainContent></MainContent>
        <div className="flex flex-col items-center min-h-screen">
          <MainView1></MainView1>
          <MainView2></MainView2>
          <MainView3></MainView3>
        </div>
      </DarkMode>
    </div>
  )
}
