'use client'
import MainDarkMode from '../mainDarkMode'
import {
  decrement,
  increment,
  reset,
  selectValue,
} from '@/redux/slices/authSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import NavBar from './navBar'

export default function Auth() {
  const count = useAppSelector(selectValue)
  const dispatch = useAppDispatch()
  return (
    <div className="h-screen">
      <MainDarkMode>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <div>{count}</div>
        <NavBar></NavBar>
      </MainDarkMode>
    </div>
  )
}
