"use client";

import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import MainContent from './main-content/MainContent';
import Section1 from './section-1/Section1';
import Section2 from './section-2/Section2';
import Section3 from './section-3/Section3';
import ExamCountdown from './counter/ExamCountdown';
import InfoSection from './info-section/InfoSection';
import Clubs from './clubs/Clubs';
import ForeignLanguage from './foreign-language/ForeignLanguage';
import Announcements from './announcements/Announcements';
import Gallery from './gallery/Gallery';
import News from './news/News';
import Reviews from './reviews/Reviews';
import Accreditation from './accreditation/Accreditation';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Background Image and Gradient Overlay */}
      <div className="relative main rounded-3xl mt-2 mx-3">
        <div className="absolute inset-0 bg-cover bg-no-repeat rounded-3xl bg-[url('/images/common/zzz.png')]" />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-0 w-full">
          <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l-[60px] border-r-[60px] border-b-[60px] border-l-transparent border-r-transparent z-50 border-b-[rgba(255,255,255,0.6)]" >
            <Link
              className="absolute left-1/2 transform -translate-x-1/2 mt-6 cursor-pointer"
              to="section-1"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 8 8" className="animate-bounce">
                <path fill="black" d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/80 to-yellow-700/20 rounded-3xl" />

        <MainContent />
      </div>

      {/* Sections */}
      <div id="section-1">
        <Section1 />
      </div>

      <div className="mx-2 rounded-2xl border-2 bg-cover bg-no-repeat bg-[url('/images/home-page/138.png')]">
        <Section2 />
      </div>

      <Section3 />
      <Clubs />
      <ForeignLanguage />
      <Announcements />

      {/* Gallery Section */}
      <div className="relative pb-8 w-full h-full">
        <Image
          src="/images/home-page/71.png"
          alt="Gallery Background"
fill         
          className="opacity-100 object-cover"
        />
        <Gallery />
      </div>

      <News />

      {/* Info Section */}
      <div className="relative pb-8 w-full h-full">
        <Image
          src="/images/home-page/1.jpg"
          alt="Info Section Background"
     fill
          objectFit="cover"
          className="opacity-20"
        />
        <InfoSection />
      </div>

      <Accreditation />
      <ExamCountdown />
      <Reviews />
    </div>
  );
};

export default HomePage;
