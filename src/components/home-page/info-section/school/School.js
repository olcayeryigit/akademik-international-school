"use client"

import Image from 'next/image';
import React from 'react';

const data = [
  {
    value: "15 Yıl+",
    label: "Eğitim Tecrübesi",
    color: '#FF5733', // Kırmızı
    icon:"/images/home-page/info/3.svg",
  },
  {
    value: "8.734+",
    label: "Toplam Kayıtlı Öğrenci",
    color: '#28A745', // Yeşil
    icon:"/images/home-page/info/1.svg",

  },
  {
    value: "732",
    label: "LGS'den 450+ Puan",
    color: '#3357FF', // Mavi
    icon:"/images/home-page/info/5.svg",


  },
  {
    value: "318",
    label: "YKS'den 450+ Puan",
    color: '#EAB308', // Sarı
    icon:"/images/home-page/info/6.svg",


  },
  {
    value: "1.802",
    label: "Hedef Üniversiteye Yerleşen",
    color: '#8E44AD', // Mor
    icon:"/images/home-page/info/4.svg",


  },
];

const School= () => {
  return (
    <div className="relative mx-2 "> {/* Genel yapı tam genişlik ve belirli yükseklik */}
  
      <div className="inset-0 left-0 w-full text-white">
        <div className="grid grid-cols-2 gap-2 md:gap-10">
          {data.map((item, index) => (

            <div key={index} className="flex gap-2  bg-white bg-opacity-70  rounded-xl p-1 ">
              <div className={`bg-[#DFE8F0] bg-opacity-50 p-2 rounded-lg m-2  `}>
              <div className='relative w-20 h-20 '>
                <Image src={item.icon} fill className='object-contain' alt='icon' />
              </div>
              </div>
            <div  className="flex flex-col pt-4 gap-2">
              <h3 className="text-lg md:text-3xl font-bold text-shadow" style={{ color: item.color }}>
                {item.value}
              </h3>
              <p style={{ color: item.color }} className="text-sm md:text-lg font-semibold ">
                {item.label}
              </p>
            </div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;


