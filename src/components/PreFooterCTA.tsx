import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapMagnetic } from '../hooks/useGsapMagnetic';

interface PreFooterCTAProps {
  onBookCall: () => void;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onBookCall }) => {
  const ctaBtnRef = useGsapMagnetic<HTMLButtonElement>();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-2 sm:pt-3 pb-12 sm:pb-16 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] sm:rounded-[36px] text-white p-7 sm:p-10 lg:p-12 overflow-hidden shadow-[0_30px_80px_-20px_rgba(12,12,13,0.35)] bg-[#0C0C0D]"
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0D]/95 via-[#0C0C0D]/85 to-[#0C0C0D]/90" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />

          {/* Animated drifting orbs */}
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
            className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#5271ff] blur-[140px] rounded-full opacity-[0.22] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
            className="absolute -bottom-32 -left-32 w-[440px] h-[440px] bg-[#ff3131] blur-[140px] rounded-full opacity-[0.18] pointer-events-none"
          />

          {/* Top and bottom hairline accents */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left: copy + CTA */}
            <div className="lg:col-span-8 space-y-4">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90"
              >
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shadow-[0_0_8px_rgba(255,49,49,0.9)]"
                />
                <span>Next Steps</span>
              </motion.div>

              {/* Headline */}
              <div className="[&_*]:!text-white">
                <AnimatedH1
                  as="h2"
                  dark={true}
                  text="Ready to build your team?"
                  highlight=""
                />
              </div>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[14px] sm:text-[15px] text-white/75 max-w-lg font-normal leading-[1.65]"
              >
From one specialist to an entire outsourced function, we'll help you find the right model.              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-1"
              >
                <motion.button
                  ref={ctaBtnRef}
                  onClick={onBookCall}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-[#0C0C0D] hover:bg-white/95 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                >
                  <span className="text-[13px] sm:text-[14px] font-medium tracking-tight">
                    Book a Conversation
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#0C0C0D] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} strokeWidth={2.4} />
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right: decorative vertical element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex lg:col-span-4 justify-end"
            >
              <div className="relative w-full max-w-[220px] space-y-2.5">
                {[
                  { label: 'Response Time', value: '< 24 hrs' },
                  { label: 'Senior-Led', value: '100%' },
                  { label: 'Global Delivery', value: '24/7' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center justify-between pb-2.5 border-b border-white/15"
                  >
                    <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                      {item.label}
                    </span>
                    <span className="text-[13px] font-medium text-white/95">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};