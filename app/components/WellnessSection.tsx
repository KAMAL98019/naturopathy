import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: 'Personalized Wellness Assessment',
    desc: 'Every healing journey begins with a comprehensive consultation where our wellness experts evaluate your lifestyle, health concerns, energy balance, and wellness goals to understand your unique needs.',
  },
  {
    num: '02',
    title: 'Chakra & Health Analysis',
    desc: 'Using our integrated wellness approach, we identify areas of imbalance across the body, mind, emotions, and energy centers to create a holistic healing roadmap.',
  },
  {
    num: '03',
    title: 'Customized Healing Programs',
    desc: 'Receive a personalized wellness plan combining naturopathy, homeopathy, yoga therapy, therapeutic nutrition, hydrotherapy, meditation, and chakra-based healing practices tailored to your journey.',
  },
  {
    num: '04',
    title: 'Transformation & Lifelong Wellbeing',
    desc: 'Through guided therapies, wellness coaching, and continuous support, we help you achieve lasting balance, vitality, inner harmony, and sustainable healthy living.',
  },
];

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 22c-7 0-12 4-12 8v2h24v-2c0-4-5-8-12-8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.4" />
        <path d="M14 8a8 8 0 0112 0" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
    title: 'Homeopathy Ayurveda',
    desc: 'Experience genuine Homeopathy treatments rooted in centuries of tradition',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6c-4 4-12 10-12 18a12 12 0 0024 0c0-8-8-14-12-18z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 14c-2 2-6 5-6 10a6 6 0 0012 0c0-5-4-8-6-10z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="20" cy="24" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: 'Natural Healing Methods',
    desc: 'We use only natural, herbal remedies and traditional Homeopathy techniques',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="17" x2="14" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="17" x2="26" y2="24" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    title: 'Expert Practitioners',
    desc: 'Our services blend therapeutic treatments with lifestyle guidance',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28c0-8 4-16 10-20c6 4 10 12 10 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 28c0-5 2.5-10 6-14c3.5 4 6 9 6 14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="20" cy="22" r="1" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: 'Natural Ingredients',
    desc: 'We use only natural, herbal remedies and techniques, promoting safe healing',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 8c0 6-6 12-12 12c6 0 12 6 12 12c0-6 6-12 12-12c-6 0-12-6-12-12z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Serene Environment',
    desc: 'Our therapy will be done in chakara hut with pleasant environment',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
    title: 'Proven Results',
    desc: 'With a 99% customer satisfaction rate, our clients consistently leave feeling revitalized',
  },
];

const revenueStreams = [
  {
    title: 'Inpatient Naturopathy Treatments',
    desc: 'Comprehensive, immersive healing experiences at our facility with personalized care and continuous support.',
  },
  {
    title: 'Outpatient Consultations',
    desc: 'Expert guidance and natural remedies tailored to your daily life, focusing on sustainable wellness goals.',
  },
  {
    title: 'Wellness Retreats',
    desc: 'Rejuvenating getaways designed to restore harmony to your mind, body, and spirit in a serene environment.',
  },
  {
    title: 'Corporate Wellness Programs',
    desc: 'Holistic health solutions promoting productivity, stress relief, and wellbeing for corporate teams.',
  },
  {
    title: 'Organic Food Products',
    desc: 'Pure, ethically sourced nutritional products and supplements to support your natural healing journey.',
  },
  {
    title: 'Medical Juice Therapy Programs',
    desc: 'Targeted nutritional detoxification and cellular healing through specialized, guided juice fasting.',
  },
  {
    title: 'Online Wellness Courses',
    desc: 'Accessible digital programs and workshops to guide your holistic health journey from anywhere in the world.',
  },
];

export default function WellnessSection() {
  return (
    <section className="relative w-full bg-[#010103] text-[#F5EDD6]">

      {/* ── PART 1: Path to Wellness Steps ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
              <span className="text-xs">+</span>
            </div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">OUR PROCESS</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight">
            Your Path to Complete Wellness<br className="hidden md:block" /> and Inner Balance
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative border border-[#C9A84C]/15 rounded-lg p-6 md:p-7 transition-all duration-500 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/[0.03]"
            >
              {/* Number */}
              <span className="font-cinzel text-4xl md:text-5xl font-bold text-[#C9A84C]/20 block mb-4 transition-colors duration-500 group-hover:text-[#C9A84C]/35">
                {step.num}
              </span>
              {/* Title */}
              <h3 className="font-cinzel text-lg md:text-xl text-[#F5EDD6] mb-3 leading-snug">
                {step.title}
              </h3>
              {/* Description */}
              <p className="font-cormorant text-[#F5EDD6]/65 text-base leading-relaxed">
                {step.desc}
              </p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/30 to-[#C9A84C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* ── PART 2: Why Choose Us ── */}
      <div className="relative w-full py-20 md:py-28 overflow-hidden">
        {/* Background image */}
        <Image
          src="/image/about/lengthcontainer.png"
          alt="Wellness background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#010103]/80" />
        {/* Top & bottom gradient fade into the dark bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010103] via-transparent to-[#010103]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
                <span className="text-xs">+</span>
              </div>
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">WHY CHOOSE US</span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight">
              The Ultimate Ayush Wellness<br className="hidden md:block" /> Experience
            </h2>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10 rounded-xl overflow-hidden">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-[#010103]/70 backdrop-blur-md p-8 md:p-10 text-center flex flex-col items-center gap-4 transition-all duration-500 hover:bg-[#010103]/50"
              >
                {/* Icon */}
                <div className="text-[#C9A84C] mb-1">
                  {feat.icon}
                </div>
                {/* Title */}
                <h3 className="font-cinzel text-lg text-[#F5EDD6]">
                  {feat.title}
                </h3>
                {/* Description */}
                <p className="font-cormorant text-[#F5EDD6]/65 text-base leading-relaxed max-w-[280px]">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 3: Revenue Streams ── */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
              <span className="text-xs">+</span>
            </div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">OUR OFFERINGS</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight">
            Revenue Streams <br className="hidden md:block" /> & Holistic Services
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {revenueStreams.map((stream, i) => (
            <div
              key={i}
              className="group relative border border-[#C9A84C]/15 bg-[#010103] rounded-xl p-8 transition-all duration-500 hover:border-[#C9A84C]/50 hover:-translate-y-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-cinzel text-2xl font-bold text-[#C9A84C]/50 transition-colors duration-500 group-hover:text-[#C9A84C]">
                  0{i + 1}
                </span>
                <h3 className="font-cinzel text-xl text-[#F5EDD6] mt-1">
                  {stream.title}
                </h3>
              </div>
              <p className="font-cormorant text-[#F5EDD6]/65 text-base leading-relaxed pl-11">
                {stream.desc}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#C9A84C]/0 to-[#C9A84C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
