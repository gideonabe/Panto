"use client"

import React, { useState, useEffect } from 'react'
import TestimonialCard from './TestimonialCard'
import { images } from '@/constants'
import { MoveLeft, MoveRight } from 'lucide-react'

const reviews = [
  {
    bgimg: images.review1,
    img: images.person1,
    name: "Bang Upin",
    comp: "Pedagang Asongan",
    sub: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
  },
  {
    bgimg: images.review2,
    img: images.person2,
    name: "Ibuk Sukijan",
    comp: "Ibu Ruman Tangga",
    sub: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“"
  },
  {
    bgimg: images.review3,
    img: images.person3,
    name: "Mpok Ina",
    comp: "Karyawan Swasta",
    sub: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“"
  },
  {
    bgimg: images.review1,
    img: images.person1,
    name: "Bang Upin",
    comp: "Pedagang Asongan",
    sub: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
  },
  {
    bgimg: images.review2,
    img: images.person2,
    name: "Ibuk Sukijan",
    comp: "Ibu Ruman Tangga",
    sub: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“"
  },
  {
    bgimg: images.review3,
    img: images.person3,
    name: "Mpok Ina",
    comp: "Karyawan Swasta",
    sub: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“"
  }, 
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1) // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2) // tablet
      } else {
        setVisibleCount(3) // desktop
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - visibleCount);


  const Prev = () => {
    setCurrentIndex(prev => Math.max(prev - visibleCount, 0));
  }

  const Next = () => {
    setCurrentIndex(prev => Math.min(prev + visibleCount, maxIndex));
  }

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount)

  return (
    <section id='testimonial' className='max-w-[90%] mx-auto'>
      <div className='text-center w-full'>
        <h3 className='text-xs md:text-sm font-medium text-orange'>TESTIMONIALS</h3>
        <p className='text-xl md:text-3xl mt-1 font-semibold'>Our Clients Reviews</p>

      </div>

      <div className='flex items-center gap-4 w-[95%] mx-auto relative mt-6'>
        <button
          onClick={Prev}
          disabled={currentIndex === 0}
          className='absolute -left-6 disabled:opacity-30 z-10'
        >
          <MoveLeft className='w-9 h-10 bg-white text-btntext p-2 rounded-full shadow-md' />
        </button>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full z-0'>
          {visibleReviews.map((rev, i) => (
            <TestimonialCard key={i} {...rev}/>
          ))}
        </div>
        <button
          onClick={Next}
          disabled={currentIndex + visibleCount >= reviews.length}
          className='absolute -right-6 disabled:opacity-30 z-10'
        >
          <MoveRight className='w-9 h-10 bg-white text-btntext p-2 rounded-full shadow-md' />
        </button>
      </div>

    </section>
  )
}

export default Testimonials