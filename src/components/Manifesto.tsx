import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 md:py-36 lg:py-48 px-6 md:px-12 max-w-[1728px] mx-auto relative flex flex-col items-center text-center overflow-hidden">
      {/* Decorative Vector Orbital Wireframe */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[4%] md:right-[10%] w-[320px] md:w-[460px] h-[320px] md:h-[460px] opacity-15 pointer-events-none select-none">
        <svg
          className="w-full h-full"
          fill="none"
          stroke="url(#manifesto-grad)"
          strokeWidth="0.75"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="manifesto-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF416C" />
              <stop offset="100%" stopColor="#FF4B2B" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" />
          <ellipse cx="50" cy="50" rx="24" ry="48" />
          <ellipse cx="50" cy="50" rx="48" ry="24" />
          <line x1="2" y1="50" x2="98" y2="50" />
          <line x1="50" y1="2" x2="50" y2="98" />
        </svg>
      </div>

      {/* Editorial Statement */}
      <h2 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] font-normal leading-[1.18] text-balance tracking-tight text-[#1B1B1B] relative z-10 max-w-[1060px]">
        As <span className="font-medium text-black">AI agents</span> expand across the enterprise, the need for a singular source of truth has never been more critical. Lumio unifies your strategy.
      </h2>
    </section>
  );
};
