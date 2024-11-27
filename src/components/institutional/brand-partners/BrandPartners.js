"use client";
import ImageBanner from "@/components/common/image-banner/ImageBanner";
import React from "react";

const BrandPartners= () => {
  // Örnek logo yolları (bu yolları kendi logo dosyalarınızla değiştirin)
  const logos = [
    "/images/logo/1.png",
    "/img/logo/2.png",
    "/img/logo/ak-1.png",
    "/img/logo/ak-2.png",
    "/img/logo/2.png",
    "/img/logo/2.png",
  ];

  return (

    <div className=" bg-gradient-to-t from-white to-gray-50">
    <ImageBanner 
     src=""
     title="Kurumsal"
     subTitle="Marka Ortaklarımız

" 
     objectClass=""
   />
   {/* Background with Gradient Overlay */}

   {/* Content */}
   <div className="relative  container mx-auto pt-10 pb-16 px-4 relative z-30 ">
   <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Marka Ortaklarımız
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src="/images/logos/ak-1.png"
              alt={`Marka ${index + 1}`}
              className="h-16 object-contain"
            />
          </div>
        ))}
 </div>
 </div>

 </div>

  );
};

export default BrandPartners;
