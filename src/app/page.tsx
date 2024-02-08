import MainDarkMode from './mainDarkMode'
import { cookies } from 'next/headers'
import LoginButton from './loginButton'
import Image from 'next/image'

export default function Auth() {
  //const accessToken = cookies().get('access_token') || ''
  //console.log('access_token 출력 : ',accessToken)
  return (
    <div className="h-screen">
      <MainDarkMode>
        <div className="flex justify-center items-start min-h-screen">
          <div className="max-w-[600px] pt-[150px] flex flex-col justify-center items-center">
            <div className="flex text-4xl pb-5 text-center font-semibold text-gray-700 items-center justify-center">
              Easy scheduling with others
            </div>
            <div className="flex py-3 text-lg text-center text-gray-600 ">
              CareeBee is the best choice for you. You will be able to minimize
              the inconvenience of coordinating schedules with others.
            </div>
            <div className="pb-12 border-t-[1px] border-stone-200 w-full"></div>
            <Image
              className="pb-12"
              src="/assets/assistant1.png"
              alt="intro"
              width={600}
              height={600}
              style={{
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
              }}
            />
            <LoginButton></LoginButton>
          </div>
        </div>
      </MainDarkMode>
    </div>
  )
}
