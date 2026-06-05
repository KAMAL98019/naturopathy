'use client';
import { useEffect, useRef, useState } from 'react';
import { chakras } from '../data/chakras';
import Image from 'next/image';

export default function ChakraSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const prog = Math.min(1, scrolled / total);
      setActiveIdx(Math.min(6, Math.floor(prog * 7)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const c = chakras[activeIdx];

  return (
    <section id="chakras" ref={sectionRef} style={{ height: `${7 * 100}vh`, position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        background: '#000000',
      }}>

        {/* ── Full-bleed Background Images ── */}
        {chakras.map((ch, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === activeIdx ? 1 : 0,
              transition: 'opacity 1s ease',
              zIndex: 0,
            }}
          >
            <Image
              src={`/image/chakra/${ch.id}.png`}
              alt={ch.name}
              fill
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.5)',
            }} />
            {/* Subtle color radial glow behind center */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${ch.glow}30, transparent 70%)`,
            }} />
          </div>
        ))}

        {/* ── Top label ── */}
        <div style={{
          position: 'absolute', top: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 10,
        }}>
          <p className="font-cinzel" style={{
            color: 'rgba(245,237,214,0.3)', fontSize: '0.6rem', letterSpacing: '0.5em',
          }}>
            CHAKRA HEALING JOURNEY — SCROLL TO EXPLORE
          </p>
        </div>

        {/* ── Dot nav (right side) ── */}
        <div style={{
          position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 20,
        }}>
          {chakras.map((ch, i) => (
            <button key={i} onClick={() => {
              if (!sectionRef.current) return;
              const top = sectionRef.current.offsetTop;
              const h = sectionRef.current.offsetHeight - window.innerHeight;
              window.scrollTo({ top: top + (i / 7) * h, behavior: 'smooth' });
            }} style={{
              width: i === activeIdx ? 12 : 6,
              height: i === activeIdx ? 12 : 6,
              borderRadius: '50%',
              background: i === activeIdx ? ch.color : 'rgba(245,237,214,0.15)',
              border: 'none', cursor: 'pointer', transition: 'all 0.4s',
              boxShadow: i === activeIdx ? `0 0 16px ${ch.color}` : 'none',
            }} />
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div style={{
            width: 'min(1100px, 94vw)',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${c.color}30`,
            borderRadius: '20px',
            padding: 'clamp(32px, 5vw, 56px)',
            transition: 'border-color 0.8s',
          }}>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-stretch">
              {/* Left Column: Text */}
              <div className="flex-1 min-w-0 flex flex-col">
                {/* Chakra number */}
                <div style={{ marginBottom: '8px' }}>
              <span className="font-cinzel" style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700,
                color: c.color, lineHeight: 1, opacity: 0.25,
                transition: 'color 0.8s',
              }}>{String(c.id).padStart(2, '0')}</span>
            </div>

            {/* Title */}
            <h2 className="font-cinzel" style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              color: '#F5EDD6', lineHeight: 1.1, marginBottom: '6px',
            }}>{c.english}</h2>

            {/* Subtitle */}
            <p className="font-cormorant" style={{
              color: 'rgba(245,237,214,0.75)', fontSize: '1.05rem', fontStyle: 'italic',
              marginBottom: '20px',
            }}>
              {c.name} • {c.element} • Mantra: {c.mantra}
            </p>

            {/* Divider */}
            <div style={{
              height: '1px', marginBottom: '20px',
              background: `linear-gradient(to right, ${c.color}, transparent)`,
              boxShadow: `0 0 6px ${c.color}40`,
              transition: 'all 0.8s',
            }} />

            {/* Guide text */}
            <p className="font-cormorant" style={{
              color: '#F5EDD6', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              lineHeight: 1.8, fontStyle: 'italic', marginBottom: '28px',
            }}>
              &ldquo;{c.guide}&rdquo;
            </p>

            {/* Healing Focus */}
            <div style={{ marginBottom: '24px' }}>
              <p className="font-cinzel" style={{
                color: 'rgba(245,237,214,0.6)', fontSize: '0.6rem',
                letterSpacing: '0.35em', marginBottom: '12px',
              }}>
                HEALING FOCUS
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {c.focus?.map((f, i) => (
                  <span key={i} style={{
                    padding: '6px 16px',
                    border: `1px solid ${c.color}50`,
                    borderRadius: '4px',
                    color: '#F5EDD6', fontSize: '0.75rem',
                    fontFamily: 'Arial, sans-serif', letterSpacing: '0.06em',
                    background: `${c.color}10`,
                    transition: 'all 0.5s',
                  }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div>
              <p className="font-cinzel" style={{
                color: 'rgba(245,237,214,0.6)', fontSize: '0.6rem',
                letterSpacing: '0.35em', marginBottom: '12px',
              }}>
                DEPARTMENTS
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {c.departments?.map((d, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 14px',
                    background: `${c.color}08`,
                    border: `1px solid ${c.color}20`,
                    borderRadius: '6px',
                    transition: 'all 0.5s',
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: c.color, flexShrink: 0,
                      boxShadow: `0 0 8px ${c.color}`,
                    }} />
                    <span style={{
                      color: '#F5EDD6', fontSize: '0.8rem',
                      fontFamily: 'Arial, sans-serif',
                    }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="hidden md:flex w-[300px] lg:w-[360px] flex-shrink-0 flex-col items-center justify-center gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '1/1' }}>
              <Image
                src={`/image/hut/${activeIdx + 1}.jpeg`}
                alt={`Hut - ${c.english}`}
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
            <p className="font-cinzel text-base font-bold tracking-[0.2em] text-center transition-colors duration-500" style={{ color: c.color }}>
              Hut - {c.english}
            </p>
          </div>
        </div>
      </div>
    </div>

        {/* ── Progress bar (bottom) ── */}
        <div style={{
          position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '14px', zIndex: 10,
        }}>
          <div style={{ width: '100px', height: '2px', background: 'rgba(245,237,214,0.1)', borderRadius: '1px' }}>
            <div style={{
              height: '100%', borderRadius: '1px',
              background: c.color, transition: 'width 0.5s, background 0.5s',
              width: `${((activeIdx + 1) / 7) * 100}%`,
              boxShadow: `0 0 10px ${c.color}`,
            }} />
          </div>
          <span className="font-cinzel" style={{
            color: 'rgba(245,237,214,0.35)', fontSize: '0.6rem', letterSpacing: '0.3em',
          }}>
            {activeIdx + 1} / 7
          </span>
        </div>

      </div>
    </section>
  );
}
