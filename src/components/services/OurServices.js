'use client'

import React, { useEffect } from 'react'
import {
  GiFamilyHouse,
  GiSkullStaff,
  GiLevelFourAdvanced,
} from 'react-icons/gi'
import { MdHighQuality } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurServicesCard from './OurServicesCard'

const cardData = [
  {
    title: 'Advanced Technology',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit accusamus, laborum inventore suscipit libero? Nostrum culpa?',
    icon: GiLevelFourAdvanced,
  },
  {
    title: 'Comfortable Place',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit accusamus, laborum inventore suscipit libero? Nostrum culpa?',
    icon: GiFamilyHouse,
  },
  {
    title: 'Quality Equipment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit accusamus, laborum inventore suscipit libero? Nostrum culpa?',
    icon: MdHighQuality,
  },
  {
    title: 'Friendly Staff',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt pariatur magni ducimus excepturi, quibusdam quasi alias quidem deleniti odit accusamus, laborum inventore suscipit libero? Nostrum culpa?',
    icon: GiSkullStaff,
  },
]

const OurServices = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    cardData.forEach((card, index) => {
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: `.service-card-${index}`,
          start: 'top center',
          end: ' bottom center',
          scrub: 1,
        },
        defaults: { duration: 1, ease: 'power2.out' },
      })

      cardAnimation.fromTo(
        `.service-card-${index}`,
        { opacity: 0, x: '-100%' },
        { opacity: 1, x: '0%' }
      )
    })
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
