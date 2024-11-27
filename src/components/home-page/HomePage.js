"use client"
import React from 'react'
import MainContent from './main-content/MainContent'
import Section1 from './section-1/Section1'
import Section2 from './section-2/Section2'
import Spacer from '../common/spacer/Spacer'
import Section3 from './section-3/Section3'
import "./home-page.scss"
import ExamCountdown from './counter/ExamCountdown'
import InfoSection from './info-section/InfoSection'
import Clubs from './clubs/Clubs'
import ForeignLanguage from './foreign-language/ForeignLanguage'
import Announcements from './announcements/Announcements'
import Gallery from './gallery/Gallery'
import News from './news/News'
import Reviews from './reviews/Reviews'
import Accreditation from './accreditation/Accreditation'
import { Link } from 'react-scroll'

const HomePage = () => {



  return (
    <div className=" ">
      <div className="relative main rounded-3xl mt-2 mx-3 "
   >
    

<div 
        className="absolute inset-0 bg-[url('/images/common/zzz.png')] bg-cover bg-top bg-no-repeat rounded-3xl "
      
      />
           <div className="absolute bottom-0 w-full ">
           <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2  w-0  h-0 border-l-[60px] border-r-[60px] border-b-[60px] border-l-transparent border-r-transparent z-50 " style={{borderBottomColor:"rgba(255,255,255,0.6)"}}>
           <Link 
  className='absolute left-1/2 transform -translate-x-1/2 mt-6 cursor-pointer'
  to="section-1"
  smooth={true}              
  duration={500}              
  offset={-70}    
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="2rem" 
    height="2rem" 
    viewBox="0 0 8 8" 
    className="animate-bounceCustom "
  >
    <path fill="black" d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5z"/>
  </svg>
</Link>

          
                   </div>

            </div> 
        
   
      <div className="absolute inset-0  bg-gradient-to-b from-black/100 via-black/80  via-black/75 via-black/70 via-black/65 via-[#0D121D]/90 via-[#101525]/70 to-yellow-700/20 rounded-3xl " /> 



<MainContent/>
  </div>

  <div id="section-1">
<Section1/>
  </div>
  <div 
  className="inset-0 bg-[url('/images/home-page/138.png')] bg-cover bg-top bg-no-repeat rounded-2xl border border-2 mx-2">  

<Section2/></div>
{/*<Section3/>

<Clubs/>
<ForeignLanguage/>
<Announcements/>
<div className="relative  pb-8">
<img src="/images/home-page/71.png" className="absolute w-full h-full object-no-repeat object-cover object-center opacity-100  " alt="Your Image"/>
<Gallery/></div>
<News/>


<div className="relative pb-8 ">
<img src="/images/home-page/1.jpg" className="absolute w-full h-full object-no-repeat object-cover object-center opacity-20 " alt="Your Image"/>
<InfoSection/>
</div>
<Accreditation/>


<ExamCountdown/>
<Reviews/>*/}
</div>
  )
}

export default HomePage



/**
 * <div className='relative h-64 w-64'>
  <Image src="/kolej-gif.gif" fill className='object-cover'/>
</div>
 */

/**
 * <Spacer height='h-10'/>

 */