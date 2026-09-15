import React from 'react';
import { TRUST_COMPANIES } from '../data';

export const TrustMarquee: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-6 max-w-[1728px] mx-auto flex flex-col items-center border-t border-[#D9D7D0]/50 relative z-0 overflow-hidden">
      <div className="w-full marquee-container relative">
        {/* Subtle edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10 pointer-events-none" />

        <div className="marquee-content animate-marquee flex gap-[60px] md:gap-[110px] items-center text-[#7E7A73]">
          {/* Double array for seamless loop */}
          {[...TRUST_COMPANIES, ...TRUST_COMPANIES].map((company, index) => (
            <span
              key={`${company}-${index}`}
              className="text-xl md:text-2xl lg:text-[28px] font-semibold tracking-[-0.02em] hover:text-[#1B1B1B] transition-colors duration-300 cursor-default select-none whitespace-nowrap"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
