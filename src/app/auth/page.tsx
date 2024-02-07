import MainDarkMode from '../mainDarkMode'
// import { getCookie, setCookie } from 'cookies-next'
import {cookies} from "next/headers"
import LoginButton from './loginButton'

export default function Auth() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  const refreshToken = cookies().get('refresh_token') || ''
  return (
    <div className="h-screen">
      <MainDarkMode>
        <LoginButton refreshToken={refreshToken}></LoginButton>
      </MainDarkMode>
    </div>
  )
}
