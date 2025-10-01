import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({bgimg, img, name, comp, sub }) => {
  return (
    <div className='relative w-full h-90'>
      <Image 
        src={bgimg}
        alt='Interior'
        width={0}
        height={0}
        className='w-full h-full'
      />

      <div className='absolute bottom-4'>
        <div className='relative bg-white px-6 pb-4 flex flex-col items-center w-[90%] mx-auto rounded-2xl pt-10'>
          <Image 
            src={img}
            alt={name}
            width={50}
            height={50}
            className='absolute rounded-full -top-3 p-2 bg-white'
          />
          <p className='font-semibold text-sm md:text-base'>{name}</p>
          <p className='font-extralight text-[10px] md:text-xs text-gray-500'>{comp}</p>
          <p className='font-normal text-xs md:text-sm mt-3 text-center'>{sub}</p>
          <div className="flex gap-0.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-3 h-3 text-yellow-500 fill-yellow-500 stroke-yellow-500"
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TestimonialCard