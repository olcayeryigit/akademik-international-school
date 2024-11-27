"use client"; // Bu sayfanın istemci tarafında çalışması gerektiğini belirtir.

import dynamic from 'next/dynamic';
import HomePage from "@/components/home-page/HomePage";

export default function Home() {
  return (
    <div className="">
      <HomePage />
    </div>
  );
}
