"use client";
import ImageBanner from "@/components/common/image-banner/ImageBanner";
import React from "react";

const WhyUs= () => {
  return (

    <div className=" bg-gradient-to-t from-white to-gray-50">
    <ImageBanner 
     src=""
     title="Kurumsal"
     subTitle="Neden Akademik Koleji

" 
     objectClass=""
   />
   {/* Background with Gradient Overlay */}

   {/* Content */}
   <div className="relative  container mx-auto pt-10 pb-16 px-4 relative z-30 ">
   <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
        Neden Akademik Koleji
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Akademik Koleji, akademik anlamda gelişmiş bireyler yetiştirmenin yanı
        sıra, gerçeği ve adaleti takip etmeye ve programlarının her alanında
        eşitliği benimsemeye kendini adamış, saygıya dayalı bir topluluk
        oluşturmaya çalışmaktadır. Her öğrenciye etkin bir şekilde hitap
        edebilmek, zihinsel, sosyal ve ruhsal gelişimlerini zihin ve kalp
        alışkanlıkları yoluyla beslemek en büyük hedeflerimiz arasındadır.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Akademik Koleji, öğrencileri, doğruları söylemeye ve varsayımları
        sorgulamaya, empati ve şefkat göstermeye ve çevrelerindeki dünya
        hakkında kalıcı bir merak ve bağlılık geliştirmeye teşvik eder.
        Donanımlı müfredatımız, nitelikli öğretmenlerimiz ve geniş imkanları
        barındıran büyük eğitim kampüsümüzle Akademik Koleji olarak,
        çocuklarımızın geleceklerini şekillendirmede ebeveynlerimizin en büyük
        yardımcıları oluyoruz.
      </p>
   </div>
 </div>

 
  );
};

export default WhyUs;
