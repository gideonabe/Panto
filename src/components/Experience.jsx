import { images } from '@/constants'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='max-w-full'>
      <div className='w-full flex flex-col md:flex-row md:h-100 pt-8 gap-6 md:gap-2'>
        {/* Image + background shapes */}
        <div className='hidden md:flex relative flex-1 w-full h-full'>
          <div className='absolute -top-5 left-0 w-[80%] h-full bg-[#F7F7F7] z-10 rounded-tr-xl'></div>
          <div className='absolute top-[20%] left-0 w-full h-[60%] bg-[#F7F7F7] z-10 rounded-r-xl'></div>
          <div className='absolute bottom-0 w-[95%] h-full z-20 rounded-r-2xl shadow-xl'>
            <Image 
              src={images.exp}
              alt='Interior'
              fill
              className=''
              // className='w-full h-full'
            />
          </div>
        </div>
        <div className='block md:hidden w-[95%] mx-auto z-20 rounded-r-2xl shadow-xl'>
          <Image 
            src={images.exp}
            alt='Interior'
            width={0}
            height={0}
            className='object-contain'
          />
        </div>
        <div className='flex-1 flex items-center px-4'>
          <div className='flex flex-col justify-center items-center md:items-start text-center md:text-start h-full gap-2 md:gap-4 md:px-10'>
            <h3 className='font-medium text-sm md:text-xl text-orange'>EXPERIENCES</h3>
            <h2 className='text-lg md:text-5xl font-semibold'>We Provide You The Best Experience</h2>
            <p className='text-gray-600 font-light text-sm md:text-lg'>
              You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
            </p>

            <div className='w-full flex justify-center md:justify-start'>
              <div className='text-center flex items-center text-orange font-normal text-sm gap-2 md:text-base'>
                <p>More info</p>
                <Image 
                  src={images.rightarrow}
                  alt='Redirect'
                  width={0}
                  height={0}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience