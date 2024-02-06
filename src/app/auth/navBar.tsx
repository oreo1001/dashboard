import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession() //세션 정보를 가져옴

  return (
    <nav className="flex items-center justify-between px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">unigram</h1>
      </Link>
      {session ? ( //세션 정보가 있으면 signOut()호출
        <>
          <div className="cursor-pointer" onClick={() => signOut()}>
            log out
          </div>
          <div>
            User Email: {session.user!.email} {/* 사용자의 이메일을 출력 */}
            User Name: {session.user!.name} {/* 사용자의 이름을 출력 */}
          </div>
        </>
      ) : (
        //세션 정보가 없으면 signIn()호출
        <div className="cursor-pointer" onClick={() => signIn('google')}>
          sign in
        </div>
      )}
    </nav>
  )
}
