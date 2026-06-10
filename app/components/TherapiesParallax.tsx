'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const iconStyle: React.CSSProperties = {
  filter: 'invert(72%) sepia(50%) saturate(500%) hue-rotate(5deg) brightness(90%) contrast(90%)',
  mixBlendMode: 'screen',
};

const therapies = [
  {
    title: 'Mud Therapy',
    desc: 'Natural detoxification using mineral-rich earth to draw out toxins, relieve joint pain, improve circulation, and rejuvenate the skin.',
    iconSrc: '/image/icons/therapy/mudtherapy.png',
  },
  {
    title: 'Kati Basti',
    desc: 'An ancient Ayurvedic treatment using warm, medicated oils retained over the lower back to relieve pain, tension, and strengthen the spine.',
    iconSrc: '/image/icons/therapy/katibasti.png',
  },
  {
    title: 'Prana Yoga',
    desc: 'Awaken your vital energy with deep breathing techniques (Pranayama) and postures designed to align the chakras and balance the mind.',
    iconSrc: '/image/icons/therapy/yoga.png',
  },
];

export default function TherapiesParallax() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cardsRef.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1 && entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full py-24 md:py-32 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/image/about/lengthcontainer.png')" }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#010103]/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#010103] via-transparent to-[#010103]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
            <span className="text-xs">+</span>
          </div>
          <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">
            OUR THERAPIES
          </span>
        </div>
        <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight mb-16 text-[#F5EDD6]">
          Ancient Healing Practices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {therapies.map((t, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative rounded-2xl p-8 md:p-10 text-center hover:-translate-y-2"
              style={{
                background: 'rgba(1, 1, 3, 0.35)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(201, 168, 76, 0.08)',
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? 'translateY(0)' : 'translateY(60px)',
                transition: `opacity 0.7s ease ${i * 200}ms, transform 0.7s ease ${i * 200}ms`,
              }}
            >
              {/* Glass shine on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)',
                }}
              />

              {/* Icon */}
              <div className="mb-6 flex justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <Image src={t.iconSrc} alt={t.title} width={160} height={160} style={iconStyle} />
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-2xl text-[#F5EDD6] mb-4 relative z-10">
                {t.title}
              </h3>

              {/* Description */}
              <p className="font-cormorant text-lg text-[#F5EDD6]/75 leading-relaxed relative z-10">
                {t.desc}
              </p>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
