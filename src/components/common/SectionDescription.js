"use client"

import React from 'react'

const SectionDescription = ({description,position,textColor}) => {
  return (
    <p className={`text-lg  max-w-2xl mx-auto mb-5  ${position} ${textColor} `}>
            {description}</p>  )
}

export default SectionDescription