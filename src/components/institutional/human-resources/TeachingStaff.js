"use client";
import ImageBanner from "@/components/common/image-banner/ImageBanner";
import React from "react";

const TeachingStaff = () => {
    const teachingTeam = [
        {
            name: "Fatma Yıldız",
            position: "Matematik Öğretmeni",
            expertise: "Analitik düşünme ve problem çözme becerileri üzerine uzmanlaşmıştır.",
        },
        {
            name: "Ali Koç",
            position: "Fen Bilgisi Öğretmeni",
            expertise: "Deneysel öğrenme yöntemleri ve STEM eğitimi konusunda deneyimlidir.",
        },
        {
            name: "Ayşe Kara",
            position: "Türkçe Öğretmeni",
            expertise: "Edebiyat ve dil becerileri geliştirme alanında uzmanlaşmıştır.",
        },
        {
            name: "Mehmet Demir",
            position: "Sosyal Bilgiler Öğretmeni",
            expertise: "Tarih ve coğrafya eğitimi konularında derin bir bilgiye sahiptir.",
        },
    ];

    return (


        <div className=" bg-gradient-to-t from-white to-gray-50">
        <ImageBanner 
         src="/images/vision.png"
         title="Kurumsal"
         subTitle="Eğitim Kadrosu
    " 
         objectClass=""
       />
       {/* Background with Gradient Overlay */}
    
       {/* Content */}
       <div className="relative  container mx-auto pt-10 pb-16 px-4 relative z-30 ">
       <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                Eğitim Kadrosu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachingTeam.map((member, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
                        <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                        <h4 className="text-md font-medium text-gray-700">{member.position}</h4>
                        <p className="text-gray-600 mt-2">{member.expertise}</p>
                    </div>
                ))}
            </div>
       </div>
     </div>
    );
};

export default TeachingStaff;
