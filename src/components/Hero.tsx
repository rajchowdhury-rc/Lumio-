import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-[140px] md:pt-[190px] pb-[60px] md:pb-[90px] px-6 md:px-12 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible">
      {/* Editorial Headline */}
      <h1 className="text-[44px] sm:text-[62px] md:text-[84px] lg:text-[96px] font-bold text-[#1B1B1B] tracking-[-0.04em] leading-[1.02] max-w-5xl mb-10 text-balance">
        Bring every team into focus
      </h1>

      {/* Hero Showcase Frame */}
      <div className="w-full max-w-[1440px] bg-[#EBE9E4] overflow-hidden shadow-2xl relative z-10 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] h-[360px] sm:h-[520px] md:h-[720px] lg:h-[800px] border border-black/5 group">
        <img
          alt="Vibrant abstract gradient artwork"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZfadtPwCaL7GcKGqde5_m46RsgQuGHyvmFJKZWsW5jfFqnNirmZPOdmGitXGSosoyvd2ARpUMWjjL8IEKefG6Ke85eAGiFMBHIfFA02wVwfcf75CnI7Zlw-OjEat9LRRuqHbfAWLeBZeTEUbVQRAoPIjSlWUOZmW8R32Bk0XUblejaVIpv6gSC4cngTCtp7tXSmIz5jJIUVZIPoKSyGDhck_ulpZZnIfCQmxw2h73JqSgD__x2T1wiMf4Q_TQCvHgDTzQ3sY3JjqV"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
