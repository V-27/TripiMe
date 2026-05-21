import React from 'react'
import banner from '../assets/InternationalD.png'
import { NavLink } from 'react-router-dom'
const IdBanner = () => {
  return (
    <div className='relative h-80'>
      <img src={banner} alt='banner' className='top-0 w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='absolute inset-0 z-20 flex flex-col justify-center px-25 pt-10'>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center w-full  gap-1 text-sm text-white">
          <li>
            <NavLink to='/' className='flex  text-white text-[14px] font-medium hover:underline'>Home</NavLink>
          </li>

          <li className="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5"></path>
            </svg>
          </li>

          <li>
            <a href="#"> International Destinations</a>
          </li>
        </ol>
      </nav>
      <h2 className='text-white text-4xl  mt-2'>International Destinations</h2>
      <p className='text-white text-[16px]  mt-3'>Travel The Globe</p>
      </div>
    </div>
  )
}

export default IdBanner

