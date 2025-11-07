import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#E3E3E3]">
      <div className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-[#212121] text-3xl md:text-4xl font-serif" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia' }}>
            Clarity, Confidence, Sophistication
          </h2>
          <p className="mt-6 text-[#212121]/80 leading-relaxed" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>
            LUMVERE crafts sunglasses with a pursuit of architectural simplicity and tactile luxury. Each pair
            balances proportion and restraint, with materials selected for their endurance and comfort. Subtle
            signatures—like the triangular geometry and refined curvature—speak softly, yet unmistakably.
          </p>
          <p className="mt-4 text-[#212121]/80 leading-relaxed" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>
            Designed for those who value precision and quiet confidence.
          </p>
        </div>

        {/* Right: Pattern / image */}
        <div className="relative h-80 md:h-[28rem]">
          <div className="absolute inset-0 bg-[#f5f5f5] shadow-[inset_0_0_0_1px_rgba(33,33,33,0.08)]" />
          {/* Embossed pattern */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none">
            <defs>
              <pattern id="tri2" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 8L4 0L8 8Z" fill="#EDEDED" />
              </pattern>
              <filter id="emboss" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset dx="0.5" dy="0.5"/>
                <feGaussianBlur stdDeviation="0.4"/>
                <feComposite operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.13  0 0 0 0 0.13  0 0 0 0 0.13  0 0 0 0.35 0"/>
              </filter>
            </defs>
            <rect width="100" height="100" fill="url(#tri2)" filter="url(#emboss)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#212121]/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default About;
