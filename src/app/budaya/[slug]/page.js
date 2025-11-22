"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { regionsData } from '../../data/regionsData'; 
import IntroClouds from '../../components/IntroClouds'; 
import { useAudio } from '../../../context/AudioContext'; 

export default function CulturalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;
  
  const [isExiting, setIsExiting] = useState(false); 
  const { setTrack } = useAudio(); 

  const data = regionsData.find((item) => item.id === slug);

  useEffect(() => {
    if (data && data.audio) {
        setTrack(data.audio);
    }
  }, [data, setTrack]);

  const handleBack = () => {
    setIsExiting(true); 
  };

  if (!data) return null;

  return (
    <main className="min-h-screen bg-[#d6cbb8] relative overflow-x-hidden font-serif text-[#292524]">
      
      {/* --- TRANSISI AWAN --- */}
      {!isExiting && <IntroClouds mode="enter" title={data.name} subtitle="Opening Journal..." />}
      {isExiting && <IntroClouds mode="exit" onComplete={() => router.push('/')} />}

      {/* --- BACKGROUND TEXTURE --- */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#a89f91_100%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-paper-texture opacity-30 mix-blend-multiply pointer-events-none"></div>

      {/* --- TOMBOL KEMBALI (Gaya Stempel) --- */}
      <button 
        onClick={handleBack}
        className="fixed top-6 left-6 z-40 group flex items-center gap-2 px-5 py-2 border-2 border-[#292524] bg-[#e5e0d1] hover:bg-[#292524] hover:text-[#e5e0d1] transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none"
      >
        <span className="text-xl font-bold">←</span>
        <span className="text-sm font-black uppercase tracking-widest">Map Index</span>
      </button>

      {/* --- KONTEN UTAMA (LAYOUT BUKU TERBUKA) --- */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-12 min-h-screen flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16">
        
        {/* === HALAMAN KIRI: FOTO (GRID GALLERY - VERSI LEBIH KECIL) === */}
        {/* UBAH 1: gap-6 jadi gap-3 (Biar lebih rapat) */}
        <div className="w-full lg:w-5/12 flex flex-wrap justify-center content-start gap-3 mt-10">
            
            {(() => {
                const photoList = data.images || (data.image ? [data.image] : []);
                if (photoList.length === 0) photoList.push(null); 

                return photoList.map((imgSrc, index) => (
                    
                    // UBAH 2: UKURAN FOTO LEBIH KECIL
                    // Dulu: w-48 md:w-56
                    // Sekarang: w-36 md:w-44 (Sekitar 144px - 176px)
                    <div 
                        key={index}
                        className={`relative w-36 md:w-44 bg-[#f2f0e9] p-2 shadow-[5px_5px_15px_rgba(0,0,0,0.3)] border border-[#d6cbb8] transition-all duration-500 ease-out hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-[15px_15px_30px_rgba(0,0,0,0.5)] cursor-pointer flex-shrink-0 ${index % 2 === 0 ? 'rotate-[-3deg]' : 'rotate-[3deg]'}`}
                    >
                        
                        {/* Selotip (Dikecilin juga) */}
                        <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#ffffff]/40 shadow-sm backdrop-blur-[1px] border-l border-r border-white/20 z-20 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}></div>

                        {/* Bingkai Foto Dalam */}
                        <div className="w-full aspect-[3/4] border border-[#292524]/20 p-1 bg-[#292524]">
                            <div className="relative w-full h-full grayscale-[0.2] sepia-[0.3] contrast-110 bg-[#1c1917] overflow-hidden">
                                {imgSrc ? (
                                    <Image 
                                        src={imgSrc}
                                        alt={`${data.culture} photo ${index + 1}`}
                                        fill
                                        className="object-cover opacity-90 hover:scale-110 transition-transform duration-[3s]"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-[#78716c] border-2 border-dashed border-[#78716c]/30 m-1">
                                        <span className="text-xl mb-1">📷</span>
                                        <span className="font-mono text-[6px] tracking-widest uppercase">No Img</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-paper-texture opacity-20 mix-blend-overlay pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Caption (Font dikecilin biar muat) */}
                        <div className="mt-2 pb-1 text-center">
                            <p className="font-handwriting text-[#292524] text-[10px] leading-tight" style={{ fontFamily: 'Courier Prime, monospace' }}>
                                Fig {index + 1}.
                            </p>
                            <p className="text-[6px] uppercase tracking-[0.2em] text-[#78716c] mt-1 truncate">
                                #{data.id.toUpperCase()}-{index + 1}
                            </p>
                        </div>

        
                    </div>
                ));
            })()}
        </div>

        {/* === HALAMAN KANAN: TEXT & DATA === */}
        <div className="w-full lg:w-6/12 space-y-8 relative">
            
            {/* Header: Garis-garis judul ala koran lama */}
            <div className="border-b-[3px] border-double border-[#292524] pb-6 text-center lg:text-left">
                <h3 className="text-[#b45309] font-bold uppercase tracking-[0.4em] text-xs mb-3">
                    Cultural Archive No. {data.id.length}04
                </h3>
                <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-[#292524] drop-shadow-sm scale-y-110">
                    {data.name}
                </h1>
            </div>
            
            {/* Deskripsi: Ala Mesin Tik */}
            <div className="relative p-6 bg-[#e5e0d1] shadow-[5px_5px_0px_rgba(0,0,0,0.1)] border border-[#d6cbb8]">
                {/* Paku Pin */}
                <div className="absolute -top-3 -left-3 w-4 h-4 rounded-full bg-[#44403c] shadow-md border border-gray-600"></div>
                
                <p className="text-lg leading-relaxed font-medium text-justify opacity-90" style={{ fontFamily: 'Courier Prime, monospace' }}>
                    <span className="text-5xl float-left mr-3 mt-[-15px] font-serif font-black text-[#b45309]">"</span>
                    {data.description}
                </p>
            </div>

            {/* --- BAGIAN SUKU (FIELD NOTES STYLE) --- */}
            {/* Kita buat ini kayak kertas sobekan yang ditempel */}
            {data.subTribes && (
              <div className="relative bg-[#f5f5f0] p-6 border-2 border-dashed border-[#78716c] rotate-1 mx-2 shadow-sm group hover:rotate-0 transition-transform duration-300">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 w-20 h-6 bg-[#d6cbb8]/80 rotate-[-2deg]"></div>
                 
                 <h3 className="text-center text-sm font-black uppercase tracking-[0.2em] mb-6 text-[#44403c] border-b border-[#78716c]/30 pb-2">
                    — Ethnic Groups Checklist —
                 </h3>
                 
                 <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm" style={{ fontFamily: 'Courier Prime, monospace' }}>
                    {data.subTribes.map((suku, index) => (
                      <li key={index} className="flex items-start gap-3 group-hover:text-[#b45309] transition-colors">
                        {/* Custom Checkbox (Kotak Gambar Tangan) */}
                        <div className="w-4 h-4 border-2 border-[#292524] flex-shrink-0 mt-[2px] relative">
                            {/* Efek Centang Acak (Biar gak rapi kali) */}
                            <div className="absolute inset-0 bg-[#292524] opacity-20 scale-50"></div>
                        </div>
                        <span className="font-bold uppercase tracking-tight">{suku}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            )}

            {/* --- INFO GRID (MAKANAN & BAJU) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                 {/* Kartu Makanan */}
                 <div className="bg-[#292524] text-[#e5e0d1] p-5 shadow-[8px_8px_0px_#b45309] relative overflow-hidden group">
                    <div className="absolute right-2 top-2 text-4xl opacity-10 group-hover:scale-110 transition-transform">🍽️</div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 text-[#d6cbb8]">Signature Dish</h3>
                    <div className="w-10 h-[2px] bg-[#b45309] mb-3"></div>
                    <p className="text-xl font-serif font-bold leading-tight">{data.food}</p>
                 </div>

                 {/* Kartu Baju */}
                 <div className="bg-[#292524] text-[#e5e0d1] p-5 shadow-[8px_8px_0px_#b45309] relative overflow-hidden group">
                    <div className="absolute right-2 top-2 text-4xl opacity-10 group-hover:scale-110 transition-transform">👕</div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 text-[#d6cbb8]">Traditional Wear</h3>
                    <div className="w-10 h-[2px] bg-[#b45309] mb-3"></div>
                    <p className="text-xl font-serif font-bold leading-tight">{data.clothing}</p>
                 </div>
            </div>

            {/* Fakta Unik */}
            {data.funFact && (
               <div className="mt-6 flex gap-4 items-start border-t-2 border-[#292524]/20 pt-6">
                  <span className="text-4xl filter grayscale contrast-150">💡</span>
                  <div>
                     <h3 className="text-xs font-black uppercase tracking-widest text-[#b45309]">Explorer's Note:</h3>
                     <p className="text-sm italic font-serif mt-1 text-[#44403c]">"{data.funFact}"</p>
                  </div>
               </div>
            )}

        </div>
      </div>
    </main>
  );
}