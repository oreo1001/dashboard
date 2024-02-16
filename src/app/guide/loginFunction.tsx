import { reset, setAuth } from '@/redux/slices/authSlice'
import axios from 'axios'

export const sendProfileAPI = async (dispatch: any, cookies: any) => {
  const TOKEN_EXPIRE_TIME = 3600 * 250 //(15분)
  console.log(cookies)
  if (cookies.access_token === undefined) {
    // dispatch(reset())
    console.log('세션이 만료되어서 홈페이지로 되돌아가기')
  } else {
    let response = await axios.post('/api/auth/profile')
    if (response.data['error'] === undefined) {
      dispatch(setAuth(response.data))
      setTimeout(silentRefreshAccessToken, TOKEN_EXPIRE_TIME)
    }
  }
}

const silentRefreshAccessToken = async () => {
  try {
    await axios.get('/api/auth/refresh')
    console.info('silent refresh success')
  } catch (e) {
    console.log(e)
  }
}

export const sendRefreshTokenToBack = async (dispatch: any, cookies: any) => {
  if (cookies.refresh_token === undefined) {
    dispatch(reset())
  } else {
    const tempRefreshToken = cookies.refresh_token
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/auth/signIn',
      {
        refreshToken: tempRefreshToken,
      },
      {
        withCredentials: true,
      },
    )
    console.log(response.data)
  }
}
