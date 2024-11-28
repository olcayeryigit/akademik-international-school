"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./announcements.scss";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";
import SectionTitle from "@/components/common/SectionTitle";

// react-calendar dinamik olarak yükleniyor (SSR devre dışı)
const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

const announcements = [
  { title: "Yeni Eğitim Programı Başlıyor", date: "22-10-2024", description: "Yeni eğitim programımız 22/10/2024 tarihinde başlıyor." },
  { title: "Okul Spor Etkinliği", date: "01-11-2024", description: "01/11/2024 tarihinde düzenlenecek olan okul spor etkinliğine bekliyoruz." },
  { title: "Mezuniyet Töreni", date: "15-12-2024", description: "15-12-2024 tarihinde gerçekleşecek olan Mezuniyet töreni için hazırlıklara başlandı." },
  { title: "Kariyer Günü Etkinliği", date: "10-11-2024", description: "10/11/2024 tarihinde gerçekleşecek Kariyer günü etkinliğimizde birçok sektör temsilcisi yer alacak." },
  { title: "Yazılım Atölyesi", date: "05-12-2024", description: "Yazılım alanında uzmanların katılacağı atölyeler 05/12/2024 tarihinde başlıyor." },
  { title: "STEM Proje Yarışması", date: "20-01-2025", description: "Öğrencilerin STEM projelerini sergileyeceği yarışma 20/01/2025 tarihinde gerçekleşecek." },
];

function convertDateFormat(dateString) {
  const [day, month, year] = dateString.split("-");
  return `${year}.${month}.${day}`;
}

const Announcements = () => {
  const [value, setValue] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const announcementsPerPage = 3;

  const markedDates = announcements.map((announcement) =>
    new Date(convertDateFormat(announcement.date))
  );
  const indexOfLastAnnouncement = (currentPage + 1) * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const today = new Date();
  const formattedDay = today.getDate();
  const formattedMonth = today.toLocaleString("tr-TR", { month: "long" });
  const formattedYear = today.getFullYear();

  function replaceDashWithSlash(input) {
    return input.replace(/-/g, "/");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= currentAnnouncements.length ? 0 : nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [currentAnnouncements.length]);

  return (
    <div className="relative px-5 lg:px-24 py-24">
      <div className="announcement-container container mx-auto">
        <SectionTitle title="Akademik Koleji Duyurular" position="text-center" />

        <div className="relative bg-[url('/images/9.png')] bg-cover bg-top bg-no-repeat flex flex-col grid grid-cols-1 lg:grid-cols-5 shadow-lg mx-auto rounded-lg overflow-hidden bg-white max-w-[1200px] mt-10">
          <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-blue-500 opacity-10 z-0"></div>
          <div className="lg:col-span-2 announcements-column flex flex-col p-6 text-gray-800 bg-[#bdc5d4] bg-opacity-20 z-50">
            <div className="text-center mb-6 flex justify-center gap-2">
              <div className="flex flex-col gap-2">
                <div className="text-5xl font-semibold">{formattedDay}</div>
                <div className="text-2xl text-gray-600">{formattedMonth}</div>
                <div className="text-2xl text-gray-600">{formattedYear}</div>
              </div>
            </div>

            {currentAnnouncements.map((announcement, index) => (
              <div
                key={index}
                className={`flex flex-col p-4 mb-4 rounded-lg transition duration-300 h-28 bg-white ${
                  highlightedIndex === index ? "bg-opacity-80" : "bg-opacity-50"
                }`}
              >
                <div className="font-semibold text-md">{announcement.title}</div>
                <p className="text-sm text-gray-700">{announcement.description}</p>
                <span className="text-xs text-gray-500">{replaceDashWithSlash(announcement.date)}</span>
              </div>
            ))}

            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
                className={`text-sm w-8 h-2 rounded-md transition duration-300 bg-white ${
                  currentPage === 0 ? "bg-opacity-80" : "bg-opacity-50"
                }`}
              ></button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, Math.ceil(announcements.length / announcementsPerPage) - 1)
                  )
                }
                disabled={currentPage >= Math.ceil(announcements.length / announcementsPerPage) - 1}
                className={`text-sm w-8 h-2 rounded-md transition duration-300 bg-white ${
                  currentPage >= Math.ceil(announcements.length / announcementsPerPage) - 1 ? "bg-opacity-80" : "bg-opacity-50"
                }`}
              ></button>
            </div>
          </div>

          <div className="calendar-column lg:col-span-3 border-l border-gray-100 z-50 bg-[#bdc5d4] bg-opacity-20">
            <Calendar
              locale="tr-TR"
              tileClassName={({ date }) =>
                markedDates.some(
                  (markedDate) =>
                    markedDate.getFullYear() === date.getFullYear() &&
                    markedDate.getMonth() === date.getMonth() &&
                    markedDate.getDate() === date.getDate()
                )
                  ? "highlight"
                  : null
              }
              onChange={setValue}
              value={value}
              className="border-l w-full h-full p-8 pt-0 md:px-20 flex flex-col mt-0 md:mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;


/*
<div className="absolute inset-0 bg-[url('/bg-2/87.png')] bg-cover bg-top bg-no-repeat opacity-50 ounded-3xl "/>*/