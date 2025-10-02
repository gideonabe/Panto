"use client"

import { images } from '@/constants'
import { ChevronDown, Menu, ShoppingCartIcon, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='hidden md:flex max-w-[90%] mx-auto z-10'>
        {/* Desktop */}
        <div className='hidden md:flex justify-between items-center w-full text-white pt-4'>
          <h3 className='font-bold text-3xl'>Panto</h3>
          <div className='flex gap-14 items-center'>
            <p className='flex gap-2 items-center'>Furniture <ChevronDown className='w-4 h-4' /></p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className='relative'>
            <Image
              src={images.bag}
              alt='Shopping Cart'
              width={0}
              height={0}
              className='w-8 h-8'
            />
            <p className='absolute -top-1 right-0 text-xs p-1 bg-orange-500 text-white rounded-full font-bold'>0</p>
          </div>
        </div>

      </div>

      <div className=' flex md:hidden max-w-full'>
        {/* Mobile */}
        <div className='flex md:hidden justify-between items-center w-[90%] mx-auto text-white pt-4'>
          <h3 className='font-bold text-2xl md:text-3xl'>Panto</h3>
          <button
            className='text-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden bg-black/40 text-white rounded-lg w-full mt-14 p-6 space-y-4 backdrop-blur-sm absolute z-20'>
            <p className='flex items-center gap-2'>
              Furniture <ChevronDown className='w-4 h-4' />
            </p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Contact</p>

            <div className='relative'>
              <Image
                src={images.bag}
                alt='Shopping Cart'
                width={0}
                height={0}
                className='w-9 h-9'
              />
              <p className='absolute top-0 left-5 text-[9px] p-1 bg-orange-500 text-white rounded-full font-bold'>0</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar
