import Image from 'next/image'
import Link from 'next/link'
import { MyNavbar } from './myNavBar'
import Switcher from './switcher'
import ColorProvider from './colorProvider'
import MainContent from './mainContent'

export default function Home() {
  return (
    <ColorProvider>
      <MainContent></MainContent>
    </ColorProvider>
  )
}
