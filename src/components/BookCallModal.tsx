import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, Sparkles, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const BOOKING_URL =
  'https://bookings.cloud.microsoft/bookwithme/user/6c96c7bf461b47c690ae625eec49663a%40genesisoutsourcing.co?anonymous&ismsaljsauthenabled=true';

export const BookCallModal: React.FC<BookCallModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [selectedType, setSelectedType] = useState(
    preselectedService || 'Talent & HR'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('1-10 employees');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const serviceOptions = [
    { title: 'Talent & HR', desc: 'Recruitment, payroll, HR admin & compliance' },
    { title: 'Customer Care', desc: 'Inbound, outbound, CX & call support' },
    { title: 'Finance & Operations', desc: 'Credit control, invoicing & back-office' },
    { title: 'Tech & Growth', desc: 'IT support, systems & digital marketing' },
    { title: 'Dedicated Resource', desc: 'Single specialist embedded in your team' },
    { title: 'Managed Service', desc: 'Full function managed by Genesis' },
    { title: 'Something else', desc: 'Tell us what you need' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5271ff', '#ff3131', '#a855f7', '#ffffff'],
      });
    } catch {
      // safe fallback
    }

    // Open Microsoft Bookings in a new tab
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');

    setStep('success');
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white rounded-[28px] shadow-[0_30px_80px_-20px_rgba(12,12,13,0.5)] overflow-hidden my-auto border border-[#EBEBEF]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ==========================================
              Gradient Header
             ========================================== */}
          <div className="relative px-6 sm:px-8 py-5 sm:py-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5271ff] via-[#7a4bff] to-[#ff3131]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              className="absolute -top-16 -right-16 w-[240px] h-[240px] bg-white/25 blur-[80px] rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              className="absolute -bottom-16 -left-16 w-[240px] h-[240px] bg-[#0C0C0D]/30 blur-[80px] rounded-full pointer-events-none"
            />

            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/TP-version.png"
                  alt="Genesis"
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
                <div className="hidden sm:block h-8 w-px bg-white/25" />
                <div className="hidden sm:block">
                  <h3 className="font-semibold text-[15px] text-white tracking-tight leading-tight">
                    Book a Conversation
                  </h3>
                  <p className="text-[11px] text-white/70 tracking-tight mt-0.5">
                    Senior-led discovery · No obligation
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ==========================================
              Details Step
             ========================================== */}
          {step === 'details' ? (
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 space-y-7 max-h-[75vh] overflow-y-auto"
            >
              {/* Service Selection */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#5271ff]/10 text-[#5271ff] text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C0C0D]">
                    What do you need help with?
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((t) => {
                    const isSelected = selectedType === t.title;
                    return (
                      <motion.div
                        key={t.title}
                        whileHover={{ y: -2 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        onClick={() => setSelectedType(t.title)}
                        className={`relative p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 overflow-hidden ${
                          isSelected
                            ? 'border-[#5271ff] bg-gradient-to-br from-[#5271ff]/5 to-[#ff3131]/5 shadow-[0_8px_20px_-8px_rgba(82,113,255,0.4)]'
                            : 'border-[#EBEBEF] bg-white hover:border-[#5271ff]/30'
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] flex items-center justify-center"
                          >
                            <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                          </motion.span>
                        )}
                        <div className="text-[12px] font-semibold text-[#0C0C0D] pr-5">
                          {t.title}
                        </div>
                        <p className="text-[11px] text-[#71717A] mt-1 leading-snug">
                          {t.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#5271ff]/10 text-[#5271ff] text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0C0C0D]">
                    Your details
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEF] bg-white text-[13px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/15 transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEF] bg-white text-[13px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/15 transition-all"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEF] bg-white text-[13px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/15 transition-all"
                  />
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEF] bg-white text-[13px] text-[#0C0C0D] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/15 transition-all cursor-pointer"
                  >
                    <option value="1-10 employees">Team size: 1-10</option>
                    <option value="11-50 employees">Team size: 11-50</option>
                    <option value="51-200 employees">Team size: 51-200</option>
                    <option value="201-1000 employees">Team size: 201-1000</option>
                    <option value="1000+ employees">Team size: 1000+</option>
                  </select>
                </div>
                <div className="mt-3">
                  <textarea
                    rows={3}
                    placeholder="Tell us a little about what you need (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEF] bg-white text-[13px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/15 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Row */}
              <div className="pt-4 border-t border-[#EBEBEF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-[#71717A]">
                  <Shield size={11} className="text-[#5271ff]" />
                  <span>Confidential · GDPR-aligned</span>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] text-white shadow-[0_10px_30px_-8px_rgba(82,113,255,0.6)] hover:shadow-[0_15px_40px_-8px_rgba(255,49,49,0.6)] transition-all cursor-pointer"
                >
                  <span className="text-[13px] font-semibold tracking-tight">
                    Book a Conversation
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} strokeWidth={2.4} />
                  </span>
                </motion.button>
              </div>
            </form>
          ) : (
            /* ==========================================
                Success State
               ========================================== */
            <div className="relative p-10 sm:p-14 text-center space-y-6 overflow-hidden">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 0.12 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#5271ff] blur-[100px] rounded-full pointer-events-none"
              />
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 0.1 }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ff3131] blur-[100px] rounded-full pointer-events-none"
              />

              <div className="relative z-10 space-y-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.15 }}
                  className="relative w-16 h-16 mx-auto"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] blur-md opacity-40" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] flex items-center justify-center text-white shadow-[0_10px_30px_-8px_rgba(82,113,255,0.7)]">
                    <CheckCircle2 size={28} strokeWidth={2.2} />
                  </div>
                </motion.div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5271ff]/8 border border-[#5271ff]/15 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5271ff] mb-4">
                    <Sparkles size={10} />
                    <span>Confirmed</span>
                  </div>
                  <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#0C0C0D] tracking-tight">
                    Your request is in
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#52525B] mt-2 max-w-md mx-auto">
                    Thank you, {name || 'there'}. A senior partner will confirm your call and send
                    a calendar invite to <span className="font-semibold text-[#0C0C0D]">{email || 'your email'}</span>.
                  </p>
                </div>

                <div className="relative p-4 rounded-2xl bg-[#F9F9FB] border border-[#EBEBEF] text-left max-w-md mx-auto space-y-2.5">
                  <div className="flex justify-between items-baseline gap-4 text-[12px]">
                    <span className="text-[#71717A] uppercase tracking-wider text-[10px] font-semibold">
                      Service
                    </span>
                    <span className="font-semibold text-[#0C0C0D] text-right">{selectedType}</span>
                  </div>
                  <div className="h-px bg-[#EBEBEF]" />
                  <div className="flex justify-between items-baseline gap-4 text-[12px]">
                    <span className="text-[#71717A] uppercase tracking-wider text-[10px] font-semibold">
                      Format
                    </span>
                    <span className="font-semibold text-[#0C0C0D] text-right">Video conference</span>
                  </div>
                </div>

                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0C0C0D] text-white hover:bg-black transition-colors cursor-pointer shadow-md"
                >
                  <span className="text-[13px] font-medium tracking-tight">
                    Return to Genesis
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} strokeWidth={2.4} />
                  </span>
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};