import SimpleWindow from '../component/simpleWindow'
import DarkMode from '../darkMode'
import { MainNavbar } from '../mainNavBar'
import CompletedContent from './completedContent'

export default function CompletedPage() {
  return (
    <div className="h-screen">
      <DarkMode>
        <SimpleWindow />
        <CompletedContent></CompletedContent>
      </DarkMode>
    </div>
  )
}
