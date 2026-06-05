export default function ThankYouSection() {
  return (
    <section className="relative w-full bg-[#010103] text-[#F5EDD6] py-24 md:py-32 overflow-hidden">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(201,168,76,0.06),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Decorative top ornament */}
        <div className="flex justify-center mb-8">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="12" x2="22" y2="12" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            <circle cx="30" cy="12" r="4" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="30" cy="12" r="1.5" fill="#C9A84C" opacity="0.4" />
            <line x1="38" y1="12" x2="60" y2="12" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        {/* Namaste symbol */}
        <p className="font-cinzel text-xs tracking-[0.5em] text-[#C9A84C] mb-6">NAMASTE</p>

        {/* Main heading */}
        <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
          Thank You for Visiting
        </h2>

        {/* Message */}
        <p className="font-cormorant text-xl md:text-2xl text-[#F5EDD6]/70 leading-relaxed mb-6 italic">
          &ldquo;We honour the light within you. May your journey toward healing, balance, and inner harmony be filled with strength, clarity, and peace.&rdquo;
        </p>

        <p className="font-cormorant text-lg text-[#F5EDD6]/50 leading-relaxed mb-10">
          At Sapta Chakra Integrative Naturopathy &amp; Wellness Hospital, every step you take toward wellness is a step we walk together. We are deeply grateful for your trust in our holistic healing approach.
        </p>

        {/* Divider */}
        <div className="mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent mb-10" />

        {/* Contact info */}
        <div className="space-y-2">
          <p className="font-cinzel text-sm tracking-[0.3em] text-[#C9A84C]/70">
            SAPTA CHAKRA WELLNESS
          </p>
          <p className="font-cormorant text-base text-[#F5EDD6]/40">
            Integrative Naturopathy &amp; Wellness Hospital
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="flex justify-center mt-12">
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="8" x2="30" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
            <path d="M37 8l3-4 3 4-3 4z" fill="#C9A84C" opacity="0.3" />
            <line x1="50" y1="8" x2="80" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

      </div>
    </section>
  );
}
