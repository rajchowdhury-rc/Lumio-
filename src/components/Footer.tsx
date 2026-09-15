import React from 'react';
import { Share2, Globe, Layers } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151515] text-white pt-20 md:pt-28 pb-12 px-6 md:px-16 rounded-t-[44px] md:rounded-t-[64px] relative z-20 overflow-hidden">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-lg leading-none">L</span>
            </div>
            <p className="text-[14px] text-white/50 max-w-xs leading-relaxed">
              The operating system for modern creative teams. Empowering focus through intelligent brand management.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Share"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Global"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Integrations"
              >
                <Layers size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-[11px] font-bold">
              Product
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#brand-os">Platform</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#brand-os">Intelligence</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#lumio-studio">Studio</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#lumio-studio">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-[11px] font-bold">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#manifesto">About Us</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#">Careers</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#updates">Newsroom</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-[11px] font-bold">
              Resources
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#updates">Blog</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#">Documentation</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#">Community</a></li>
              <li><a className="text-[14px] text-white/60 hover:text-white transition-colors" href="#">Support</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} Lumio Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a className="text-[12px] text-white/40 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-[12px] text-white/40 hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="text-[12px] text-white/40 hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
