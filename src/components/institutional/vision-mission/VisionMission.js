"use client"

import ImageBanner from '@/components/common/image-banner/ImageBanner';
import React from 'react';

const VisionMission = () => {
  return (
    <div className=" bg-gradient-to-t from-white to-gray-50">
    <ImageBanner 
     src="/images/vision.png"
     title="Kurumsal"
     subTitle="  Vizyonumuz ve Misyonumuz
" 
     objectClass=""
   />
   {/* Background with Gradient Overlay */}

   {/* Content */}
   <div className="relative  container mx-auto pt-10 pb-16 px-4 relative z-30 ">
   <h2 className="text-3xl font-bold text-center  mb-6">
          Vizyonumuz ve Misyonumuz
        </h2>
        <p className="text-lg text-justify mb-4 ">
          Amacımız, her geçen gün globalleşen ve küreselleşen dünyada, tasarlayan, geliştiren, üreten ve teknolojiyi yaşama entegre edebilen karakter sahibi yeni nesiller inşa etmek için çalışıyoruz. Nitelikli kadromuz, maddi ve manevi olarak eğitimde tüm imkanlarını seferber ederek, öğrencilerimizi geleceğe hazırlamaktadır.
        </p>
        <p className="text-lg text-justify mb-4 ">
          Bursa’dan dünyaya açılan bir eğitim kurumu olarak, yaktığımız bu eğitim meşalesi ile Türk eğitim sistemini uluslararası alanda zirveye taşımak en büyük vizyon ve misyonumuzdur. Öğrencilerimizi başarıya ulaştırmak ve onlara dünya çapında rekabet edebilecek beceriler kazandırmak, en öncelikli hedefimizdir.
        </p>
   </div>
 </div>


  );
};

export default VisionMission;
