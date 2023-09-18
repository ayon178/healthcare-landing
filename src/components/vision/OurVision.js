'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import visionImage from '../../assets/vision.jpg'

const OurVision = () => {
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 100%',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    // Animation for the image and text coming from the left and right
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: '-100%' },
      { opacity: 1, x: '0%' }
    ).fromTo(
      textRef.current,
      { opacity: 0, x: '100%' },
      { opacity: 1, x: '0%' },
      0 // Specify the animation should start at the same time as the previous one
    )
  }, [])

  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-slate-500 mt-10 pb-2">
        Our Vision
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full mt-8 gap-5 items-center">
        <div ref={imageRef}>
          <Image
            className="rounded-lg"
            src={visionImage}
            layout="responsive"
            objectFit="cover"
            alt=""
          />
        </div>

        <div ref={textRef} className="opacity-0">
          {' '}
          <h1 className="text-2xl font-bold">Why Choose Us</h1>
          <p className="text-sm text-justify mb-5 mt-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            minima labore fugit incidunt a asperiores! Odit, est culpa. Eveniet
            quas ab rerum aperiam aliquam inventore nobis, saepe id impedit
            officia. Voluptatum quasi architecto nemo veritatis voluptas sunt
            quo, aspernatur consequatur.
          </p>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            ducimus est quae enim pariatur, magnam deleniti, vero iure
            consequuntur minus labore quibusdam unde accusamus maiores mollitia
            repudiandae natus nihil? Quas saepe hic dolores illum, dolor aliquid
            ea doloremque ab sapiente numquam qui fugit temporibus! Cupiditate
            porro temporibus quidem voluptas eligendi, unde tempora id
          </p>
          <button className="mt-7 gradient_button">LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default OurVision
