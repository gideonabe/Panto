import { images } from '@/constants'
import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {
  const reasons = [
    {
      head: "Luxury facilities",
      subhead: "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
      url: "/"
    },
    {
      head: "Affordable Price",
      subhead: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
      url: "/"
    },
    {
      head: "Many Choices",
      subhead: "We provide many unique work space choices so that you can choose the workspace to your liking.",
      url: "/"
    },
  ]

  return (
    <div className='max-w-[95%] mx-auto my-12'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Column 1 */}
        <div className='col-span-1'>
          <p className='text-black font-bold text-2xl md:text-4xl md:w-[80%] md:leading-snug items-center justify-center'>Why Choosing Us</p>
        </div>

        {/* Columns 2, 3, 4 - one per reason */}
        {reasons.map((why, i) => (
          <div key={i} className='flex flex-col space-y-4'>
            <h3 className='text-xl font-bold'>{why.head}</h3>
            <p className='text-sm text-black/80'>{why.subhead}</p>
            <a href={why.url} className='flex items-center gap-2 text-orange hover:underline'>
              <p>More info</p>
              <Image 
                src={images.rightarrow}
                alt='Redirect'
                width={0}
                height={0}
                className='object-contain'
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChoose