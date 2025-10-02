import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='bg-[#F7F7F7] max-w-full'>
      <div className='w-[90%] md:w-[90%] mx-auto flex-col py-2 md:py-8'>
        <div className='flex flex-col md:flex-row w-full py-4 md:py-8 md:mb-10 gap-6 md:gap-0 text-btntext'>
          <div className='flex-1 flex flex-col gap-4'>
            <a href='/' className='font-semibold text-3xl'>Panto</a>
            <p className='text-sm font-light w-[60%] md:w-[80%]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          <div className='flex-1 flex justify-start md:justify-center'>
            <div className='flex flex-col gap-3 text-sm'>
              <p className='text-orange'>Services</p>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
            </div>
          </div>
          <div className='flex-1 flex justify-start md:justify-center'>
            <div className='flex flex-col gap-3 text-sm'>
              <a href='#products' className='text-orange'>Furniture</a>
              <a href='#products'>Beds</a>
              <a href='#products'>Chair</a>
              <a href='#products'>All</a>
            </div>
          </div>
          <div className='flex-1 flex justify-start md:justify-center'>
            <div className='flex flex-col gap-3 text-sm'>
              <p className='text-orange'>Follow Us</p>
              <p className='flex items-center gap-1'><Facebook className='fill-btntext w-4 h-4'/>Facebook</p>
              <p className='flex items-center gap-1'><Twitter className='fill-btntext w-4 h-4'/>Twitter</p>
              <p className='flex items-center gap-1'><Instagram className='text-btntext w-4 h-4'/>Instagram</p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between items-center w-full mt-2 md:mt-0 text-xs md:text-sm text-center'>
          <p className='font-light text-gray-400'>Copyright &copy; {new Date().getFullYear()}</p>
          <div className='flex gap-4'>
            <a href='/'>Terms & Conditions</a>
            <a href='/'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer