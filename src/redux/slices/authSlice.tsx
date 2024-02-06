'use client'

import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

type AuthState = {
  value: number
}

const initialState: AuthState = {
  value: 0,
}

export const authSlice = createSlice({
  name: 'auth',
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
  },
})

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = authSlice.actions

const persistConfig = {
  key: 'auth',
  storage,
}
export const selectValue = (state: RootState) => state.auth.value
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer)

export default persistedAuthReducer
