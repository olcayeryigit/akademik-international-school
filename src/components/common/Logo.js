"use client"
"use client"

import Image from 'next/image'
import React from 'react'


const Logo = () => {
  return (
    <div className='flex items-center'>
    <div className="relative  h-[4rem] w-[10rem]  xl:h-[4.5rem] xl:w-[14rem]" >
    <Image 
      src="/images/logos/main.svg" 
      alt="" 
      fill 
      className="object-contain"  
    />
  </div>
  <div className='border-l h-8 w-2 ms-4'></div>
  <div className="relative ms-1  h-[3rem] w-[4.3rem] h-[4rem] w-[6rem]" >
    <Image 
      src="/images/logos/101.svg" 
      alt="" 
      fill 
      className="object-contain"  
    />
  </div>
  </div>
  
  )
}

export default Logo