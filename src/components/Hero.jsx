import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import { Search } from 'lucide-react'
import { images } from '@/constants'

const Hero = () => {
  return (
    <section 
      id='/'
      className="relative w-full h-[100dvh]" 
    >
      <Image 
        src={images.bg}
        alt="Background"
        width={0}
        height={0}
        className="hidden md:block absolute inset-0 z-0 w-full h-full"
        // priority 
        // speeds up loading
      />

      <Image 
        src={images.bg}
        alt="Background"
        width={0}
        height={0}
        className="flex md:hidden object-cover absolute inset-0 z-0 w-full h-full"
        // priority 
        // speeds up loading
      />

      <div className="relative z-10 h-full">
        <Navbar />

        <div className="relative z-10 flex flex-col items-center md:justify-start text-white text-center w-full space-y-4 px-4 h-[calc(100dvh-18px)]  md:h-[calc(100dvh-16px)] mt-32 md:mt-8">
          <p className="font-bold text-3xl md:text-[53px] leading-tight">Make Your Interior More <br />
            Minimalistic & Modern
          </p>

          <p className="w-full max-w-[100%] md:max-w-[40%] text-base md:text-[22px] text-white/85 font-extralight leading-snug">
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p> 

          {/* Search Input Centered */}
          <div className="relative w-full max-w-md mt-2">
            <input 
              id="search"
              name="search"
              placeholder="Search furniture"
              className="pl-4 pr-12 py-3 rounded-full bg-white/10 w-full text-white border border-white/25 placeholder-white"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-3 bg-orange-500 text-white p-2 w-8 h-8 rounded-full"/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero