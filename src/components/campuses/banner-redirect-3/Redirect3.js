import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Redirect3 = ({title,subTitle}) => {
  return (
    <div className='inline-flex gap-2 items-center bg-black bg-opacity-40 py-2 px-5 rounded-2xl text-gray-200'>
        <span className='flex items-center gap-2 hover:text-white cursor-pointer'>    
                <Link href="/" className=''>Akademik Internetional School</Link>

          <FaAngleRight />  
        </span>
        
        <h5>{title}</h5>
        <FaAngleRight />
        <h5>{subTitle}</h5>

      
      
    </div>
  )
}

export default Redirect3