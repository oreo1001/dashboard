import IntroContent from './introContent'
import DarkMode from '../darkMode'
import MyNavbar from './myNavBar'

export default function Intro() {
  return (
    <DarkMode>
      <MyNavbar></MyNavbar>
      <IntroContent></IntroContent>
    </DarkMode>
  )
}
