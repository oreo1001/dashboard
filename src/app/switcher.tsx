'use client'

import React, { useState } from 'react'

interface SwitcherProps {
  onToggle: (value: boolean) => void
}

const Switcher = ({onToggle} : SwitcherProps) => {
  const [isChecked, setIsChecked] = useState(true)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    onToggle(!isChecked)
  }

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center justify-end">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span className="label flex items-center text-lg font-bold text-stone-400">
          Dark
        </span>
        <span
          className={`slider mx-3 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-indigo-400' : 'bg-[#CCCCCE]'
          }`}
        >
          {isChecked ? (
            <div className='flex items-center text-sm'>☀️</div> // 해 모양 아이콘
          ) : null}
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[13px]' : ''
            }`}
          > 
          </span>
          {!isChecked ? (
            <div className='flex w-4 text-sm'>🌙</div> // 달 모양 아이콘
          ) : null}
        </span>
        <span className="label flex items-center text-lg font-bold text-indigo-400">
          Light
        </span>
      </label>
    </>
  )
}

export default Switcher;