"use client"

import Link from 'next/link';
import React from 'react';
import { useSpring, animated } from 'react-spring'; // react-spring'i import ediyoruz

const Dropdown = ({ items, left, closeDropdown }) => {
  // Akıcı animasyon için useSpring kullanımı
  const springProps = useSpring({
    opacity: 1, // Görünürlük
    transform: 'translateY(0)', // Yükseklik değişimi
    config: { tension: 200, friction: 20 }, // Hız ve gerilim ayarları
  });

  return (
    <div className="relative">
      {/* Üçgen */}
      <div className="absolute left-1/2 -top-0 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white" />

      <animated.div
        style={{
          ...springProps, // Animasyon stillerini buraya uyguluyoruz
          left: `${left}`,
        }}
        className="absolute mt-2 bg-white shadow-lg rounded-md z-10 flex justify-center gap-20 px-8 py-6 whitespace-nowrap bg-gradient-to-b from-white to-purple-100"
      >
        {items.map((item, index) => (
          <div key={index}>
            <span className="font-bold text-gray-700 tracking-wide">{item.name.toUpperCase()}</span>
            <ul className="mt-1 flex flex-col">
              {item.links.map((subLink, subIndex) => (
                <li key={subIndex} className="flex items-center text-sm gap-3 pt-5">
                  <div className="w-5 h-5 text-indigo-500">{subLink.icon}</div>
                  <Link
                    href={subLink.href}
                    className="block text-gray-800 hover:text-[#DC001E] transition duration-200"
                    onClick={() => {
                      closeDropdown(); // Dropdown'u kapat
                    }} // Bu kısım önemli
                  >
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dropdown;
