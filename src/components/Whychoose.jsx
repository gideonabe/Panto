import { MoveRight } from 'lucide-react'
import React from 'react'

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

const Whychoose = () => {
  return (
    <div className='max-w-[95%] mx-auto my-12'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Column 1 */}
        <div className='col-span-1'>
          <p className='text-black font-bold text-4xl items-center justify-center'>Why Choosing Us</p>
        </div>

        {/* Columns 2, 3, 4 - one per reason */}
        {reasons.map((why, i) => (
          <div key={i} className='flex flex-col space-y-2'>
            <h3 className='text-xl font-bold'>{why.head}</h3>
            <p className='text-sm text-black/80'>{why.subhead}</p>
            <a href={why.url} className='flex items-center gap-2 text-orange hover:underline'>
              More info <MoveRight className='w-4 h-8' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Whychoose
