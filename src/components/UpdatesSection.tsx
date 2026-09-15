import React, { useState } from 'react';
import { LATEST_UPDATES } from '../data';
import { UpdateArticle } from '../types';
import { X, Clock, ArrowRight } from 'lucide-react';

export const UpdatesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<UpdateArticle | null>(null);

  return (
    <section id="updates" className="py-20 md:py-28 px-6 md:px-12 max-w-[1728px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold tracking-tight text-[#1B1B1B]">
          Latest Updates
        </h2>
        <button
          onClick={() => setSelectedArticle(LATEST_UPDATES[0])}
          className="text-xs font-bold uppercase tracking-wider border-b border-black text-[#1B1B1B] pb-1 hover:text-[#FF416C] hover:border-[#FF416C] transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LATEST_UPDATES.map((article) => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group cursor-pointer flex flex-col"
          >
            {/* Image Container with high rounded corners */}
            <div className="w-full h-[360px] sm:h-[420px] md:h-[450px] rounded-[36px] md:rounded-[40px] mb-6 overflow-hidden shadow-xl border border-black/5 bg-[#EBE9E4] relative">
              <img
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={article.image}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Metadata */}
            <p className="text-xs font-semibold text-[#7E7A73] mb-2 uppercase tracking-wider">
              {article.tag} • {article.date}
            </p>

            {/* Title */}
            <h4 className="text-xl font-bold text-[#1B1B1B] group-hover:text-black transition-colors leading-snug">
              {article.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] rounded-[32px] border border-black/10 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1B1B1B] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 text-xs text-[#7E7A73] mb-4 uppercase tracking-wider font-semibold">
              <span className="bg-black/5 px-2.5 py-1 rounded-full text-black">
                {selectedArticle.tag}
              </span>
              <span>{selectedArticle.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {selectedArticle.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1B1B] mb-6 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="w-full h-[260px] rounded-2xl overflow-hidden mb-6 shadow-sm border border-black/5">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-[16px] text-[#1B1B1B]/80 leading-relaxed mb-6 font-normal">
              {selectedArticle.summary}
            </p>

            <p className="text-[14px] text-[#7E7A73] leading-relaxed mb-8">
              At Lumio, we continue to engineer foundational infrastructure that equips enterprise brand and creative leads with predictable, autonomous guardrails. As generative models accelerate content production velocity, the necessity of automated governance and cross-channel coherence has transitioned from an operational bonus to an absolute prerequisite.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
