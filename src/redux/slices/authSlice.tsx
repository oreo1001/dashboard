'use client'

import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
import storage from 'redux-persist/lib/storage'

type AuthState = {
  isLogin: boolean
  id: string
  name: string
  email: string
  picture: string
}

const initialState: AuthState = {
  id: '',
  name: '',
  email: '',
  picture: '',
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isLogin = true
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.picture = action.payload.picture
    },
  },
})

export const { reset, setAuth } = authSlice.actions

const persistConfig = {
  key: 'auth',
  storage
}
export const getAuthState = (state: RootState) => state.auth
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer) 

export default persistedAuthReducer
