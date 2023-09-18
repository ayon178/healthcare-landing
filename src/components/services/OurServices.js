'use client'

import React, { useEffect } from 'react'
import {
  GiFamilyHouse,
  GiSkullStaff,
  GiLevelFourAdvanced,
} from 'react-icons/gi'
import { MdHighQuality } from 'react-icons/md'
import gsap from 'gsap'
import OurServicesCard from './OurServicesCard'

const cardData = [
  {
    title: 'Advanced Technology',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: GiLevelFourAdvanced,
  },
  {
    title: 'Comfortable Place',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: GiFamilyHouse,
  },
  {
    title: 'Quality Equipment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: MdHighQuality,
  },
  {
    title: 'Friendly Staff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: GiSkullStaff,
  },
]

const OurServices = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } })

    // Animate cards with index 0 and 1 (left to right)
    tl.fromTo(
      [`.service-card-0`, `.service-card-1`],
      { opacity: 0, x: '-100%' }, // Move from left
      { opacity: 1, x: '0%', stagger: 0.2 } // Stagger the animation
    )

    // Animate cards with index 2 and 3 (right to left)
    tl.fromTo(
      [`.service-card-2`, `.service-card-3`],
      { opacity: 0, x: '100%' }, // Move from right
      { opacity: 1, x: '0%', stagger: 0.2 }, // Stagger the animation
      '-=0.8' // Delay the start of this animation relative to the previous one
    )
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
        Our Services
      </h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {cardData.map((card, index) => (
          <div key={index} className={`service-card-${index}`}>
            <OurServicesCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
