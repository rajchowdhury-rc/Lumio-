import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-[1240px] mx-auto flex flex-col items-center text-center">
      {/* Editorial Quotation */}
      <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[58px] leading-[1.14] tracking-tight text-[#1B1B1B] mb-14 text-balance max-w-[1040px] font-normal">
        &ldquo;Lumio was built with the desire to liberate creative teams from menial tasks, allowing them to focus on true strategic innovation.&rdquo;
      </h2>

      {/* Attribution Author Block */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#E9E8E4] overflow-hidden shadow-md border border-black/10 shrink-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_dQOYUXm-9ocUk-1cRA5ZyP6tu7OdWwNIU7SRhouWt3u89anzj3A5_pr7FGCCICOiz6a2FoSpC-bN53AYbiVQ-spgKPawBtGZtLq-9c6QyNclym7oEuOsCnQllJenEGuMkAeM3mwnTOLdgJakEE63ozCYcDA2l-C2EQnZiozAakUbDrwJG_jxTwrvV9I5p2oiVPXIDBv-rltdG9P0TX6X2OUHQcwckpskXXJEawplcI8ff_rzn1YnIDgrniF27Vjc0Lz4LKcazue9"
            alt="Alex Morgan"
          />
        </div>
        <div className="text-left">
          <p className="text-[15px] font-bold text-[#1B1B1B] leading-snug">
            Alex Morgan
          </p>
          <p className="text-[13px] text-[#7E7A73]">
            VP of Brand, Northline
          </p>
        </div>
      </div>
    </section>
  );
};
