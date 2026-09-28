import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CTA_TICKER_STATS } from '../data/content';
import { AnimatedCounter } from './common/AnimatedCounter';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapMagnetic } from '../hooks/useGsapMagnetic';

interface CTATickerSectionProps {
  onBookCall: () => void;
}

export const CTATickerSection: React.FC<CTATickerSectionProps> = ({ onBookCall }) => {
  const bookBtnRef = useGsapMagnetic<HTMLButtonElement>();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 lg:py-28 overflow-hidden text-white"
    >
      {/* Base gradient background — diagonal sweep from blue to red */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5271ff] via-[#7a4bff] to-[#ff3131]" />

      {/* Deep overlay to darken edges for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Animated ambient glows */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#0C0C0D]/30 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle grain/noise texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Thin top and bottom hairlines for edge definition */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Core Content Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-[0.16em] text-white/95">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-white inline-block shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              />
              <span>Dedicated Senior Capacity</span>
            </div>

            {/* Headline — using dark=false since we're on colored bg */}
            <div className="[&_*]:!text-white [&_.highlight]:!text-white">
              <AnimatedH1
                as="h2"
                dark={true}
                text="Your business. Your standards."
                highlight="Our execution."
              />
            </div>

            <p className="text-[17px] sm:text-[18px] text-white/85 max-w-xl leading-relaxed font-normal">
We don't believe outsourcing should feel disconnected from your business. Genesis builds teams around your processes, systems, working hours and expectations.            </p>

            <div className="pt-2">
              <motion.button
                ref={bookBtnRef}
                onClick={onBookCall}
                whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#0C0C0D] hover:bg-white transition-all duration-200 cursor-pointer text-[15px] font-semibold tracking-tight shadow-lg"
              >
                <span>Book a Conversation</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>

          {/* 3 Metric Cards with Animated Counters */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {CTA_TICKER_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/25 hover:border-white/50 hover:bg-white/[0.18] transition-all duration-300 cursor-default overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              >
                {/* Card inner glow on hover */}
                <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-white/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative text-[36px] sm:text-[42px] font-bold text-white tracking-tight leading-none transition-colors duration-200">
                  <AnimatedCounter value={stat.value} duration={1.6} />
                </div>
                <div className="relative mt-2 text-[14px] text-white/75 font-normal leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};