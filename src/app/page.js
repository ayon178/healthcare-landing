import OurDoctors from '@/components/doctor/OurDoctors'
import Galary from '@/components/galary/Galary'
import OurPartners from '@/components/partner/OurPartners'
import OurServices from '@/components/services/OurServices'
import Slider from '@/components/slider/Slider'
import OurVision from '@/components/vision/OurVision'

import { projects } from '../data'
import Appointment from '@/components/appointment/Appointment'

export default function Home() {
  return (
    <main>
      <Slider />
      <OurServices />
      <OurPartners />
      <OurVision />
      <OurDoctors />

      {/* Galary */}
      <div className="container mx-auto px-4 md:px-0">
        <h1 className=" text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
          Galary
        </h1>
        <p className="text-sm text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          sit fugiat dignissimos est modi minima eaque blanditiis tenetur
          architecto eveniet qui nobis. Mollitia ex reprehenderit neque!
          Nesciunt quasi commodi, voluptas minus maxime, exercitationem harum
          alias suscipit dolores corrupti quaerat cum beatae facilis! Neque nemo
        </p>
      </div>
      <div>
        <Galary projects={[projects[0], projects[1]]} />
        <Galary projects={[projects[2], projects[3]]} reversed={true} />
        <Galary projects={[projects[4], projects[5]]} />
        <Galary projects={[projects[6], projects[7]]} reversed={true} />
      </div>

      {/* Appointment */}
      <Appointment />
    </main>
  )
}
