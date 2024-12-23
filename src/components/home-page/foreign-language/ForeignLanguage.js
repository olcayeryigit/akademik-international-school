"use client"
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import SectionTitle from '@/components/common/SectionTitle';
import SectionSubtitle from '@/components/common/SectionSubtitle';

const ForeignLanguage = () => {

    const content={
title:"Yabancı Dil ve Akademik Koleji ",
subtitle:"Yabancı Dilde Fark Yaratan Eğitim!",
p1:"Konuşma, Yazma, Okuma ve Dinleme Becerilerinde Koordineli Gelişim"

,
p2:"Akademik Koleji, Akademik Yabancı Dil Kursları, The Academic Publishing Yayın Evi ve İngilizce Uzem Eğitim Platformu ile birlikte Akademik Group Çatı Eğitim Platformu’nun seçkin kuruluşlarından biridir.",

p3:"Yabancı Dil eğitiminde çeyrek asra yakın tecrübesiyle, bugüne dek binlerce öğrencisini hedeflerine ulaştıran Akademik Yabancı Dil Kurslarının, donanımlı yabancı dil programları ve özgün yayınları, artık Akademik Koleji öğrencilerimizin istifadesine sunuluyor. Kolej öğrencilerimiz İngilizcenin yanı sıra ikinci ve hatta üçüncü yabancı dil alanlarında yetkinlik kazanıyor.",
    }
  return (
    <div className='bg-gradient-to-b from-white to-gray-100 py-6 md:py-28'>
    <div className='container mx-auto '>
            <SectionTitle
            title={content.title}
            position="text-center"
            textColor="text-gray-800"/>
<SectionSubtitle
            title={content.subtitle}
            position="text-center"
            textColor="text-gray-700"/>
      <div className='flex flex-col md:flex-row justify-center items-center mt-2  md:mt-5 gap-4 md:gap-8'>
    
<div className='w-full md:w-1/2 p-3 md:p-0 space-y-3 md:space-y-6 mt-1 md:mt-5'>

<p className='text-base text-gray-700'>{content.p1}</p>
<p className='text-base text-gray-600'>{content.p2}</p>
<p className='text-base text-gray-600'>{content.p3}</p>

</div>
  <div className='relative w-full md:w-1/4 p-4 md:p-0'>
          <Player
            autoplay
            loop
            src="/animations/world.json" 
            fill
className='object-cover '          />  
        </div>
    </div>    
    </div>
    </div>
  )
}

export default ForeignLanguage