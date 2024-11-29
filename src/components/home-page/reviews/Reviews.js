"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ReviewCard from './ReviewCard';
import SectionTitle from '@/components/common/SectionTitle';
import SectionDescription from '@/components/common/SectionDescription';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    comment: "Okulumuzda aldığım eğitim harika! Öğretmenler çok ilgili ve her konuda bize yardımcı oluyor. Her gün yeni şeyler öğrenmek bana mutluluk veriyor.",
    name: "Caner Ö.",
    title: "Öğrenci"
  },
  {
    id: 2,
    comment: "Çocuğum için çok güvenli ve gelişim odaklı bir okul. Sosyal etkinlikler ve eğitim kalitesi mükemmel. Çocuğum okula severek gidiyor, bu da bizi çok mutlu ediyor.",
    name: "Ali Y.",
    title: "Öğrenci Velisi"
  },
  {
    id: 3,
    comment: "Çocuklarımıza en iyi eğitimi sunan, sevgi dolu bir ortam var. Öğretmenler ve yöneticiler öğrencilerin başarısı için gerçekten özverili çalışıyorlar.",
    name: "Zeynep Ş.",
    title: "Öğrenci Velisi"
  },
 
  {
    id: 4,
    comment: "Okulun sağladığı eğitim materyalleri ve sınıf içi destek mükemmel. Çocuğum okulda kendini çok rahat ve mutlu hissediyor.",
    name: "Mehmet K.",
    title: "Öğrenci Velisi"
  },
  {
    id: 5,
    comment: "Sınıflar ve etkinlikler çocukların ilgisini çekiyor ve merak duygularını geliştiriyor. Okulun öğrenciye yaklaşımı çok değerli.",
    name: "Elif D.",
    title: "Öğrenci"
  }
];


const Reviews= () => {
  return (
    <div className="relative px-10 py-20 bg-[url('/images/bg1.png')] bg-cover bg-no-repeat bg-top rounded-t-3xl ">
    <div className="relative rounded-xl py-10  "> 

   

    <div className="container mx-auto">
<SectionTitle
            title="Geri Bildirimler ve Yorumlar"
            position="text-center "
            textColor="text-gray-800"/>



<SectionDescription
            description="Okulumuzun eğitim ve hizmet kalitesini geliştirmek için öğrenci ve velilerimizin değerli görüşlerini paylaşıyoruz.
"
            position="text-center"
            textColor="text-gray-800"/>
               


      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="swiper-container w-full mt-8 "
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className='py-4  px-10'>
            <ReviewCard 
             
              comment={review.comment} 
              name={review.name} 
              title={review.title} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div></div></div>
  );
};

export default Reviews;
/**<img src="/6.png" className="absolute w-full h-full object-no-repeat object-cover object-center opacity-20  " alt="Your Image"/> */
/**98 */