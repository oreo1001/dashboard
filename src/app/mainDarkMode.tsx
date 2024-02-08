'use client'

import { ReactNode, useState } from 'react'
import { DARK_COLORS, LIGHT_COLORS } from '@/constant'
import { MainNavbar } from './mainNavBar'

interface MainDarkProps {
  children: ReactNode
}
function MainDarkMode({ children }: MainDarkProps) {
  const [colorTheme, setColorTheme] = useState('light')

  const colorVariables = colorTheme === 'light' ? DARK_COLORS : LIGHT_COLORS

  const toggleTheme = () => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      className={`min-h-screen ${colorTheme == 'light' ? 'bg-white text-black' : 'bg-[#2f3537] text-white'}`}
    >
      <MainNavbar onToggleTheme={toggleTheme} />
      {children}
    </div>
  )
}

export default MainDarkMode
