import OurPartners from '@/components/partner/OurPartners'
import OurServices from '@/components/services/OurServices'
import Slider from '@/components/slider/Slider'
import OurVision from '@/components/vision/OurVision'

export default function Home() {
  return (
    <main>
      <Slider />
      <OurServices />
      <OurPartners />
      <OurVision />
    </main>
  )
}
