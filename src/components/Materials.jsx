import { images } from '@/constants'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Materials = () => {
  return (
    <section id='material' className='max-w-full h-screen'>
      <div className='flex flex-col md:flex-row w-full gap-4 md:gap-2 md:h-full justify-center items-center'>
        <div className='md:flex-[50%] flex items-center md:items-start justify-center md:justify-start px-4 md:px-4 h-full w-full'>
          <div className='flex flex-col justify-center items-center md:items-start h-full gap-1 md:gap-4 text-center md:text-start md:w-[80%] mx-auto'>
            <h3 className='font-medium text-sm md:text-xl text-orange'>MATERIALS</h3>
            <h2 className='text-lg md:text-5xl font-semibold leading-tight'>Very serious materials for making furniture</h2>
            <p className='text-gray-600 font-light text-sm md:text-lg'>
              Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
            </p>

            <div className='w-full flex justify-center md:justify-start gap-2 items-center'>
              <p className='text-orange'>View All</p>
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
        <div className='md:flex-[50%] flex w-full h-full md:h-full justify-center items-center px-3 md:px-0 gap-4 md:gap-8 md:py-10'>
          <div className='w-[30%] gap-6 md:gap-10 md:w-[40%] h-full flex flex-col justify-end items-end'>
            <div className='flex justify-end w-full h-[50%]'>
              <Image 
                src={images.material1}
                alt='Material'
                width={0}
                height={0}
                className='object-contain md:object-cover shadow-xl rounded-2xl h-full'
              />
            </div>
            <div className='w-full h-[50%] flex justify-end'>
              <Image 
                src={images.material2}
                alt='Material'
                width={0}
                height={0}
                className='object-contain md:object-cover shadow-xl rounded-2xl h-full'
              />
            </div>
          </div>
          <div className='flex w-[60%] h-full'>
            <div className='w-full h-full flex items-end md:pb-4'>
              <Image 
                src={images.material3}
                alt='Material'
                width={0}
                height={0}
                className='object-contain w-full shadow-xl shadow-[#DECBB8]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials