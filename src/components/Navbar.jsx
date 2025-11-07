import React from 'react';

const Logo = () => {
  return (
    <div className="inline-flex items-center select-none">
      {/* Stylized L with a subtle curved accent */}
      <svg
        aria-hidden
        width="28"
        height="28"
        viewBox="0 0 28 28"
        className="mr-2"
      >
        <path d="M6 3v19h15" fill="none" stroke="#212121" strokeWidth="2.5" strokeLinecap="round" />
        {/* Curved accent top-left */}
        <path d="M6 6c0-2.2 2-3 3.4-3" fill="none" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span
        className="tracking-[0.35em] text-[0.95rem] md:text-[1.05rem] font-semibold text-[#212121]"
        style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
      >
        LUM
        <span className="inline-block align-middle mx-1" aria-label="V as triangle">
          <svg width="10" height="12" viewBox="0 0 10 12">
            <path d="M5 12L10 0H0z" fill="#212121" />
          </svg>
        </span>
        ERE
      </span>
    </div>
  );
};

const Navbar = () => {
  const navItems = ['Home', 'Collection', 'About', 'Contact'];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left spacer to keep logo centered on larger screens */}
          <nav className="hidden md:flex gap-8 text-[#212121]/70 text-sm uppercase tracking-widest">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Centered Logo */}
          <a href="#home" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Logo />
          </a>

          {/* Right side minimal action */}
          <div className="w-20 md:w-40 flex justify-end">
            <button className="text-xs md:text-sm uppercase tracking-widest text-[#212121] hover:text-[#D4AF37] transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
