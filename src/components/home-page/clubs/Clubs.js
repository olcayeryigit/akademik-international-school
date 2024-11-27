"use client";
import SectionDescription from '@/components/common/SectionDescription';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Font Awesome ok ikonu

const Clubs = () => {
  const links = [
    { href: '#', text: 'Kariyer Gelişim Kulübü', icon: "/images/clubs/10.png", bgImage: "/img/home-page/section-4/images/kariyer.jpg", color: 'bg-yellow-200',border:"border-yellow-100",textColor:"text-yellow-900",iconBg:"bg-yellow-500", description: 'Kariyer fırsatlarını keşfedin.' },
    { href: '#', text: 'Spor ve Satranç Kulübü', icon: "/images/clubs/12.png", bgImage: "/img/home-page/section-4/images/satranc.jpg",color: 'bg-gray-200',border:"border-gray-100",textColor:"text-gray-800",iconBg:"bg-gray-500", description: 'Zihin açıcı satranç oyunları.' },
    { href: '#', text: 'Kültür Edebiyat Kulübü', icon: "/images/clubs/13.png", bgImage: "/img/home-page/section-4/images/backgrounds.png", color: 'bg-amber-200',border:"border-amber-100",textColor:"text-amber-900",iconBg:"bg-amber-500", description: 'Edebiyat dünyasında yolculuk.' },
    { href: '#', text: 'Görsel Sanatlar Kulübü', icon: "/images/clubs/15.png", bgImage: "/img/home-page/section-4/images/paint.png", color: 'bg-green-200',border:"border-green-100",textColor:"text-green-900",iconBg:"bg-green-500", description: 'Sanat eserlerinizi yaratın.' },
    { href: '#', text: 'Diğer Etkinlikler', icon: "/images/clubs/11.png", bgImage: "/img/home-page/section-4/images/diger.jpg",color: 'bg-indigo-200',border:"border-indigo-100",textColor:"text-indigo-900",iconBg:"bg-indigo-500", description: 'Çeşitli etkinliklerle tanışın.' },
    { href: '#', text: 'Robotik Kodlama Kulübü', icon: "/images/clubs/14.png", bgImage: "/img/home-page/section-4/images/kodlama.jpg", color: 'bg-orange-200',border:"border-orange-100",textColor:"text-orange-900",iconBg:"bg-orange-500", description: 'Kodlama ve robotik dünyasına adım atın.' },
    { href: '#', text: 'Sosyal Etkinlikler Kulübü', icon: "/images/clubs/26.png", bgImage: "/img/home-page/section-4/images/sosyal.jpg",color: 'bg-red-200',border:"border-red-100",textColor:"text-red-900",iconBg:"bg-red-500",border:"border-red-100",textColor:"text-red-800",iconBg:"bg-red-800", description: 'Sosyal etkinlikler sizi bekliyor.' },
    { href: '#', text: 'Bilim ve Teknoloji Kulübü', icon: "/images/clubs/24.png", bgImage: "/img/home-page/section-4/images/fen.jpg", color: 'bg-purple-200',border:"border-purple-100",textColor:"text-purple-900",iconBg:"bg-purple-500", description: 'Bilimsel keşifler ve deneyler.' }
  ];

  return (
    <div className="relative">
    <div className="absolute inset-0 bg-[url('/images/bg4.png')] bg-cover bg-top bg-no-repeat opacity-15 rounded-3xl "/>

      <div className='container mx-auto w-full md:w-3/4 px-6 md:px-0  py-24'>
    

        <SectionTitle
            title="Akademik Koleji Öğrenci Kulüpleri "
            position="text-center"
            />



        <SectionDescription
            description="Öğrencilerin sosyal, kültürel ve akademik gelişimlerini destekleyen kulüpler,
yetkinlik kazandırmayı, liderlik becerilerini geliştirmeyi ve toplumsal sorumluluk bilincini artırmayı amaçlar."
            position="text-center"
            textColor="text-gray-800"/>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative overflow-hidden rounded-2xl  transition-transform duration-300 group  h-52  ${link.color}`}
            >
              <img src="/images/bg-9.png" className="absolute w-full h-full object-cover z-50" alt="Your Image"/>
              <div className="relative flex flex-col items-center justify-center h-full p-4 text-center ">
                <div className="absolute top-5 w-32 h-32  transition-transform duration-300  p-8 group-hover:scale-105">
                  <Image src={link.icon} alt={link.text} fill className="object-contain" />
                </div>
                <h2 className={`absolute bottom-5 text-sm md:text-[1rem] font-bold mb-0 md:mb-2 ${link.textColor}`}>{link.text}</h2>
                

                <div className={`absolute top-4 bg-gray-300 rounded-full right-2 transition-transform duration-300  group-hover:-rotate-45 `}>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
      className={`group-hover:-rotate-20 transition-transform duration-300 rounded-full p-2 border-white border-4 ${link.iconBg}`}>
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
      />
    </svg>               
              </div></div>
              <span className={`absolute inset-0 rounded-lg border-t-8 border-b-8 transition-transform duration-300 ${link.border}`}></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
/**
 *               <div className="absolute inset-0 bg-black opacity-30"></div>

 */

/*
"use client";
import SectionDescription from '@/components/common/SectionDescription';
import SectionTitle from '@/components/common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Font Awesome ok ikonu

const Clubs = () => {
  const links = [
    { href: '#', text: 'Kariyer Gelişim Kulübü', icon: "/img/section-4/10.png", bgImage: "/img/home-page/section-4/images/kariyer.jpg", color: 'bg-yellow-200',border:"border-yellow-100",textColor:"text-yellow-900",iconBg:"bg-yellow-500", description: 'Kariyer fırsatlarını keşfedin.' },
    { href: '#', text: 'Spor ve Satranç Kulübü', icon: "/img/section-4/12.png", bgImage: "/img/home-page/section-4/images/satranc.jpg",color: 'bg-gray-200',border:"border-gray-100",textColor:"text-gray-800",iconBg:"bg-gray-500", description: 'Zihin açıcı satranç oyunları.' },
    { href: '#', text: 'Kültür Edebiyat Kulübü', icon: "/img/section-4/13.png", bgImage: "/img/home-page/section-4/images/backgrounds.png", color: 'bg-amber-200',border:"border-amber-100",textColor:"text-amber-900",iconBg:"bg-amber-500", description: 'Edebiyat dünyasında yolculuk.' },
    { href: '#', text: 'Görsel Sanatlar Kulübü', icon: "/img/section-4/15.png", bgImage: "/img/home-page/section-4/images/paint.png", color: 'bg-green-200',border:"border-green-100",textColor:"text-green-900",iconBg:"bg-green-500", description: 'Sanat eserlerinizi yaratın.' },
    { href: '#', text: 'Diğer Etkinlikler', icon: "/img/section-4/11.png", bgImage: "/img/home-page/section-4/images/diger.jpg",color: 'bg-indigo-200',border:"border-indigo-100",textColor:"text-indigo-900",iconBg:"bg-indigo-500", description: 'Çeşitli etkinliklerle tanışın.' },
    { href: '#', text: 'Robotik Kodlama Kulübü', icon: "/img/section-4/14.png", bgImage: "/img/home-page/section-4/images/kodlama.jpg", color: 'bg-orange-200',border:"border-orange-100",textColor:"text-orange-900",iconBg:"bg-orange-500", description: 'Kodlama ve robotik dünyasına adım atın.' },
    { href: '#', text: 'Sosyal Etkinlikler Kulübü', icon: "/img/section-4/26.png", bgImage: "/img/home-page/section-4/images/sosyal.jpg",color: 'bg-red-200',border:"border-red-100",textColor:"text-red-900",iconBg:"bg-red-500",border:"border-red-100",textColor:"text-red-800",iconBg:"bg-red-800", description: 'Sosyal etkinlikler sizi bekliyor.' },
    { href: '#', text: 'Bilim ve Teknoloji Kulübü', icon: "/img/section-4/24.png", bgImage: "/img/home-page/section-4/images/fen.jpg", color: 'bg-purple-200',border:"border-purple-100",textColor:"text-purple-900",iconBg:"bg-purple-500", description: 'Bilimsel keşifler ve deneyler.' }
  ];

  return (
    <div className="relative  to-white py-24">
       
      <div className='container mx-auto w-full md:w-3/4 px-6 md:px-0  '>
    

        <SectionTitle
            title="Akademik Koleji Öğrenci Kulüpleri "
            position="text-center"
            />



        <SectionDescription
            description="Öğrencilerin sosyal, kültürel ve akademik gelişimlerini destekleyen kulüpler,
yetkinlik kazandırmayı, liderlik becerilerini geliştirmeyi ve toplumsal sorumluluk bilincini artırmayı amaçlar."
            position="text-center"
            textColor="text-gray-800"/>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`relative overflow-hidden rounded-2xl  transition-transform duration-300 group  h-52  ${link.color}`}
            >
              <img src="/bg-9.png" className="absolute w-full h-full object-cover " alt="Your Image"/>
              <div className="relative flex flex-col items-center justify-center h-full p-4 text-center ">
                <div className="absolute top-5 w-32 h-32  transition-transform duration-300  p-8 group-hover:scale-105">
                  <Image src={link.icon} alt={link.text} fill className="object-contain" />
                </div>
                <h2 className={`absolute bottom-5 text-sm md:text-[1rem] font-bold mb-0 md:mb-2 ${link.textColor}`}>{link.text}</h2>
                

                <div className={`absolute top-4 bg-gray-300 rounded-full right-2 transition-transform duration-300  group-hover:-rotate-45 `}>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
      className={`group-hover:-rotate-20 transition-transform duration-300 rounded-full p-2 border-white border-4 ${link.iconBg}`}>
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
      />
    </svg>               
              </div></div>
              <span className={`absolute inset-0 rounded-lg border-t-8 border-b-8 border-transparent transition-transform duration-300 ${link.border}`}></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
 */