"use client"
import Slider from '@/components/home-page/main-content/slider/Slider';
import React from 'react';
import PreRegistrationForm from './pre-registration-form/PreRegistrationForm;';


const MainContent = () => {
 
  return (
    <div className='pt-28 pb-8 md:pb-0 rounded-3xl '>
      <div className='container mx-auto grid  xl:grid-cols-6 '> {/* Create a grid with 1 column on small screens and 2 on medium and larger */}
        <div className='xl:col-span-4 flex justify-center'> {/* Center the Slider component */}
          <Slider />
        </div>
        <div className='mt-20 mx-4 md:mx-0 xl:col-span-2 z-50 flex justify-center xl:block md:mt-32 xl:mt-4 mb-4' > {/* Center the PreRegistrationForm component */}
          <PreRegistrationForm />

        </div>
      </div>
     
    </div>
  );
}

export default MainContent; 