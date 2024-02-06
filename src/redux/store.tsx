import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import persistedAuthReducer from './slices/authSlice'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistedAuthReducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null)
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: any) {
      return Promise.resolve()
    },
  }
}

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local')

const rootPersistConfig = {
  key: 'root', // root에서부터 저장"
  storage, // storage = localStorage
  // blacklist: ['question'],
}
export default storage

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   AnyAction
// >
