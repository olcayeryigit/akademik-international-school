"use client";
import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";
import SectionDescription from "@/components/common/SectionDescription";

const Section3 = () => {
  const data = [
    {
      order: "1.",
      title: "Dijital Eğitim Modeli Endüstri 4.0",
      text: "Uyguladığımız benzersiz eğitim modeliyle, değişime açık ve uyumlu, yüksek problem çözme kabiliyetine sahip, etkili reel ve sanal iletişim becerilerini geliştirmiş, büyük verileri teknoloji ile analiz edebilen ve yöneten donanımlı öğrenciler yetiştiriyoruz.",
      icon: "/images/home-page/section-3/icon/170.png",

      image: "/images/home-page/section-3/img/175.png",
    },
    {
      order: "2.",
      title: "YKS ve LGS Başarısı",
      text: "Bilimsel temelli ve uluslararası standartlarda sunduğumuz nitelikli eğitim programları başarıyı beraberinde getiriyor. YKS ve LGS sınavlarındaki %96’lık başarı oranımızla, ülkemizin ve dünyanın öne gelen prestijli üniversitelerine donanımlı öğrenciler yetiştiriyoruz.",
      icon: "/images/home-page/section-3/icon/172.png",
   
      image: "/images/home-page/section-3/img/176.png",
    },
    {
      order: "3.",
      title: "Multilingual Education / Çok Dilli Eğitim",
      text: "Çok dilli eğitimle, öğrencilerimize iki dilli olma fırsatı sunuyoruz. Çok sayıda araştırma, iki dilliliğin yaşam boyu çeşitli bilişsel ve sosyal becerilere fayda sağladığını gösteriyor.",
      icon: "/images/home-page/section-3/icon/171.png",
 
      image: "/images/home-page/section-3/img/179.png",
    },
    {
      order: "4.",
      title: "Sportif ve Sanatsal Etkinlikler",
      text: "Eğitimin her yönü ile bir bütündür. Sanatsal ve bedensel etkinliklerin, akademik başarıyı perçinlediği bir ortam oluşturuyoruz. Spor ve sanat kulüplerimizle, öğrencilerimizin sosyal becerilerini geliştiriyor ve yüksek standartlarda beden sağlığına sahip olmalarını sağlıyoruz.",
      icon: "/images/home-page/section-3/icon/174.png",

      image: "/images/home-page/section-3/img/182.png",
    },
  ];

  return (




    <div className="py-20 ">
      
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-4">
          <div className="flex items-center gap-2 text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-3">
            <div className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-3 ">4</div>
            <div className="relative w-8 h-8 mb-3 md:w-12 md:h-12 ">
              <Image
                src="/images/home-page/section-3/x.png"
                fill
                className="rounded-lg object-cover"
                alt="Section Image"
              />
            </div>
            <div className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-3 ">4</div>
          </div>
         

          <SectionTitle
            title="Eğitim Modeli"
            position="text-start"
            textColor="text-gray-800"/>

        </div>


        <SectionDescription
            description=" Öğrencilerimizin bedensel, zihinsel ve akademik gelişimlerinde, belirlediğimiz hedeflere emin adımlarla, dörtlü eğitim modelimizle ulaşıyoruz."
            position="text-center"
            textColor="text-gray-800"/>

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 
         text-gray-800 ">
          {data.map((item) => (
            <div
              key={item.order}
              className="relative shadow-lg rounded-lg  p-1 "
            >

              <div className="relative w-full h-[180px] ">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover rounded-lg"
                />

<div className="relative w-full h-full ">
                <Image
                  src="/images/home-page/section-3/bg7.png"
                  alt="Overlay Görsel"
                  fill
                  className=" opacity-90 rounded-lg"
                /></div>
   <div className="absolute inset-0  bg-gradient-to-b from-blue-900/50 to-yellow-700/50 rounded-lg" /> 

                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-50 p-3 rounded-full corner-shadow shadow-md `}
                >
                  <Image
                    src={item.icon}
                    width={70}
                    height={70}
                    alt={`${item.title} Icon`}
                  />


                </div>
              </div>
              <div className="mt-10 p-1 md:p-4">
                <h4 className="font-semibold text-lg  md:text-xl mb-2">
                  <span className=" font-bold">{item.order}</span> {item.title}
                </h4>
                <p className="text-md md:text-base text-gray-800 pb-6 md:pb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>    

  );
};

export default Section3;
