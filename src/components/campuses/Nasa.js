"use client"

import React from 'react';
import ImageBanner from './image-banner/ImageBanner';

const Nasa = () => {
  return (
    <div className="bg-gradient-to-t from-gray-100  to-gray-50">
    <ImageBanner 
src="/images/campuses/55.png"
title="Kampüsler" 
subTitle="Nasa Kampüsü"
objectClass='object-top'
bg='bg-gradient-to-b from-[#6E2306] via-[#9E450B] to-[#B55C0C] opacity-70


'
/>
<div className='container mx-auto p-8 flex'>
<div className=''>


  <h1 className="text-2xl font-bold mb-4">Akademik Koleji Anaokulu (Kids)</h1>
  
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Bizim Değerlerimiz</h2>
    <p>
      Çocuklarımız, değerlerimizin temelidir. Nitelikli öğretmenlerimizle sürdürülebilir başarıyı hedefliyoruz.
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Politikamızın Temel İlkeleri</h2>
    <ul className="list-disc list-inside">
      <li>Akademik değerlerimize uygun çocukları kazanmak.</li>
      <li>Uyumlu süreçler gerçekleştirmek.</li>
      <li>İnsancıl yönetim biçimleri uygulamak.</li>
      <li>Sürdürülebilir eğitim modelleri sunmak.</li>
      <li>Çocukların özgürce düşünmesini desteklemek.</li>
      <li>Çevreye duyarlı bireyler yetiştirmek.</li>
    </ul>
  </section>
</div>

  </div>
</div>
  );
};

export default Nasa;
