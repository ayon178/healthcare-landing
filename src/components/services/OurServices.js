import OurServicesCard from './OurServicesCard'
import {
  GiFamilyHouse,
  GiSkullStaff,
  GiLevelFourAdvanced,
} from 'react-icons/gi'
import { MdHighQuality } from 'react-icons/md'

const cardData = [
  {
    title: 'Advanced Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis dolor sit amet sit.',
    icon: GiLevelFourAdvanced,
  },
  {
    title: 'Comfortable Place',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis dolor sit amet sit.',
    icon: GiFamilyHouse,
  },
  {
    title: 'Quality Equipment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis dolor sit amet sit.',
    icon: MdHighQuality,
  },
  {
    title: 'Friendly Staff',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis dolor sit amet sit.',
    icon: GiSkullStaff,
  },
]

const OurServices = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
        Our Services
      </h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {cardData.map((card, index) => (
          <OurServicesCard key={index} data={card} />
        ))}
      </div>
    </div>
  )
}

export default OurServices
