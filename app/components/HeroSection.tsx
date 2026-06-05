'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#010103]">

      {/* 1. Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/hero/banner.png"
          alt="Background"
          fill
          className="object-cover"
          style={{ animation: 'banner-fade 10s ease-in-out infinite' }}
          priority
        />
        {/* Gradient Overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Grid Layout Container */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-between gap-12 px-6 pb-12 pt-24 lg:flex-row">

        {/* LEFT COLUMN: Image */}
        <div className="relative flex h-[500px] w-full items-center justify-center lg:w-1/2">
          <div className="absolute inset-0 flex scale-110 transform items-center justify-center overflow-hidden rounded-full opacity-70 mix-blend-screen">
            <Image
              src="/image/hero/heroleftimage.jpg"
              alt="Healing"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-[0_0_100px_rgba(201,168,76,0.2)]"
            />
          </div>

          {/* Radial ambient glow */}
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,47,192,0.15),transparent_70%)]" />
        </div>

        {/* RIGHT COLUMN: Text */}
        <div className={`relative z-10 w-full text-center transition-opacity duration-300 ease-in-out lg:w-1/2 lg:text-left ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-cinzel mb-4 text-xs tracking-[0.4em] text-[#C9A84C] md:mb-6">
            EXPERIENCING COMPLETE HEALING
          </p>

          <h1 className="font-cormorant mb-6 bg-gradient-to-br from-[#F5EDD6] via-[#C9A84C] to-[#E8C87A] bg-clip-text text-5xl font-light leading-tight text-transparent md:text-6xl lg:text-7xl" style={{ backgroundSize: '200% auto', animation: 'shimmer 5s linear infinite' }}>
            Awaken Your<br /><em className="font-light italic">Inner Healing</em><br />Potential
          </h1>

          <div className="mx-auto mb-6 h-[1px] w-16 bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C] to-[#C9A84C]/20 lg:mx-0" />

          <p className="font-cormorant mb-4 text-sm uppercase tracking-[0.2em] text-[#F5EDD6]/60">
            Where Modern Naturopathy Meets Ancient Energy Healing
          </p>

          <p className="font-cormorant mx-auto mb-10 max-w-lg text-lg italic leading-relaxed text-[#F5EDD6]/80 md:text-xl lg:mx-0">
            Begin your journey through a unique integration of naturopathy, homeopathy, yoga, and chakra-based wellness to restore harmony to body, mind, and spirit.
          </p>

        </div>

      </div>

      {/* Scroll down indicator */}
      <div className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 transition-opacity delay-100 duration-300 ${textVisible ? 'opacity-70' : 'opacity-0'}`}>
        <span className="font-cinzel text-[10px] tracking-[0.3em] text-[#C9A84C]">BEGIN JOURNEY</span>
        <div className="h-12 w-[1px] animate-pulse bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>

    </section>
  );
}
