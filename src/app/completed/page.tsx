import DarkMode from '../darkMode'
import { MainNavbar } from '../mainNavBar'
import CompletedContent from './completedContent'

export default function CompletedPage() {
  return (
    <div className="h-screen">
      <DarkMode>
        <CompletedContent></CompletedContent>
      </DarkMode>
    </div>
  )
}
