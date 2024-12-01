"use client";
import React from "react";
import ImageBanner2 from "../common/image-banner-2/ImageBanner2";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <ImageBanner2
        src="/images/bggg.png"
        title="Akademik International School"
        subTitle="İletişim"
        objectClass="object-top"
        bg="bg-gradient-to-br from-[#133156]/95 to-[#DB001D]/65"
      />

      <div className="container mx-auto py-16 px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg  relative px-4 py-2">
            <h2 className="text-2xl font-bold mb-4">
              Kids & Nasa Kampüsü - İlkokul ve Ortaokul
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6271.787597116415!2d28.949024139035927!3d40.21748840595583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f1ac142441b%3A0x5bc430ded6855f43!2sAkademik%20Koleji%20%7CAkademik%20International%20School%20%7C%20Bursa%E2%80%99n%C4%B1n%20En%20%C4%B0yi%20%C3%96zel%20Okulu!5e0!3m2!1str!2str!4v1732978788573!5m2!1str!2str"
              width="100%"
              height="350"
              className="rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
  <div className="flex justify-between items-center mt-2 text-lg font-medium">
            <div>
              <h2 className="">Konumu Telefonuma Gönder</h2>
            
            </div>
            <div>
              <h2 className="">Yol Tarifi Al</h2>
            </div>
            <div>
              <h2 className="">Haritayı Büyüt</h2>
            </div>

          </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg px-4 py-2">
            <h2 className="text-2xl font-bold mb-4">
              Space Kampüsü - Anadolu Lisesi
            </h2>
           
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4744.358595319614!2d28.949655991795677!3d40.21213517550399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca11534672941f%3A0xc43ca6764dd0b3d8!2s%C3%96zel%20Bursa%20Ataevler%20Koleji!5e0!3m2!1str!2str!4v1732980512903!5m2!1str!2str"
              width="100%"
              height="350"
              className="rounded-lg border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          <div className="flex justify-between items-center mt-2 text-lg font-medium">
            <div>
              <h2 className="">Konumu Telefonuma Gönder</h2>
            
            </div>
            <div>
              <h2 className="">Yol Tarifi Al</h2>
            </div>
            <div>
              <h2 className="">Haritayı Büyüt</h2>
            </div>

          </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-12">

        

        

          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">İletişim Formu</h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Adınız ve Soyadınız*"
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="E-Posta*"
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Telefon*"
                className="border p-3 rounded-lg"
                required
              />
              <textarea
                placeholder="Lütfen Mesajınızı Yazınız..."
                className="border p-3 rounded-lg h-24"
                required
              ></textarea>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                KVKK Şartlarını okudum ve kabul ediyorum.
              </label>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-lg"
              >
                Formu Gönder
              </button>
            </form>
          </div>

          <div className="col-span-1">
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Firma Bilgileri</h2>
          <p className="mb-4">
            <strong>Merkez Kampüs:</strong> Rıhtım Cd. Recaizade Sk. 2-3 Kadıköy /
            İSTANBUL
          </p>
          <p>
            <strong>Bursa Kampüs:</strong> Ataevler, Akpelin Sokak No:6/1, Nilüfer/Bursa
          </p>
        </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

