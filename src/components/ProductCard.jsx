import { Plus, StarIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({image, label, name, price}) => {
  return (
    <div>
      <div className='w-full h-60 md:h-64 bg-white/40 rounded-t-xl p-2'>
        {label === "Chair" ? 
          <Image 
            src={image}
            alt={name}
            width={0}
            height={0}
            className='w-full h-full object-contain'
          /> :
          <Image 
            src={image}
            alt={name}
            width={600}
            height={0}
            priority
            className='w-full h-full object-cover rounded'
          />         
        }
      </div>
      <div className='w-full flex flex-col px-4 py-4 rounded-b-xl bg-white'>
        <p className='font-normal text-[#8D8D8D] text-sm md:text-base'>{label}</p>
        <p className='text-lg md:text-2xl text-btntext font-semibold'>{name}</p>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className="w-3 h-3 text-yellow-500 fill-yellow-500 stroke-yellow-500"
            />
          ))}
        </div>
        <div className='mt-4 flex justify-between items-center'>
          <div className='relative pl-2.5 font-semibold text-lg'>
            <p className='absolute text-btntext top-0 left-0 text-sm'>$</p>
            <p>{price}</p>
          </div>
          <Plus className='w-8 h-8 text-white bg-btntext p-1 rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default ProductCard