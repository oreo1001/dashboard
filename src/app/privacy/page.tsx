import DarkMode from '../darkMode'
import PrivacyPolicy from './privacyPolicy'

export default function PrivacyPage() {
  return (
    <div className="h-screen">
      <DarkMode>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="text-3xl md:text-5xl font-bold pt-[150px]">
            Privacy Policy
          </div>
          <PrivacyPolicy></PrivacyPolicy>
        </div>
      </DarkMode>
    </div>
  )
}
