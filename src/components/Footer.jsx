import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#212121] text-[#E3E3E3]">
      {/* Triangle watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="tri4" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M0 12L6 0L12 12Z" fill="#E3E3E3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#tri4)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center select-none">
              <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" className="mr-2">
                <path d="M6 3v19h15" fill="none" stroke="#E3E3E3" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 6c0-2.2 2-3 3.4-3" fill="none" stroke="#E3E3E3" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="tracking-[0.35em] text-sm font-semibold" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                LUM
                <span className="inline-block align-middle mx-1" aria-label="V as triangle">
                  <svg width="10" height="12" viewBox="0 0 10 12">
                    <path d="M5 12L10 0H0z" fill="#E3E3E3" />
                  </svg>
                </span>
                ERE
              </span>
            </div>
            <p className="mt-4 text-sm text-[#E3E3E3]/80" style={{ fontFamily: 'Tsukuhou Shogo Mincho OFL, ui-serif' }}>
              © {new Date().getFullYear()} LUMVERE. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[#D4AF37] hover:opacity-80 transition-opacity">Instagram</a>
            <a href="#" className="text-[#D4AF37] hover:opacity-80 transition-opacity">Pinterest</a>
            <a href="#" className="text-[#D4AF37] hover:opacity-80 transition-opacity">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
