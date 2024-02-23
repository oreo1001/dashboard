'use client'
import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TempState = {
  value: number
  userButton: boolean
}

const initialState: TempState = {
  value: 0,
  userButton: false,
}

export const tempSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    clickUserButton: (state, action: PayloadAction<boolean>) => {
      state.userButton = action.payload
    },
  },
})

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  clickUserButton,
} = tempSlice.actions
export const selectValue = (state: RootState) => state.temp.value
export const selectUserButton = (state: RootState) => state.temp.userButton
export default tempSlice.reducer
