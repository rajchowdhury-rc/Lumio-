import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [teamSize, setTeamSize] = useState('50-250');
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 2:00 PM EST');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const resetAndClose = () => {
    setIsBooked(false);
    setEmail('');
    setName('');
    onClose();
  };

  const slots = [
    'Tomorrow, 10:30 AM EST',
    'Tomorrow, 2:00 PM EST',
    'Thursday, 11:00 AM EST',
    'Friday, 3:30 PM EST'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF9F5] rounded-[32px] border border-black/10 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#1B1B1B] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {!isBooked ? (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-full border border-black flex items-center justify-center shrink-0">
                <span className="text-black font-bold text-xs leading-none">L</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7E7A73]">
                Schedule a Demo
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-2 tracking-tight">
              See Lumio in action
            </h3>
            <p className="text-sm text-[#7E7A73] mb-6">
              Discover how global marketing and brand leaders unify autonomous AI workflows and brand governance with Lumio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1B1B] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-white border border-[#D9D7D0] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1B1B] mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white border border-[#D9D7D0] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1B1B1B] mb-1.5">
                  Select Preferred Time
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? 'border-black bg-black text-white font-medium'
                          : 'border-[#D9D7D0] bg-white text-[#1B1B1B] hover:border-black/50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-black/85 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Confirm Live Briefing</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-2">
              Briefing Confirmed!
            </h3>
            <p className="text-sm text-[#7E7A73] mb-6 max-w-sm mx-auto">
              We&apos;ve sent a calendar invitation and preparatory Lumio overview deck to{' '}
              <strong className="text-black">{email || 'your email'}</strong> for{' '}
              <span className="text-black font-semibold">{selectedSlot}</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="bg-black text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black/80 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
