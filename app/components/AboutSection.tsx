import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#010103] text-[#F5EDD6] pt-24 pb-0">
      {/* Container for About Us */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Images */}
        <div className="relative w-full h-[500px] lg:h-[600px]">
          <Image src="/image/about/Container.png" alt="About Us Healing" fill className="object-contain" />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
              <span className="text-xs">+</span>
            </div>
            <span className="font-cinzel text-sm tracking-widest text-[#C9A84C]">ABOUT US</span>
          </div>

          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Our Mission and Vision
          </h2>

          <div className="font-cormorant text-lg text-[#F5EDD6]/70 space-y-6 mb-10">
            <p>
              At Sapta Chakra Integrative Naturopathy & Wellness Hospital, we believe true healing extends beyond treating symptoms. Our unique wellness philosophy combines naturopathy, yoga, homeopathy, and chakra-based healing to restore balance across the body, mind, emotions, and spirit.
            </p>
            <p>
              Designed around the wisdom of the Seven Chakras, our healing spaces and therapies guide every individual toward complete wellbeing through homeopathy, preventive, and restorative healthcare.
            </p>
          </div>

          {/* Bullet points */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-cinzel text-xl mb-2 text-[#C9A84C]">Seven Chakra Wellness Model</h3>
                <p className="font-cormorant text-[#F5EDD6]/60 leading-relaxed">
                  Experience a unique healthcare approach where each chakra represents a specialized healing pathway focused on physical vitality, emotional balance, mental clarity, and spiritual growth.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] bg-[#C9A84C]/10">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-cinzel text-xl mb-2 text-[#C9A84C]">Integrative Homeopathy Healthcare</h3>
                <p className="font-cormorant text-[#F5EDD6]/60 leading-relaxed">
                  Our multidisciplinary wellness programs combine naturopathy, yoga therapy, homeopathy, meditation, therapeutic nutrition, and hydrotherapy to support long-term health transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] mt-24 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image src="/image/about/lengthcontainer.png" alt="Wellness quote background" fill className="object-cover" />

        {/* Dark Overlay to match theme */}
        <div className="absolute inset-0 bg-[#010103]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010103] via-transparent to-[#010103]" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1)_0%,transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center text-[#C9A84C] opacity-80">
            {/* Quote Icon */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11L8 15H11V19H5V15L7 11H5V7H11V11H10ZM19 11L17 15H20V19H14V15L16 11H14V7H20V11H19Z" fill="currentColor" />
            </svg>
          </div>
          <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-[#F5EDD6] italic leading-relaxed">
            "True healing begins when the body finds strength, the mind finds clarity, and the spirit finds harmony."
          </p>
        </div>
      </div>
    </section>
  );
}
