'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import gsap, { Power2 } from 'gsap'
import slideOne from '../../assets/slider_1.JPG'
import slideTwo from '../../assets/slider_2.JPG'
import slideThree from '../../assets/slider_3.JPG'

export default function SwiperAutoSlider() {
  const cardData = [
    {
      image: slideOne,
      text: 'Slide 1 Text',
    },
    {
      image: slideTwo,
      text: 'Slide 2 Text',
    },
    {
      image: slideThree,
      text: 'Slide 3 Text',
    },
  ]

  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize Swiper
    const swiper = swiperRef.current.swiper

    // Add an event listener for slide change
    swiper.on('slideChange', () => {
      // Get the active slide index
      const activeSlideIndex = swiper.activeIndex

      // Run GSAP animation for the image (zoom in)
      gsap.fromTo(
        `.slide-${activeSlideIndex}`,
        { scale: 1.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: Power2.easeInOut,
        }
      )

      // Run GSAP animation for the slider header text (fade down)
      gsap.fromTo(
        `.slide-${activeSlideIndex} .slide-header`,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: Power2.easeInOut }
      )
      // Run GSAP animation for the slider paragraph text (fade up)
      gsap.fromTo(
        `.slide-${activeSlideIndex} .slide-text`,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: Power2.easeInOut }
      )
    })
  }, [])

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-${index} relative h-full flex items-center justify-center`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url(${item.image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-white text-3xl slide-header font-bold">
                  {item.text}
                </div>
                <p className='text-white mt-10 w-[95%] md:w-[60%] slide-text text-center text-[1rem]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  cum voluptatum minus atque nisi rem tempore ipsum maiores
                  officiis placeat!
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
