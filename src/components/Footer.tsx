import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (page: string) => void;
  onBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookCall }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  /* Contact link navigates to the Contact page */
  const handleLink = (target: string) => {
    onNavigate(target);
  };

  return (
    <footer className="relative bg-[#070812] text-white overflow-hidden">
      {/* Top Brand Gradient Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#5271ff] via-[#a25aff] to-[#ff3131]" />

      {/* Ambient Brand Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[#5271ff]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[500px] h-[350px] bg-[#ff3131]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#5271ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* ==========================================
              Brand Info Column
             ========================================== */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLink('home')}
                className="flex items-center cursor-pointer text-left focus:outline-hidden group"
                aria-label="Genesis Home"
              >
                <img
                  src="https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/TP-version.png"
                  alt="Genesis"
                  className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </button>

              {/* Dual Brand Live Pulse */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5271ff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5271ff]" />
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.9)]" />
                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/80">
                  Global
                </span>
              </div>
            </div>

            <p className="text-[15px] text-white/65 leading-relaxed max-w-sm font-normal">
              We don't believe outsourcing should feel disconnected from your business. Genesis builds teams around your processes, systems, working hours and expectations.
            </p>

            {/* Primary CTA */}
            <div className="pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookCall}
                className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-gradient-to-r from-[#5271ff] to-[#6a5cff] text-white text-[13px] font-medium shadow-[0_8px_30px_-8px_rgba(82,113,255,0.7)] hover:shadow-[0_12px_40px_-8px_rgba(82,113,255,0.9)] transition-all duration-300 cursor-pointer"
              >
                <Sparkles size={13} />
                <span>Schedule a conversation</span>
                <span className="w-7 h-7 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight size={12} strokeWidth={2.4} />
                </span>
              </motion.button>
            </div>

            <div className="text-[11px] text-white/40 font-mono tracking-[0.14em] uppercase">
              London · Accra
            </div>
          </div>

          {/* ==========================================
              Menu Links Column
             ========================================== */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5271ff]">
              <span className="w-1 h-1 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.9)]" />
              <span>Menu</span>
            </div>
            <ul className="space-y-3 text-[14px]">
              {[
                { label: 'Home', target: 'home' },
                { label: 'About Us', target: 'about' },
                { label: 'Services', target: 'services' },
                { label: 'Blog', target: 'blog' },
                { label: 'Contact', target: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLink(item.target)}
                    className="text-white/65 hover:text-white transition-colors duration-200 cursor-pointer text-left group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-[#5271ff] group-hover:w-3 transition-all duration-300" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================
              Services Column
             ========================================== */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff3131]">
              <span className="w-1 h-1 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.9)]" />
              <span>Services</span>
            </div>
            <ul className="space-y-3 text-[14px]">
              {[
                'Talent & HR',
                'Customer Care',
                'Finance & Operations',
                'Tech & Growth',
              ].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => handleLink('services')}
                    className="text-white/65 hover:text-white transition-colors duration-200 cursor-pointer text-left group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-[#ff3131] group-hover:w-3 transition-all duration-300" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==========================================
              Newsletter Signup Column
             ========================================== */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] shadow-[0_0_6px_rgba(150,80,200,0.7)]" />
              <span>Executive Briefing</span>
            </div>
            <p className="text-[14px] text-white/65 leading-snug">
              Stay ahead with strategic perspectives delivered monthly to executive inboxes.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your executive email"
                className="w-full pl-4 pr-12 py-3 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/15 text-white placeholder-white/40 text-sm focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/30 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] text-white flex items-center justify-center hover:opacity-95 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_16px_rgba(82,113,255,0.5)]"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={15} />}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 font-medium animate-in fade-in">
                Thank you. You will receive our next executive briefing.
              </p>
            )}
          </div>
        </div>

        {/* ==========================================
            Bottom Bar
           ========================================== */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/45 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131]" />
            <span>© {new Date().getFullYear()} Genesis. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLink('about')}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleLink('services')}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleLink('blog')}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => handleLink('contact')}
              className="hover:text-[#ff3131] transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};