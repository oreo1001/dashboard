import GuideCarousel from './guideCarousel'
import DarkMode from '../darkMode'

export default function GuidePage() {
  return (
    <div className="h-screen">
      <DarkMode>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <GuideCarousel></GuideCarousel>
        </div>
      </DarkMode>
    </div>
  )
}
