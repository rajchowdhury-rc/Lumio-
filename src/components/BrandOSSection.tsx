import React, { useState } from 'react';
import { Folder, FileText, Image as ImageIcon, BarChart2, MoreHorizontal, Check, ArrowUpRight } from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  updated: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const BrandOSSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedFileId, setSelectedFileId] = useState('strategy');

  const files: FileItem[] = [
    {
      id: 'strategy',
      name: 'Lumio_Strategy',
      type: 'Folder • 24 assets',
      size: '142 MB',
      updated: '12m ago',
      icon: Folder,
      color: '#FF4B2B'
    },
    {
      id: 'brandbook',
      name: 'BrandBook_v2',
      type: 'Document • PDF & Tokens',
      size: '18 MB',
      updated: 'Yesterday',
      icon: FileText,
      color: '#8A2387'
    },
    {
      id: 'campaigns',
      name: 'Campaign_Assets',
      type: 'Folder • Vector & Renders',
      size: '480 MB',
      updated: '3 days ago',
      icon: ImageIcon,
      color: '#E94057'
    },
    {
      id: 'performance',
      name: 'Q3_Performance',
      type: 'Dataset • Realtime KPIs',
      size: '4.2 MB',
      updated: 'Live sync',
      icon: BarChart2,
      color: '#F27121'
    }
  ];

  const steps = [
    {
      title: 'Centralized Knowledge',
      description: 'Bring all your disparate assets, guidelines, and strategic documents into one cohesive, searchable environment.',
      targetFile: 'strategy'
    },
    {
      title: 'Contextual Intelligence',
      description: 'Our AI understands the nuances of your brand, providing contextual recommendations and surfacing relevant assets.',
      targetFile: 'brandbook'
    },
    {
      title: 'Seamless Distribution',
      description: 'Ensure every team member and external partner has access to the latest, approved brand materials instantly.',
      targetFile: 'campaigns'
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setSelectedFileId(steps[index].targetFile);
  };

  const handleFileClick = (fileId: string) => {
    setSelectedFileId(fileId);
    const stepIdx = steps.findIndex((s) => s.targetFile === fileId);
    if (stepIdx !== -1) {
      setActiveStep(stepIdx);
    }
  };

  const selectedFile = files.find((f) => f.id === selectedFileId) || files[0];

  return (
    <section id="brand-os" className="py-20 md:py-28 px-6 md:px-12 max-w-[1728px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Files Interactive Card Presentation */}
        <div className="bg-gradient-to-br from-[#F4F3EF] to-[#E9E8E4] rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col items-center justify-center relative overflow-hidden border border-[#D9D7D0]/40 shadow-sm">
          
          <div className="w-full max-w-md bg-[#FFFDF8] rounded-2xl shadow-xl border border-[#D9D7D0]/30 p-6 sm:p-7 relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B1B1B]">Files</span>
                <span className="text-[11px] bg-black/5 text-[#7E7A73] px-2 py-0.5 rounded-full font-medium">
                  {files.length} active
                </span>
              </div>
              <button className="text-[#7E7A73] hover:text-[#1B1B1B] transition-colors p-1" title="More options">
                <MoreHorizontal size={18} />
              </button>
            </div>

            {/* File List */}
            <div className="space-y-3">
              {files.map((file) => {
                const IconComponent = file.icon;
                const isSelected = selectedFileId === file.id;

                return (
                  <div
                    key={file.id}
                    onClick={() => handleFileClick(file.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#FAF9F5] shadow-sm border border-black/10 scale-[1.01]'
                        : 'hover:bg-[#F4F3EF] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shadow-xs shrink-0"
                        style={{ backgroundColor: `${file.color}15` }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: file.color }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-semibold text-[#1B1B1B]">
                          {file.name}
                        </span>
                        <span className="text-[11px] text-[#7E7A73]">
                          {file.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#7E7A73]">
                      <span>{file.updated}</span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inspect Tray */}
            <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#7E7A73]">
              <span className="truncate max-w-[200px]">Active focus: <strong className="text-[#1B1B1B]">{selectedFile.name}</strong></span>
              <span className="text-[11px] font-mono text-[#FF4B2B] flex items-center gap-1">
                Verified Token <ArrowUpRight size={13} />
              </span>
            </div>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-to-tr from-[#FF416C]/10 to-[#FF4B2B]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Right: Feature Description */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h3 className="text-[32px] sm:text-[40px] md:text-[44px] mb-10 font-bold tracking-tight text-[#1B1B1B] leading-[1.15]">
            The intelligent foundation for your brand.
          </h3>

          <div className="relative pl-8 border-l-[3px] border-[#D9D7D0] space-y-10">
            {/* Dynamic Active Indicator */}
            <div
              className="absolute left-[-3px] w-[3px] bg-gradient-to-b from-[#FF416C] to-[#FF4B2B] transition-all duration-300 rounded-full"
              style={{
                top: `${activeStep * 33.33}%`,
                height: '33.33%'
              }}
            />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.title}
                  onClick={() => handleStepClick(idx)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2 text-[#1B1B1B]">
                    {step.title}
                  </h4>
                  <p className="text-[15px] text-[#7E7A73] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
