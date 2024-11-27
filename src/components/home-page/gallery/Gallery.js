"use client"

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules'; // Pagination ekledik
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from './gallery.module.scss';
import LogoButton from '@/components/common/buttons/LogoButton';
import SectionTitle from '@/components/common/SectionTitle';
import SectionDescription from '@/components/common/SectionDescription';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Gallery = () => {

    useEffect(() => {
        // Swiper bileşeni render edildikten sonra navigation kontrolü
        const swiperInstance = document.querySelector('.swiper');
        if (swiperInstance) {
            console.log('Swiper initialized');
        } else {
            console.error('Swiper not found!');
        }
    }, []);

    const images = [
        { 
            src: '/images/main.jpg', 
            alt: 'Öğrenciler Ders Çalışıyor', 
            date: '2023-09-15',
            description: 'Derslere aktif katılım.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Okul Bahçesi', 
            date: '2023-09-20',
            description: 'Öğrencilerin oyun alanı.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Sınıf Aktiviteleri', 
            date: '2023-09-25',
            description: 'Eğlenceli sınıf etkinlikleri.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Laboratuvar Çalışmaları', 
            date: '2023-10-01',
            description: 'Pratik deneyler.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Öğretmen ve Öğrenciler', 
            date: '2023-10-05',
            description: 'Öğretmen rehberliği.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Sınıf Düzeni', 
            date: '2023-10-10',
            description: 'Modern eğitim alanları.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Kütüphane', 
            date: '2023-10-15',
            description: 'Bilgiye erişim noktası.'
        },
        { 
            src: '/images/main.jpg', 
            alt: 'Spor Aktiviteleri', 
            date: '2023-10-20',
            description: 'Fiziksel gelişim fırsatları.'
        },
    ];

    return (
        <div className="py-20 px-4 md:px-0 ">
        <div className="w-full container mx-auto relative p-10 corner-shadow rounded-xl ">
        <SectionTitle
            title="Akademik Koleji Okul Galerisi"
            position="text-center"
            textColor="text-gray-800"/>


<SectionDescription
            description=" Eğitim yolculuğumuzun önemli anlarını bir araya getiriyor; Akademik Koleji&apos;nin dinamik ve canlı ortamını keşfetmeye davet ediyoruz."
            position="text-center"
            textColor="text-gray-800"/>
               

            <Swiper
                spaceBetween={10}
                navigation={{
                    nextEl: `.${styles?.navigationButtonNext}`,
                    prevEl: `.${styles?.navigationButtonPrev}`
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
               className=''  
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative opacity-90 hover:opacity-100 transition-opacity duration-300 p-2 bg-white rounded shadow">
                        <div className='relative w-full h-56 rounded overflow-hidden'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className='object-cover rounded'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className={`${styles?.navigationButton} ${styles?.navigationButtonNext} `}><FaChevronRight
            className={`${styles?.arrow} ${styles?.FaArrowRight}`}/>
            </button>
            <button className={`${styles?.navigationButton} ${styles?.navigationButtonPrev}   `}><FaChevronLeft/>
            </button>

               <LogoButton
                text="Tüm Galeriyi Görüntüle"
                bgColor="bg-white "
                textColor="text-black"
                hoverBgColor="hover:bg-black"
                hoverTextColor="hover:text-white"
                border="border-2"
                borderColor="border-black"
                hoverBorderColor="hover:border-black"
                rounded="rounded-lg"
                theme="clear"
                size="medium"
                flexType="inline"
            />
        </div>
     
    </div>
    );
};

export default Gallery;
