import React from 'react';
import { motion } from 'framer-motion';

const Craftsmanship = () => {
  return (
    <section id="craft" className="relative bg-[#E3E3E3]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[22rem] md:h-[28rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1520975693416-717cd0eacf6b?q=80&w=1600&auto=format&fit=crop"
              alt="Lenses macro"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#212121]/50 via-transparent to-transparent" />
            {/* Subtle pattern */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-30 mix-blend-multiply" preserveAspectRatio="none">
              <defs>
                <pattern id="tri3" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M0 10L5 0L10 10Z" fill="#E3E3E3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#tri3)" />
            </svg>
          </div>

          <div>
            <h3 className="text-[#212121] text-3xl md:text-4xl font-serif" style={{ fontFamily: 'Playfair Display, ui-serif, Georgia' }}>Craftsmanship</h3>
            <p className="mt-6 text-[#212121]/80 leading-relaxed" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>
              Each LUMVERE frame is hand-finished with meticulous attention to balance and fit. Premium acetates and
              surgical-grade metals are matched to lenses with exceptional optical clarity, ensuring true color and
              reduced glare in any light.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {['Optical Clarity', 'Balanced Weight', 'Engineered Fit'].map((item) => (
                <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <div className="text-[#D4AF37] text-2xl">▲</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[#212121]/70" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>{item}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
