'use client'

import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

type ColorState = {
  isToggled: boolean
}

const initialState: ColorState = {
  isToggled: false,
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    reset: () => initialState,
    toggle: (state) => {
      state.isToggled = !state.isToggled
    },
  },
})

export const { reset, toggle } = colorSlice.actions

const persistConfig = {
  key: 'color',
  storage,
}
export const getColorState = (state: RootState) => state.color.isToggled
const persistedColorReducer = persistReducer(persistConfig, colorSlice.reducer)

export default persistedColorReducer
