'use client'

import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

type DarkState = {
  isDark: boolean
  theme: string
}

const initialState: DarkState = {
  isDark: false,
  theme: 'bg-[#2f3537] text-white',
}

export const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    reset: () => initialState,
    toggleDark: (state) => {
      if (state.isDark == false) {
        state.isDark = true
        state.theme = 'bg-[#2f3537] text-white border-white'
      } else {
        state.isDark = false
        state.theme = 'bg-white text-black'
      }
    },
  },
})

export const { reset, toggleDark } = darkSlice.actions

const persistConfig = {
  key: 'dark',
  storage,
}
export const getIsDarkState = (state: RootState) => state.dark.isDark
export const getDarkState = (state: RootState) => state.dark.theme
const persistedDarkReducer = persistReducer(persistConfig, darkSlice.reducer)

export default persistedDarkReducer
