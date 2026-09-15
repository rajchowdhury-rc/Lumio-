/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { CreativeIntelligenceCollage } from './components/CreativeIntelligenceCollage';
import { Manifesto } from './components/Manifesto';
import { BrandOSSection } from './components/BrandOSSection';
import { LumioStudioSection } from './components/LumioStudioSection';
import { TeamUseCases } from './components/TeamUseCases';
import { Testimonial } from './components/Testimonial';
import { UpdatesSection } from './components/UpdatesSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1B1B1B] selection:bg-black selection:text-white flex flex-col font-sans">
      {/* Floating Navigation Header */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Strip with Infinite Marquee */}
        <TrustMarquee />

        {/* 3. Floating Visual Collage */}
        <CreativeIntelligenceCollage />

        {/* 4. Manifesto Section */}
        <Manifesto />

        {/* 5. Brand OS Section */}
        <BrandOSSection />

        {/* 6. Lumio Studio Section */}
        <LumioStudioSection />

        {/* 7. Team Use Cases */}
        <TeamUseCases />

        {/* 8. Testimonial Quote */}
        <Testimonial />

        {/* 9. Latest Updates */}
        <UpdatesSection />

        {/* 10. Call to Action */}
        <CtaSection onOpenDemoModal={() => setDemoModalOpen(true)} />
      </main>

      {/* 11. Dark Footer */}
      <Footer />

      {/* Demo / Consultation Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
