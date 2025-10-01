import { images } from '@/constants'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='max-w-full mt-8'>
      <div className='w-full flex h-80 pt-8 md:gap-2'>
        {/* Image + background shapes */}
        <div className='relative flex-1 w-full h-full'>
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
        <div className='flex-1 flex items-center px-4'>
          <div className='flex flex-col justify-center items-start h-full gap-4'>
            <h3 className='font-medium text-sm md:text-base text-orange'>EXPERIENCES</h3>
            <h2 className='text-2xl font-semibold'>We Provide You The Best Experience</h2>
            <p className='text-gray-600 font-light text-sm md:text-base'>
              You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
            </p>

            <div className='w-full flex justify-start'>
              <p className=' text-center flex items-center text-orange font-normal text-sm md:text-base'>View all <MoveRight className='w-10 h-5 text-orange'/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience