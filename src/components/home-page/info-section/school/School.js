"use client"

import React from 'react';

const data = [
  {
    value: "15 Yıl+",
    label: "Eğitim Tecrübesi",
    color: '#FF5733', // Kırmızı
  },
  {
    value: "8.734+",
    label: "Toplam Kayıtlı Öğrenci",
    color: '#28A745', // Yeşil
  },
  {
    value: "732",
    label: "LGS'den 450+ Puan",
    color: '#3357FF', // Mavi
  },
  {
    value: "318",
    label: "YKS'den 450+ Puan",
    color: '#EAB308', // Sarı
  },
  {
    value: "1.802",
    label: "Hedef Üniversiteye Yerleşen",
    color: '#8E44AD', // Mor
  },
];

const School= () => {
  return (
    <div className="relative mx-2 md:mt-3"> {/* Genel yapı tam genişlik ve belirli yükseklik */}
  
      <div className="inset-0 left-0 w-full text-white">
        <div className="grid grid-cols-2 gap-2 md:gap-10">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col px-4 py-6 bg-white bg-opacity-70  rounded-xl">
              <h3 className="text-lg md:text-3xl font-bold text-shadow" style={{ color: item.color }}>
                {item.value}
              </h3>
              <p style={{ color: item.color }} className="text-sm md:text-lg font-medium clear-text-shadow">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;


