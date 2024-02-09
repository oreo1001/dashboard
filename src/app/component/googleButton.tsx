import { useRouter } from 'next/navigation'
import ImageFrame from './imageFrame'
import GOOGLE_AUTHORIZATION_URL from './googleUrl'

export function GoogleButton2() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <div
      className="flex flex-row w-56 h-12 cursor-pointer border-[0.5px] rounded-md bg-blue-400"
      onClick={handleSignIn}
    >
      <div className="ml-3 my-auto flex items-center w-8 h-8 bg-white rounded-md">
        <div className="mx-auto">
          <ImageFrame
            src={'/assets/logo/google-logo.png'}
            size={16}
          ></ImageFrame>
        </div>
      </div>

      <div className="ml-2 my-auto flex text-white items-center">
        Sign up with Google
      </div>
    </div>
  )
}
export function GoogleButton() {
  const router = useRouter()
  const handleSignIn = () => {
    router.push(GOOGLE_AUTHORIZATION_URL)
  }
  return (
    <div
      className="flex flex-row w-56 h-12 cursor-pointer border-[2px] rounded-3xl border-blue-400"
      onClick={handleSignIn}
    >
      <div className="my-auto ml-4 mr-1 w-7 h-7">
        <ImageFrame src={'/assets/logo/google-logo.png'} size={18}></ImageFrame>
      </div>

      <div className="ml-2 my-auto flex text-black items-center">
        Get start with Gmail
      </div>
    </div>
  )
}
