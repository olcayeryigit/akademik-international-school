import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const Redirect2 = ({title}) => {
  return (
    <div className='inline-flex gap-2 items-center bg-black bg-opacity-40 py-2 px-5 rounded-2xl text-gray-400'>
        <span className='flex items-center gap-2 hover:text-gray-200 cursor-pointer'>    
                <Link href="/" className=''>Akademik Internetional School</Link>

          <FaAngleRight />  
        </span>
        
        <h5>{title}</h5>
    
    </div>
  )
}

export default Redirect2