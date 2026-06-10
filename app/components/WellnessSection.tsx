import Image from 'next/image';
import TherapiesParallax from './TherapiesParallax';

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

const iconStyle: React.CSSProperties = {
  filter: 'invert(72%) sepia(50%) saturate(500%) hue-rotate(5deg) brightness(90%) contrast(90%)',
  mixBlendMode: 'screen',
};

const features = [
  {
    iconSrc: '/image/icons/wellness/homeopathyhealing.png',
    title: 'Classical Homeopathy Healing',
    desc: 'Experience genuine Homeopathy treatments rooted in centuries of tradition, using herbal remedies and traditional techniques',
  },
  {
    iconSrc: '/image/icons/wellness/wellnessexpert.png',
    title: 'Certified Wellness Experts',
    desc: 'Our seasoned doctors integrate holistic therapies with personalized lifestyle coaching',
  },
  {
    iconSrc: '/image/icons/wellness/homeopathyingredients.png',
    title: 'Homeopathy Ingredients',
    desc: 'We use only Homeopathy, herbal remedies and techniques, promoting safe healing',
  },
  {
    iconSrc: '/image/icons/wellness/sereneenvironment.png',
    title: 'Serene Environment',
    desc: 'Our therapy will be done in chakara hut with pleasant environment',
  },
  {
    iconSrc: '/image/icons/wellness/wellnessexpert.png',
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
    desc: 'Expert guidance and Homeopathy remedies tailored to your daily life, focusing on sustainable wellness goals.',
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
    desc: 'Pure, ethically sourced nutritional products and supplements to support your Homeopathy healing journey.',
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

          {/* Featured layout: hero card + grid */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left: Featured hero card */}
            <div className="lg:w-[40%] group relative rounded-2xl overflow-hidden p-10 md:p-12 flex flex-col justify-between min-h-[400px]"
              style={{
                background: 'linear-gradient(160deg, rgba(201,168,76,0.08) 0%, #010103 50%, rgba(201,168,76,0.04) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              <div>
                <span className="font-cinzel text-6xl md:text-7xl font-bold text-[#C9A84C]/15 block mb-4">01</span>
                <div className="mb-6"><Image src={features[0].iconSrc} alt={features[0].title} width={160} height={160} style={iconStyle} /></div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-[#F5EDD6] mb-4 leading-tight">{features[0].title}</h3>
                <p className="font-cormorant text-lg text-[#F5EDD6]/70 leading-relaxed">{features[0].desc}</p>
              </div>
              <div className="mt-8 h-[1px] w-full" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                style={{ background: 'radial-gradient(circle at 100% 0%, rgba(201,168,76,0.2), transparent 70%)' }}
              />
            </div>

            {/* Right: 2x2 grid */}
            <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.slice(1).map((feat, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: '#010103',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-cinzel text-3xl font-bold text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors duration-500">
                      0{i + 2}
                    </span>
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <Image src={feat.iconSrc} alt={feat.title} width={80} height={80} style={iconStyle} />
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="font-cinzel text-lg md:text-xl text-[#F5EDD6] mb-3">{feat.title}</h3>
                  {/* Description */}
                  <p className="font-cormorant text-[#F5EDD6]/60 text-base leading-relaxed">{feat.desc}</p>
                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── PART 2.5: Therapies Parallax ── */}
      <TherapiesParallax />

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
