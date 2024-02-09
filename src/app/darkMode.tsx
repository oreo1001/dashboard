'use client'

import { ReactNode, useState } from 'react'
import { DARK_COLORS, LIGHT_COLORS } from '@/constant'
import { MainNavbar } from './mainNavBar'
import { useAppSelector } from '@/redux/hooks'
import { getColorState } from '@/redux/slices/colorSlice'

interface DarkProps {
  children: ReactNode
}
function DarkMode({ children }: DarkProps) {
  const isLight = useAppSelector(getColorState)
  const colorVariables = !isLight ? DARK_COLORS.color : LIGHT_COLORS.color

  return (
    <div
      className={`min-h-screen ${colorVariables} ${isLight ? 'text-black' : 'text-white'}`}
    >
      {children}
    </div>
  )
}

export default DarkMode
