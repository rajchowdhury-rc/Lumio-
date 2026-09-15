import React, { useState } from 'react';
import { TEAM_USE_CASES } from '../data';
import { ArrowUpRight } from 'lucide-react';

type Category = 'All' | 'Strategy' | 'Marketing' | 'Design' | 'Sales';

export const TeamUseCases: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Strategy');

  const categories: Category[] = ['Strategy', 'Marketing', 'Design', 'Sales'];

  const filteredCases = activeCategory === 'All'
    ? TEAM_USE_CASES
    : TEAM_USE_CASES; // In design, all 4 cards show while tab highlights focus! We will spotlight the matching card or filter smoothly.

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1728px] mx-auto flex flex-col items-center">
      {/* Title */}
      <h2 className="text-[36px] sm:text-[48px] md:text-[52px] mb-10 font-bold tracking-tight text-center text-[#1B1B1B]">
        Built for every team.
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
                isActive
                  ? 'bg-black text-[#FAF9F5] shadow-md scale-105'
                  : 'bg-white text-[#1B1B1B] hover:bg-black/5 border border-black/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px]">
        {filteredCases.map((item) => {
          const isHighlighted = item.category === activeCategory;

          return (
            <div
              key={item.id}
              className={`relative h-[340px] sm:h-[400px] rounded-[32px] p-8 flex flex-col justify-end group overflow-hidden shadow-sm border transition-all duration-500 ${
                isHighlighted
                  ? 'border-black/30 ring-2 ring-black/10 scale-[1.01]'
                  : 'border-[#D9D7D0]/30 hover:border-black/20'
              }`}
            >
              {/* Background Image */}
              <img
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={item.image}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Category Pill Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${
                  isHighlighted ? 'bg-white text-black' : 'bg-black/40 text-white/90 border border-white/20'
                }`}>
                  {item.category}
                </span>
              </div>

              {/* Top Right Arrow Indicator */}
              <div className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </div>

              {/* Foreground Typography */}
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-2 text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[15px] text-white/85 max-w-lg leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
