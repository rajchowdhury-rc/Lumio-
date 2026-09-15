import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Send, Copy, Check } from 'lucide-react';
import { STUDIO_TEMPLATES } from '../data';

export const LumioStudioSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [promptText, setPromptText] = useState(STUDIO_TEMPLATES[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  const features = [
    {
      title: 'Automated Brand Alignment',
      description: 'Every asset generated is instantly vetted against your core brand identity and tone governance.'
    },
    {
      title: 'Contextual Layouts',
      description: "Intelligence that understands the medium, whether it's social, email newsletters, or digital press kits."
    },
    {
      title: 'Multi-Channel Distribution',
      description: 'Sync and deploy approved creative across all platforms and team workspaces simultaneously.'
    },
    {
      title: 'Predictive Analytics',
      description: 'Gain insights into how your visual assets and copy will perform before they go live.'
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowOutput(false);

    setTimeout(() => {
      setIsGenerating(false);
      setShowOutput(true);
    }, 900);
  };

  const handleSelectTemplate = (idx: number) => {
    setSelectedTemplateIndex(idx);
    setPromptText(STUDIO_TEMPLATES[idx].prompt);
    handleGenerate();
  };

  const handleCopy = () => {
    const currentTemplate = STUDIO_TEMPLATES[selectedTemplateIndex];
    navigator.clipboard?.writeText(
      `${currentTemplate.output.headline}\n\n${currentTemplate.output.body}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentOutput = STUDIO_TEMPLATES[selectedTemplateIndex].output;

  return (
    <section id="lumio-studio" className="py-20 md:py-28 px-6 md:px-12 max-w-[1728px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Text & Features */}
        <div className="flex flex-col justify-center h-full max-w-xl order-2 lg:order-1">
          <h3 className="text-[32px] sm:text-[40px] md:text-[44px] mb-10 font-bold tracking-tight text-[#1B1B1B] leading-[1.15]">
            Generate on-brand assets in seconds.
          </h3>

          <div className="relative pl-8 border-l-[3px] border-[#D9D7D0] space-y-9">
            {/* Active Highlight Line */}
            <div
              className="absolute left-[-3px] w-[3px] bg-gradient-to-b from-[#FF416C] to-[#FF4B2B] transition-all duration-300 rounded-full"
              style={{
                top: `${activeFeature * 25}%`,
                height: '25%'
              }}
            />

            {features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={feature.title}
                  onClick={() => setActiveFeature(idx)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2 text-[#1B1B1B]">
                    {feature.title}
                  </h4>
                  <p className="text-[15px] text-[#7E7A73] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Soft Gradient Frame with Studio UI */}
        <div className="bg-gradient-to-tr from-[#E0EAFC] to-[#CFDEF3] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] flex items-center justify-center relative overflow-hidden border border-[#D9D7D0]/30 shadow-inner order-1 lg:order-2">
          
          <div className="w-full max-w-lg bg-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/60 relative z-10 transition-all">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-[24px] h-[24px] rounded-full border border-black flex items-center justify-center shrink-0">
                  <span className="text-black font-bold text-[10px] leading-none">L</span>
                </div>
                <span className="text-xs font-bold text-[#7E7A73] tracking-wider uppercase">
                  LUMIO STUDIO
                </span>
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Engine Ready</span>
              </div>
            </div>

            {/* Template Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {STUDIO_TEMPLATES.map((tmpl, idx) => (
                <button
                  key={tmpl.id}
                  onClick={() => handleSelectTemplate(idx)}
                  className={`text-[11px] font-medium px-3 py-1 rounded-full transition-all cursor-pointer ${
                    selectedTemplateIndex === idx
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-black/5 text-[#7E7A73] hover:bg-black/10'
                  }`}
                >
                  {tmpl.label}
                </button>
              ))}
            </div>

            {/* Prompt Input Box */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 mb-4 border border-white/70 shadow-sm relative focus-within:border-black/30 transition-colors">
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                rows={3}
                className="w-full bg-transparent border-none text-[14px] text-[#1B1B1B] focus:outline-none resize-none leading-relaxed"
                placeholder="Describe the asset or copy you want to generate..."
              />
              
              <div className="flex items-center justify-between pt-2 mt-1 border-t border-black/5">
                <span className="text-[10px] uppercase tracking-wider text-[#7E7A73] font-semibold">
                  Audience: Global Enterprise
                </span>
                
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  title="Synthesize Output"
                >
                  {isGenerating ? (
                    <Sparkles className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Output Preview Container */}
            {isGenerating && (
              <div className="p-6 bg-white/40 rounded-xl border border-white/40 text-center animate-pulse flex flex-col items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-black border-t-transparent animate-spin" />
                <span className="text-xs text-[#7E7A73] font-medium">Validating voice guidelines & generating copy...</span>
              </div>
            )}

            {!isGenerating && showOutput && (
              <div className="bg-[#FAF9F5]/90 rounded-2xl p-5 border border-[#D9D7D0]/40 shadow-xs animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                      {currentOutput.toneScore}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="text-[11px] text-[#7E7A73] hover:text-[#1B1B1B] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <h5 className="font-bold text-[14px] text-[#1B1B1B] mb-1.5">
                  {currentOutput.headline}
                </h5>
                <p className="text-[13px] text-[#7E7A73] leading-relaxed mb-3">
                  {currentOutput.body}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-black/5">
                  <span className="text-[10px] text-[#7E7A73] font-semibold uppercase tracking-wider mr-1">
                    Targets:
                  </span>
                  {currentOutput.suggestedChannels.map((channel) => (
                    <span
                      key={channel}
                      className="text-[10px] bg-white border border-black/5 text-[#1B1B1B] px-2 py-0.5 rounded-full"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-white/40 rounded-full blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
