import DarkMode from '../darkMode'
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
