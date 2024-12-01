"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // İkonları ekleyin
import Logo from "../../common/Logo";
import ActionBar from "./ActionBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
  import {FaBook, } from 'react-icons/fa';
import  {AkademikEgitim, AlmancaKulubu, BilimFenveTeknolojiKulubu, BilisimselDüsünme, CevreKorumaKulubu, DijitalVatandaslikEğitimi, DramaKulübü, Duyurular, EgitimKadromuz, EtkilesimliOğrenme, FizikselveDuygusalGelisim, GeziTanitimKulubu, GorselSanatlarKulubu, Haberler, Hakkimizda, IngilizceDramaKulubu, IngilizceKaraokeKulubu, IngilizceScraabbleKulubu, InsanKaynaklari, KidsKampusu, KisilikGelisimi, KulturEdebiyat, KulturveEdebiyatKulubu, KurumsalAnlasmalar, KutuphanecilikKulubu, MarkaOrtaklarimiz, MultilingualEgitim, MuzikKulubu, NasaKampusu, NedenAkademik, OgrenciMerkezliEğitim, OkumaBecerileri, PsikolojikDanisma, RobotikKodlamaKulübü, SatrancKulübü, SivilSavunma, SivilSavunmaKulubu, SpaceKampusu, StemEgitimi, VizyonMisyon, YabancıDiller, YonetimKadromuz, ZekaGelisimi } from "./Icons";
const Header = () => {



const links = [
    { name: "Anasayfa", href: "/", },
    { 
        name: "Eğitimlerimiz", 
        hasDropdown: true, 
        content: [
            {
                name: "Anaokulu Eğitimleri",
                links: [
                    { name: "Fiziksel ve Duygusal Gelişim", href: "/egitimler/anaokulu/fiziksel-ve-duygusal-gelisim", icon:<FizikselveDuygusalGelisim/>},
                    { name: "Zeka Gelişimi", href: "/egitimler/anaokulu/zeka-gelisimi", icon: <ZekaGelisimi/> }, 
                     { name: "Yabancı Diller", href: "/egitimler/anaokulu/yabanci-diller", icon:<YabancıDiller/> },
                ],
            },
            {
                name: "İlkokul Eğitimleri",
                links: [
                    { name: "Etkileşimli Öğrenme", href: "/egitimler/ilkokul/etkilesimli-ogrenme", icon: <EtkilesimliOğrenme/> },
                ],
            },
            {
                name: "Ortaokul Eğitimleri",
                links: [
                    { name: "Öğrenci Merkezli Eğitim", href: "/egitimler/ortaokul/ogrenci-merkezli-egitim", icon:<OgrenciMerkezliEğitim/> },
                    { name: "Psikolojik Danışma", href: "/egitimler/ortaokul/psikolojik-danisma", icon:<PsikolojikDanisma/>  },
                    { name: "STEM Eğitimi", href: "/egitimler/ortaokul/stem-egitimi", icon: <StemEgitimi/>},
                    { name: "Dijital Vatandaşlık Eğitimi", href: "/egitimler/ortaokul/dijital-vatandaslik-egitimi", icon:<DijitalVatandaslikEğitimi/> },
                    { name: "Okuma Becerileri", href: "/egitimler/ortaokul/okuma-becerileri", icon: <OkumaBecerileri/> },
                ],
            },
            {
                name: "Lise Eğitimleri",
                links: [
                    { name: "Kişilik Gelişimi", href: "/egitimler/lise/kisilik-gelisimi", icon:<KisilikGelisimi/> },
                    { name: "Bilişimsel Düşünme",  href: "/egitimler/lise/bilisimsel-dusunme", icon:<BilisimselDüsünme/> },
                    { name: "Multilingual Eğitim",  href: "/egitimler/lise/multilingual-egitim", icon: <MultilingualEgitim/>  },
                    { name: "Akademik Eğitim",  href: "/egitimler/lise/akademik-egitim", icon: <AkademikEgitim/>},
                ],
            },
        ]
    },
    {
      name: "Öğrenci Kulüpleri",
      hasDropdown: true,
      icon: <FaBook />,
      content: [
          {
              name: "Anaokulu Kulüpleri",
              links: [
                  { name: "Drama Kulübü", href: "/kulupler/anaokulu/darama-kulubu", icon: <DramaKulübü/> },
                  { name: "Robotik Kodlama Kulübü", href: "/kulupler/anaokulu/robotik-kodlama-kulubu", icon: <RobotikKodlamaKulübü/> },
              ],
          },
          {
              name: "Ortaokul Kulüpleri",
              links: [
                  { name: "Kültür ve Edebiyat Kulübü", href: "/kulupler/ortaokul/kultur-ve-edebiyat-kulubu", icon: <KulturveEdebiyatKulubu/>},
                  { name: "Sivil Savunma Kulübü", href: "/kulupler/ortaokul/sivil-savunma-kulubu", icon: <SivilSavunmaKulubu/>  },
                  { name: "Gezi Tanıtım ve Turizm Kulübü", href: "/kulupler/ortaokul/gezi-tanitim-ve-turizm-kulubu", icon: <GeziTanitimKulubu/>},
                  { name: "Satranç Kulübü", href: "/kulupler/ortaokul/satranc-kulubu", icon: <SatrancKulübü/> },
                  { name: "Bilim Fen ve Teknoloji Kulübü",href: "/kulupler/ortaokul/bilim-fen-ve-teknoloji-kulubu", icon: <BilimFenveTeknolojiKulubu/> },
                  { name: "Görsel Sanatlar Kulübü", href: "/kulupler/ortaokul/gorsel-sanatlar-kulubu", icon: <GorselSanatlarKulubu/> },
                  { name: "Müzik Kulübü", href: "/kulupler/ortaokul/muzik-kulubu", icon: <MuzikKulubu/> },
              ],
          },
          {
              name: "Lise Kulüpleri",
              links: [
                  { name: "Kütüphanecilik Kulübü", href: "/kulupler/lise/kutuphanecilik-kulubu", icon: <KutuphanecilikKulubu/>  },
                  { name: "Çevre Koruma Kulübü", href: "/kulupler/lise/cevre-koruma-kulubu", icon: <CevreKorumaKulubu/> },
                  { name: "Kültür ve Edebiyat Kulübü", href: "/kulupler/lise/kultur-ve-edebiyat-kulubu", icon: <KulturEdebiyat/>},
                  
                  { name: "Sivil Savunma Kulübü", href: "/kulupler/lise/sivil-savunma-kulubu", icon:<SivilSavunma/>  },
                  { name: "Gezi Tanıtım ve Turizm Kulübü", href: "/kulupler/lise/gezi-tanitim-ve-turizm-kulubu", icon: <GeziTanitimKulubu/> },
                  { name: "Satranç Kulübü", href: "/kulupler/lise/satranc-kulubu", icon: <SatrancKulübü/> },
                  { name: "Bilim Fen ve Teknoloji Kulübü", href: "/kulupler/lise/bilim-fen-ve-teknoloji-kulubu", icon:<BilimFenveTeknolojiKulubu/> },
                  { name: "Görsel Sanatlar Kulübü", href: "/kulupler/lise/gorsel-sanatlar-kulubu", icon: <GorselSanatlarKulubu/> },
                 
              ],
          },
          {
              name: "Dil Okulu Kulüpleri",
              links: [
                  { name: "İngilizce Drama Kulübü", href: "/kulupler/dilokulu/ingilizce-drama-kulubu", icon:<IngilizceDramaKulubu/>  },
                  { name: "İngilizce Karaoke Kulübü",  href: "/kulupler/dilokulu/ingilizce-karaoke-kulubu", icon:<IngilizceKaraokeKulubu/> },
                  { name: "İngilizce Scrabble Kulübü",  href: "/kulupler/dilokulu/ingilizce-scrabble-kulubu", icon:<IngilizceScraabbleKulubu/> },
                  { name: "Almanca Kulübü", href: "/kulupler/dilokulu/almanca-kulubu", icon:<AlmancaKulubu/> },
              ],
          },
      ]
  }
  ,
    { 
        name: "Kurumsal",
        hasDropdown: true,
        content: [
          {
            name: "Kurumsal Bilgiler",
            links: [
              { name: "Hakkımızda", href: "/kurumsal/kurumsal-bilgiler/hakkimizda", icon: <Hakkimizda/>  },
              { name: "Vizyon & Misyon", href: "/kurumsal/kurumsal-bilgiler/vizyon-ve-misyon", icon: <VizyonMisyon/> },
              { name: "Neden Akademik Koleji?", href: "/kurumsal/kurumsal-bilgiler/neden-akademik-koleji", icon: <NedenAkademik/>},
              { name: "Kurumsal Anlaşmalar", href: "/kurumsal/kurumsal-bilgiler/kurumsal-anlasmalar", icon: <KurumsalAnlasmalar/>  },
              { name: "Marka Ortaklarımız", href: "/kurumsal/kurumsal-bilgiler/marka-ortaklari", icon: <MarkaOrtaklarimiz/> },
            ],
          },
          {
            name: "Haberler ve Duyurular",
            links: [
              { name: "Haberler", href: "/kurumsal/kurumsal-bilgiler/haberler", icon: <Haberler/> },
              { name: "Duyurular", href: "/kurumsal/kurumsal-bilgiler/duyurular", icon:<Duyurular/> },
            ],
          },
          {
            name: "İnsan Kaynakları",
            links: [
              { name: "İnsan Kaynakları", href: "/kurumsal/kurumsal-bilgiler/insan-kaynaklari", icon: <InsanKaynaklari/> },
              { name: "Yönetim Kadromuz", href: "/kurumsal/kurumsal-bilgiler/yonetim-kadrosu", icon: <YonetimKadromuz/> },
              { name: "Eğitim Kadromuz", href: "/kurumsal/kurumsal-bilgiler/egitim-kadrosu", icon:<EgitimKadromuz/> },
            ],
          },
          {
            name: "Diğer Bilgiler",
            links: [
              { name: "Yemek Menüsü", href: "/kurumsal/kurumsal-bilgiler/yemek-menusu", icon: <YonetimKadromuz/>},
            ],
          },
        ],
      },
    { 
        name: "Kampüs", 
        hasDropdown: true, 
        content: [
            {
                name: "Anaokulu",
                links: [
                    { name: "Kids Kampüsü", href: "/kampusler/kids-anaokulu", icon: <KidsKampusu/> },
          
                ],
            },
            {
              name: "İlk ve Ortaokul",
              links: [
                  { name: "Nasa Kampüsü", href: "/kampusler/nasa-ilk-ve-ortaokul", icon:<NasaKampusu/> },
        
              ],
          },
          {
            name: "Anadolu Lisesi",
            links: [
                { name: "Space", href: "/kampusler/space-lise", icon:<SpaceKampusu/> },
      
            ],
        },
        ]
    },
    { name: "İletişim", href: "/iletisim",},
];

const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [src, setSrc] = useState("/images/logos/main.svg");

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleClickOutside = (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    const isDropdown = Array.from(dropdowns).some((dropdown) => dropdown.contains(event.target));
    if (!isDropdown) {
      closeDropdown();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
 if(isScrolled){
  setSrc("/images/logos/dark.svg")
 }
 if(!isScrolled){
  setSrc("/images/logos/main.svg")

 }
  }, [isScrolled]);



  return (
    <header className={`fixed top-0 w-full transition-colors duration-300  ${isScrolled ? "bg-white shadow-lg text-black" : "lg:bg-transparent text-white "}`} style={{ zIndex: "999999" }}>
      <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isScrolled ? "opacity-0 max-h-0" : "opacity-100 max-h-20"}`}>
        <ActionBar />
      </div>

      <div className="  container mx-auto flex justify-between items-center px-6 py-1">
        <div className="flex items-center space-x-4">

          
          <Logo src={src} />
        
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <DesktopNav links={links} activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} closeDropdown={closeDropdown} />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && <MobileNav links={links} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
   
    </header>
  );
};

export default Header;