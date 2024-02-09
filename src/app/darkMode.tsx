'use client'

import { ReactNode } from 'react'
import { DARK_COLORS, LIGHT_COLORS } from '@/constant'
import { useAppSelector } from '@/redux/hooks'
import { getDarkState, getIsDarkState } from '@/redux/slices/darkSlice'

interface DarkProps {
  children: ReactNode
}
function DarkMode({ children }: DarkProps) {
  // const theme2 = useAppSelector(getDarkState)
  const isDark = useAppSelector(getIsDarkState)
  return (
    <div
      id="dark"
      className={`${isDark ? '!bg-[#2f3537] !text-white border-white' : '!bg-white !text-black'}`}
    >
      {children}
    </div>
  )
}

export default DarkMode
