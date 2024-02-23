'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAuthState, reset } from '@/redux/slices/authSlice'
import { clickUserButton, selectUserButton } from '@/redux/slices/tempSlice'
import { IoBookOutline } from 'react-icons/io5'
import { IoIosLogOut } from 'react-icons/io'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function SimpleWindow() {
  const profile = useAppSelector(getAuthState)
  const isOpen = useAppSelector(selectUserButton)
  const dispatch = useAppDispatch()
  const [cookies, setCookie, removeCookie] = useCookies()
  const router = useRouter()

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        dispatch(clickUserButton(false))
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const logout = () => {
    removeCookie('refresh_token')
    removeCookie('access_token')
    dispatch(reset())
    dispatch(clickUserButton(false))
    router.replace('/')
  }
  return (
    <div ref={ref}>
      {isOpen ? (
        <div className="absolute top-0 right-0 mt-[70px] mr-4 w-72 p-6 bg-white rounded shadow-lg">
          <div className="flex flex-row">
            <div className="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full bg-blue-500">
              <div className="text-lg md:text-base text-white font-medium flex">
                {profile.name.substring(1, 2)}
              </div>
            </div>
            <div className="flex flex-col pl-3">
              <div>{profile.name}</div>
              <div className="text-xs text-gray-400">{profile.email}</div>
            </div>
          </div>
          <div className="mt-5 p-2 flex-row flex rounded bg-white w-full hover:bg-[#F0F0F0] cursor-pointer items-center">
            <IoBookOutline size={20}></IoBookOutline>
            <div className="pl-3 font-medium">이용 가이드</div>
          </div>
          <div
            className="mt-2 p-2 flex-row flex rounded bg-white w-full hover:bg-[#F0F0F0] cursor-pointer items-center"
            onClick={logout}
          >
            <IoIosLogOut size={20}></IoIosLogOut>
            <div className="pl-3 font-medium">로그아웃</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
