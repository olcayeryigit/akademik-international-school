"use client";
import ImageBanner from "@/components/common/image-banner/ImageBanner";
import Image from "next/image";
import React from "react";

const CorporateAgreements = () => {

    const anlasmalar = 
        [
        {
          "kurum": "Bursa Büyükşehir Belediyesi",
          "tarih": "08/05/2023",
          "aciklama": "Bursa Büyükşehir Belediyesi ile Akademik Koleji arasında Kurumsal İndirim Anlaşması sağlandı. BBB personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "TÜSÇAD",
          "tarih": "08/05/2023",
          "aciklama": "TÜSÇAD ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. TÜSÇAD üyeleri ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "ACIBADEM",
          "tarih": "29/04/2023",
          "aciklama": "ACIBADEM ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. ACIBADEM personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "BESOB",
          "tarih": "28/04/2023",
          "aciklama": "Bursa Esnaf ve Sanatkarlar Odaları Birliği (BESOB) ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. BESOB üyeleri ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Medicalpark",
          "tarih": "15/04/2023",
          "aciklama": "Medicalpark ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Medicalpark personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Doruk Hastaneleri",
          "tarih": "09/03/2023",
          "aciklama": "Doruk Hastaneleri ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Doruk Hastaneleri personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Türkiye İş Bankası",
          "tarih": "08/03/2023",
          "aciklama": "Türkiye İş Bankası ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Banka çalışanları ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Medicana Sağlık Grubu",
          "tarih": "08/03/2023",
          "aciklama": "Medicana Sağlık Grubu ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Sağlık Grubu personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "HAK-İŞ Konfederasyonu",
          "tarih": "04/03/2023",
          "aciklama": "HAK-İŞ ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. HAK-İŞ Konfederasyonu üyeleri ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Osmangazi Belediyesi",
          "tarih": "04/03/2023",
          "aciklama": "Osmangazi Belediyesi ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Belediye personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Özel Hayat Hastanesi",
          "tarih": "03/03/2023",
          "aciklama": "Özel Hayat Hastanesi ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Hastane personeli ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "TÜMSİAD",
          "tarih": "03/03/2023",
          "aciklama": "Akademik Koleji ile TÜMSİAD arasında Kurumsal İndirim Anlaşması imzalandı. TÜMSİAD üyeleri ve birinci derece yakınları için geçerlidir."
        },
        {
          "kurum": "Türk Metal Sendikası",
          "tarih": "18/02/2023",
          "aciklama": "Türk Metal Sendikası Bursa Şubesi ile Akademik Koleji arasında Kurumsal İndirim Anlaşması yapıldı. Sendika üyeleri ve birinci derece yakınları için geçerlidir."
        }

    ];

    return (
      
      <div className=" bg-gradient-to-t from-white to-gray-50">
      <ImageBanner 
       src=""
       title="Kurumsal"
       subTitle="Kurumsal Anlaşmalar
  
  " 
       objectClass=""
     />
     {/* Background with Gradient Overlay */}
  
     {/* Content */}
     <div className="relative  container mx-auto pt-10 pb-16 px-4 relative z-30 ">
     <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Kurumsal Anlaşmalarımız
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {anlasmalar.map((anlasma, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
                    >
                      <div className="relative w-full h-20 mb-4">
                        <Image
                            src={anlasma.resim}
                            alt={`${anlasma.kurum} logo`}
                            className=" object-contain "
                            fill
                        /></div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">
                            {anlasma.kurum}
                        </h3>
                        <p className="text-sm text-gray-600">{anlasma.tarih}</p>
                        <p className="text-gray-700 mt-4">{anlasma.aciklama}</p>
                    </div>
                ))}
            </div>
     </div>
   </div>
  
     
    );
};

export default CorporateAgreements;
