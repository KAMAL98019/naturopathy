import Image from 'next/image';

const facilities = [
  {
    title: 'OPD',
    desc: 'Modern outpatient department equipped with advanced diagnostic and consultation rooms for comprehensive wellness assessments.',
    image: '/image/opdhall.jpg',
  },
  {
    title: 'Conference Hall',
    desc: 'A spacious, elegantly designed hall for wellness seminars, corporate health programs, and community healing workshops.',
    image: '/image/conferencehall.avif',
  },
  {
    title: 'Barefoot Walking Trails',
    desc: 'Experience natural reflexology and grounding on our specialized walking trails, designed to connect you directly with the earth.',
    image: '/image/walk.jpeg',
  },
];

export default function FacilitiesSection() {
  return (
    <section className="relative w-full bg-[#010103] text-[#F5EDD6]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 py-20 md:py-28">

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
              <span className="text-xs">+</span>
            </div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C9A84C]">OUR FACILITIES</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight">
            World-Class Wellness <br className="hidden md:block" /> Infrastructure
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-[#C9A84C]/15 transition-all duration-500 hover:border-[#C9A84C]/40"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-[#010103]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 -mt-8 z-10">
                <h3 className="font-cinzel text-xl md:text-2xl text-[#F5EDD6] mb-3">
                  {facility.title}
                </h3>
                <p className="font-cormorant text-[#F5EDD6]/65 text-base leading-relaxed">
                  {facility.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/30 to-[#C9A84C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
