"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring"; // Akıcı animasyonlar için
import { useMediaQuery } from 'react-responsive'; // Mobil/dizüstü uyumu için

const MobileNav = ({ links, isMenuOpen, setIsMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Aktif dropdown
  const [previousMenu, setPreviousMenu] = useState(null); // Önceki menüyü tut
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleDropdown = (linkName) => {
    if (activeDropdown === linkName) {
      setActiveDropdown(null); // Aynı dropdown'a tıklanırsa kapat
    } else {
      setPreviousMenu(activeDropdown); // Önceki menüyü kaydet
      setActiveDropdown(linkName); // Yeni dropdown'ı aktif et
    }
  };






  // Akıcı animasyonlar için react-spring
  const springProps = useSpring({
    opacity: activeDropdown ? 1 : 0,
    transform: activeDropdown ? 'translateY(0)' : 'translateY(-10px)', // Yatay kaydırma
    config: { tension: 300, friction: 25 }
  });

  const handleLinkClick = () => {
    // Linke tıklandığında menüyü kapat
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col space-y-2 bg-gray-800 text-white p-4 transition-all duration-300 transform  shaking slide-in-box">
      
      <nav className="flex flex-col gap-2">
        {/* Eğer menü açık değilse hiçbir şey gösterilmesin */}
        {isMenuOpen && (
          <>
            {/* Eğer aktif dropdown varsa eski menü yerine yeni menü içeriği gösterilsin */}
            {activeDropdown ? (
              <>
              <div className="flex items-center gap-2">
                {/* Geri butonu ile önceki menüye dönülebilsin */}
                <button
                  onClick={() => setActiveDropdown(previousMenu)} // Önceki menüye dön
                  className="px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 rounded-md mb-2"
                >
                  &larr; Geri
                
                </button>
  {activeDropdown && (
                    <span className="ml-2 font-semibold text-gray-200">{activeDropdown}</span>
                  )}

</div>
                {/* Seçilen dropdown içeriği */}
                {links.map((link, index) => (
                  link.name === activeDropdown && link.content ? (
                    <animated.div
                      style={springProps}
                      key={index}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {link.content.map((contentItem, subIndex) => (
                        <div key={subIndex}>
                          <p className="text-gray-300 px-4 py-2 text-sm">{contentItem.name}</p>
                          {contentItem.links && (
                            <div className="ml-4 space-y-1">
                              {contentItem.links.map((subLink, subSubIndex) => (
                                <Link
                                  key={subSubIndex}
                                  href={subLink.href}
                                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md transition duration-300 ease-in-out"
                                  onClick={handleLinkClick} // Linke tıklandığında menüyü kapat
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </animated.div>
                  ) : null
                ))}
              </>
            ) : (
              // Eğer aktif dropdown yoksa normal menü listesi görünsün
              links.map((link, index) => (
                <div key={index} className="relative">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-700 focus:outline-none w-full transition-all duration-300"
                        aria-expanded={activeDropdown === link.name ? "true" : "false"}
                        aria-controls={`dropdown-${link.name}`}
                      >
                        {link.name}
                        <svg
                          className={`w-5 h-5 ml-2 transition-transform ${activeDropdown === link.name ? "rotate-180" : "rotate-0"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-4 py-2 rounded-md text-lg font-semibold hover:bg-gray-700 focus:outline-none w-full transition-all duration-300"
                      onClick={handleLinkClick} // Linke tıklandığında menüyü kapat
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))
            )}
          </>
        )}
      </nav>
    </div>
  );
};

export default MobileNav;
