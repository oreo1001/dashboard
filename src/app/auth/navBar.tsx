import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const ifLogin = false

  return (
    <nav className="flex items-center justify-between px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">unigram</h1>
      </Link>
      c
    </nav>
  )
}
