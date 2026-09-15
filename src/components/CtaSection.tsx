import React from 'react';

interface CtaSectionProps {
  onOpenDemoModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="py-28 md:py-44 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Monogram Badge */}
          <div className="w-12 h-12 rounded-full border border-[#1B1B1B] flex items-center justify-center mb-10 transition-transform hover:scale-105 duration-300">
            <span className="text-[#1B1B1B] font-bold text-xl leading-none">L</span>
          </div>

          {/* Display Headline */}
          <h2 className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[86px] font-bold text-[#1B1B1B] tracking-[-0.04em] leading-[1.04] mb-12 max-w-4xl text-balance">
            Experience the future of brand intelligence
          </h2>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <button
              onClick={onOpenDemoModal}
              className="bg-transparent border border-[#1B1B1B]/40 text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white transition-all duration-300 shrink-0 flex items-center px-7 text-[11px] h-[42px] font-bold uppercase tracking-widest rounded-full cursor-pointer hover:shadow-lg active:scale-95"
            >
              Schedule a call
            </button>
            <button
              onClick={onOpenDemoModal}
              className="bg-white border border-[#D9D7D0] text-[#1B1B1B] hover:bg-[#FAF9F5] transition-all duration-300 shrink-0 flex items-center px-7 text-[11px] h-[42px] font-bold uppercase tracking-widest rounded-full shadow-xs cursor-pointer hover:border-[#1B1B1B] active:scale-95"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
