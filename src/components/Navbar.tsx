import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center px-4 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[720px] flex items-center justify-between bg-[#151515]/95 backdrop-blur-2xl rounded-full px-2 py-2 shadow-2xl border border-white/10 h-[56px] transition-all duration-300">
        <div className="flex items-center gap-7 pl-2">
          {/* Brand Logo */}
          <a
            href="#"
            className="w-[34px] h-[34px] rounded-full border border-white/40 flex items-center justify-center shrink-0 hover:border-white transition-colors"
          >
            <span className="text-[#FAF9F5] font-bold text-sm leading-none tracking-tight">L</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('brand-os')}
              className="text-[12px] font-semibold tracking-wider uppercase text-[#FAF9F5]/70 hover:text-white transition-colors cursor-pointer"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('lumio-studio')}
              className="text-[12px] font-semibold tracking-wider uppercase text-[#FAF9F5]/70 hover:text-white transition-colors cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="text-[12px] font-semibold tracking-wider uppercase text-[#FAF9F5]/70 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('updates')}
              className="text-[12px] font-semibold tracking-wider uppercase text-[#FAF9F5]/70 hover:text-white transition-colors cursor-pointer"
            >
              Blog
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDemoModal}
            className="rounded-full bg-[#FAF9F5] text-[#151515] hover:bg-white transition-all duration-300 shrink-0 flex items-center px-4 text-[10px] h-[34px] font-bold uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Book a demo
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 w-[90%] max-w-[360px] bg-[#151515] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 text-center md:hidden animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => scrollToSection('brand-os')}
            className="text-[13px] font-medium text-white/80 hover:text-white py-2 border-b border-white/5 text-left"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection('lumio-studio')}
            className="text-[13px] font-medium text-white/80 hover:text-white py-2 border-b border-white/5 text-left"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection('manifesto')}
            className="text-[13px] font-medium text-white/80 hover:text-white py-2 border-b border-white/5 text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('updates')}
            className="text-[13px] font-medium text-white/80 hover:text-white py-2 text-left"
          >
            Blog
          </button>
        </div>
      )}
    </header>
  );
};
