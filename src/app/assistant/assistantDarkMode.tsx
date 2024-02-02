'use client'

import { ReactNode, useState } from 'react'
import { DARK_COLORS, LIGHT_COLORS } from '@/constant'
import { AssistantNavbar } from './assistantNavBar'

interface AssistantDarkProps {
  children: ReactNode
}
function AssistantDarkMode({ children }: AssistantDarkProps) {
  const [colorTheme, setColorTheme] = useState('light')

  const colorVariables = colorTheme === 'light' ? DARK_COLORS : LIGHT_COLORS

  const toggleTheme = () => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      className={`min-h-screen ${colorTheme == 'light' ? 'bg-white text-black' : 'bg-[#2f3537] text-white'}`}
    >
      <AssistantNavbar onToggleTheme={toggleTheme} />
      {children}
    </div>
  )
}

export default AssistantDarkMode
