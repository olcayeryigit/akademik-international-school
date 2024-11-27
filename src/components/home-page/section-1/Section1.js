"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Section1 = () => {
  const datas = [
    {
      title: "ANAOKULU",
      alt: "Image 1",
      text: "Kendine güvenen, neşeli, sağlıklı ve motive çocuklar için.",
      image: "/images/home-page/section-1/1.png",
    },
    {
      title: "İLKOKUL",
      alt: "Image 2",
      text: "Akademik ve sosyal hayata emin adımlarla yürümek için.",
      image: "/images/home-page/section-1/2.png",
    },
    {
      title: "ORTAOKUL",
      alt: "Image 3",
      text: "Geleceğe Yön Verin, Dünyanın Zirvesine Yürüyün!",
      image: "/images/home-page/section-1/3.png",
    },
    {
      title: "ANADOLU LİSESİ",
      alt: "Image 4",
      text: "Ülkemizin ve dünyanın en iyi ve en donanımlı üniversitelerine doğru yol alın.",
      image: "/images/home-page/section-1/4.png",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500); // 500ms sonra görünür yapmak için
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-12 relative">
      <div className="section-1-wrapper container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {datas.map((data, index) => (
            <div
              className={`relative overflow-hidden group rounded-2xl shadow-lg transition-all duration-300 border-4 border-white bg-white transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              key={index}
            >
              <Image
                src={data.image}
                alt={data.alt}
                width={318}
                height={240}
                className="object-cover w-full h-56 rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
 <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-yellow-200/0  "/>
              <div className="absolute bottom-0 left-0 w-full p-3 bg-black bg-opacity-75 rounded-b-2xl transition-all duration-500 group-hover:translate-y-full">
                <div className="flex  items-center">
                  <div className="p-2 rounded-full border border-white">
                    <div className="relative w-6 h-6">
                      <Image src="/images/logos/ak-1.png" fill className="object-contain" alt='x' />
                     
               
                    </div>
                  </div>
                  <h2 className="text-md font-semibold text-white px-2 ">AKADEMİK KOLEJİ {data.title}</h2>
                </div>

              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/75 bg-opacity-70 flex flex-col items-center space-y-4 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
               
                                <div className="flex  items-center gap-4">

                <div className="bg-white p-2 rounded-full border border-white transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-110 ">
                     <div className="relative w-5 h-5">
                    <Image src="/images/logos/ak-2.png" fill className="object-contain" alt='x'/>
                  </div>
             
                 </div>                <p className="text-md text-white font-semibold">AKADEMİK KOLEJİ {data.title}</p>

                  </div>
                  <p className="text-md text-white">{data.text}</p>

                  <Link
  className="absolute bottom-5 flex justify-center  items-center  text-white rounded-3xl py-2 px-4  group-hover:scale-110 transition-all duration-300 border border-white hover:bg-black"
  href=""
>
  <span className="text-xs">DETAYLI BİLGİ</span>

  <span className="transform transition-transform duration-300 group-hover:translate-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      className="group-hover:-rotate-45 transition-transform duration-300"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
      />
    </svg>
  </span>
</Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
