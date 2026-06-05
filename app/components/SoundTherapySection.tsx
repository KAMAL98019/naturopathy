'use client';
import { useState } from 'react';

const soundChakras = [
  {
    id: 1,
    name: 'Muladhara',
    english: 'Root Chakra',
    location: 'Base of the spine',
    theme: 'Safety, grounding, belonging',
    vowelTone: '"OOO" (deep, rounded)',
    bijaMantra: 'LAM',
    solfeggio: '396 Hz',
    focus: 'Heaviness in legs and feet',
    color: '#8B1A1A',
    cures: 'Physical strength, emotional security, stability, and deep connection to the earth. Helps overcome fear, anxiety, and feelings of insecurity.',
  },
  {
    id: 2,
    name: 'Svadhisthana',
    english: 'Sacral Chakra',
    location: 'Lower abdomen',
    theme: 'Flow, emotion, creativity',
    vowelTone: '"OOOH"',
    bijaMantra: 'VAM',
    solfeggio: '417 Hz',
    focus: 'Swaying hips, fluid movement',
    color: '#D2691E',
    cures: 'Emotional balance, creative expression, healthy relationships, and sensuality. Releases guilt, emotional trauma, and reproductive health imbalances.',
  },
  {
    id: 3,
    name: 'Manipura',
    english: 'Solar Plexus Chakra',
    location: 'Upper abdomen',
    theme: 'Confidence, clarity, personal power',
    vowelTone: '"OH"',
    bijaMantra: 'RAM',
    solfeggio: '528 Hz',
    focus: 'Warmth and steady brightness',
    color: '#DAA520',
    cures: 'Self-confidence, digestive health, personal willpower, and mental clarity. Addresses shame, low self-esteem, and metabolic disorders.',
  },
  {
    id: 4,
    name: 'Anahata',
    english: 'Heart Chakra',
    location: 'Centre of chest',
    theme: 'Love, compassion, coherence',
    vowelTone: '"AH"',
    bijaMantra: 'YAM',
    solfeggio: '639 Hz',
    focus: 'Spaciousness behind the sternum',
    color: '#2E8B57',
    cures: 'Compassion, emotional healing, forgiveness, and deeper connection with yourself and others. Supports cardiovascular health and immune function.',
  },
  {
    id: 5,
    name: 'Vishuddha',
    english: 'Throat Chakra',
    location: 'Throat and neck',
    theme: 'Expression, truth, listening',
    vowelTone: '"EEE"',
    bijaMantra: 'HAM',
    solfeggio: '741 Hz',
    focus: 'Cooling airflow in the throat',
    color: '#4682B4',
    cures: 'Authentic self-expression, thyroid balance, clear communication, and creative voice. Heals suppressed emotions and throat-related ailments.',
  },
  {
    id: 6,
    name: 'Ajna',
    english: 'Third Eye Chakra',
    location: 'Between the eyebrows',
    theme: 'Intuition, insight, clarity',
    vowelTone: '"AY" or "Mmm/NG" hum',
    bijaMantra: 'OM',
    solfeggio: '852 Hz',
    focus: 'Light and focus behind the brow',
    color: '#483D8B',
    cures: 'Intuitive awareness, mental clarity, improved focus, and spiritual insight. Alleviates headaches, insomnia, and hormonal imbalances.',
  },
  {
    id: 7,
    name: 'Sahasrara',
    english: 'Crown Chakra',
    location: 'Crown of head',
    theme: 'Spiritual connection, presence',
    vowelTone: '"OM" or breathy "S"',
    bijaMantra: 'OM',
    solfeggio: '963 Hz',
    focus: 'Expansive space above the head',
    color: '#7B2D8E',
    cures: 'Higher awareness, mindfulness, inner peace, and spiritual awakening. Supports nervous system balance and deep meditative states.',
  },
];

export default function SoundTherapySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const c = soundChakras[activeIdx];

  return (
    <section className="relative w-full bg-[#010103] text-[#F5EDD6] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
              <span className="text-xs">♪</span>
            </div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">SOUND THERAPY</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Discover the Healing Sounds<br className="hidden md:block" /> of the Seven Chakras
          </h2>
          <p className="font-cormorant text-lg md:text-xl text-[#F5EDD6]/60 max-w-3xl mx-auto leading-relaxed">
            Sound therapy uses sacred vibrations, seed mantras, singing bowls, and therapeutic frequencies to restore harmony across the body&apos;s seven energy centers. Each chakra resonates with a unique sound that helps release energetic blockages, promote deep relaxation, and support emotional, mental, and spiritual wellbeing.
          </p>
        </div>

        {/* Chakra selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {soundChakras.map((ch, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="font-cinzel text-xs tracking-wider px-4 py-2.5 rounded-full border transition-all duration-400 cursor-pointer"
              style={{
                borderColor: i === activeIdx ? ch.color : 'rgba(245,237,214,0.12)',
                background: i === activeIdx ? `${ch.color}20` : 'transparent',
                color: i === activeIdx ? '#F5EDD6' : 'rgba(245,237,214,0.4)',
                boxShadow: i === activeIdx ? `0 0 20px ${ch.color}30` : 'none',
              }}
            >
              {ch.english}
            </button>
          ))}
        </div>

        {/* Active chakra card */}
        <div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border transition-all duration-700"
          style={{ borderColor: `${c.color}30` }}
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${c.color}15, transparent 70%)`,
            }}
          />
          <div className="absolute inset-0 bg-[#010103]/60 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16">

            {/* Top row: Name + Frequency */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="font-cinzel text-xs tracking-[0.4em] mb-2 transition-colors duration-500" style={{ color: c.color }}>
                  CHAKRA {c.id} OF 7
                </p>
                <h3 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-[#F5EDD6] leading-tight">
                  {c.english}
                </h3>
                <p className="font-cormorant text-lg text-[#F5EDD6]/60 italic mt-1">
                  {c.name} — {c.location}
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-cinzel text-4xl md:text-5xl font-bold transition-colors duration-500" style={{ color: c.color, opacity: 0.7 }}>
                  {c.solfeggio}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px mb-8 transition-all duration-700"
              style={{
                background: `linear-gradient(to right, ${c.color}, transparent)`,
                boxShadow: `0 0 8px ${c.color}30`,
              }}
            />

            {/* Theme */}
            <p className="font-cormorant text-xl md:text-2xl text-[#F5EDD6]/85 italic mb-10 leading-relaxed">
              &ldquo;{c.theme}&rdquo;
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Vowel Tone */}
              <div className="border rounded-lg p-5 transition-all duration-500" style={{ borderColor: `${c.color}25`, background: `${c.color}08` }}>
                <p className="font-cinzel text-[0.6rem] tracking-[0.3em] text-[#F5EDD6]/50 mb-2">VOWEL TONE</p>
                <p className="font-cormorant text-xl text-[#F5EDD6]">{c.vowelTone}</p>
              </div>
              {/* Bija Mantra */}
              <div className="border rounded-lg p-5 transition-all duration-500" style={{ borderColor: `${c.color}25`, background: `${c.color}08` }}>
                <p className="font-cinzel text-[0.6rem] tracking-[0.3em] text-[#F5EDD6]/50 mb-2">BIJA MANTRA</p>
                <p className="font-cinzel text-3xl font-bold transition-colors duration-500" style={{ color: c.color }}>{c.bijaMantra}</p>
              </div>
              {/* Meditation Focus */}
              <div className="border rounded-lg p-5 sm:col-span-2 lg:col-span-1 transition-all duration-500" style={{ borderColor: `${c.color}25`, background: `${c.color}08` }}>
                <p className="font-cinzel text-[0.6rem] tracking-[0.3em] text-[#F5EDD6]/50 mb-2">MEDITATION FOCUS</p>
                <p className="font-cormorant text-lg text-[#F5EDD6]/80">{c.focus}</p>
              </div>
            </div>

            {/* What it heals */}
            <div className="border rounded-lg p-6 md:p-8 transition-all duration-500" style={{ borderColor: `${c.color}20`, background: `${c.color}06` }}>
              <p className="font-cinzel text-[0.6rem] tracking-[0.3em] text-[#C9A84C] mb-3">WHAT THIS SOUND HEALS</p>
              <p className="font-cormorant text-lg md:text-xl text-[#F5EDD6]/85 leading-relaxed">
                {c.cures}
              </p>
            </div>

          </div>
        </div>

        {/* Bottom: all 7 chakra dots */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {soundChakras.map((ch, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="transition-all duration-400 rounded-full cursor-pointer border-none"
              style={{
                width: i === activeIdx ? 16 : 8,
                height: i === activeIdx ? 16 : 8,
                background: i === activeIdx ? ch.color : `${ch.color}40`,
                boxShadow: i === activeIdx ? `0 0 18px ${ch.color}` : 'none',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
