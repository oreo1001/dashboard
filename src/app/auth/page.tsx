import MainDarkMode from '../mainDarkMode'
import { decrement, increment, reset } from '@/redux/slices/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Auth() {
  const count = useAppSelector((state) => state.counterReducer.value)
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
      </MainDarkMode>
    </div>
  )
}
