import CustomCarousel from '../component/customCarousel'
import DarkMode from '../darkMode'

export default function GuidePage() {
  return (
    <div className="h-screen">
      <DarkMode>
        <div className="flex flex-col justify-center items-center min-h-screen">
          <CustomCarousel></CustomCarousel>
        </div>
      </DarkMode>
    </div>
  )
}
