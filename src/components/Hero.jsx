import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#E3E3E3] overflow-hidden">
      {/* Background cinematic image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(20%)',
        }}
      />

      {/* Tone-on-tone triangle tessellation overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="tri" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0 10L5 0L10 10Z" fill="#E3E3E3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#tri)" />
        </svg>
      </div>

      {/* Subtle gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/60 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-[#212121] text-[3.2rem] leading-[1.05] md:text-[4.2rem] font-serif"
          style={{ fontFamily: 'Playfair Display, ui-serif, Georgia' }}
        >
          Quietly Luxurious
          <br />
          Modern Precision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }}
          className="mt-6 max-w-xl text-[#212121]/80 text-base md:text-lg"
          style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}
        >
          Elevated eyewear for those who see with clarity and move with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
          className="mt-10 flex gap-6"
        >
          <a href="#collection" className="px-8 py-3 border border-[#212121] text-[#212121] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs">
            Explore Collection
          </a>
          <a href="#about" className="px-8 py-3 text-[#212121]/80 hover:text-[#212121] transition-colors uppercase tracking-widest text-xs">
            About
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-16"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-[#212121]" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>
            True Light. True Vision.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
