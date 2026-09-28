import React, { useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRINCIPLES_DATA } from '../data/content';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapTilt } from '../hooks/useGsapMagnetic';

interface PrinciplesSectionProps {
  onLearnMore: () => void;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ onLearnMore }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = PRINCIPLES_DATA[selectedIdx];
  const cardTiltRef = useGsapTilt<HTMLDivElement>();

  return (
    <motion.section
      id="principles"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-24 sm:py-32 bg-[#F9F9FB] border-t border-[#EBEBEF]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl space-y-4 mb-14"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0C0C0D]">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#0C0C0D] inline-block"
            />
            <span>Our Principles</span>
          </div>
          <AnimatedH1
            as="h2"
            text="Our core"
            highlight="principles"
          />
        </motion.div>

        {/* Tab Buttons Row with Motion */}
        <div className="flex flex-wrap gap-3 pb-10 border-b border-[#EBEBEF]">
          {PRINCIPLES_DATA.map((principle, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <motion.button
                key={principle.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedIdx(idx)}
                className={`px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-200 cursor-pointer relative ${
                  isActive
                    ? 'bg-[#0C0C0D] text-white shadow-md'
                    : 'bg-white text-[#52525B] hover:text-[#0C0C0D] border border-[#E5E7EB]'
                }`}
              >
                {principle.title}
              </motion.button>
            );
          })}
        </div>

        {/* Featured Principle Interactive Display with Smooth AnimatePresence */}
        <motion.div
          ref={cardTiltRef}
          className="mt-12 bg-white rounded-[32px] p-8 sm:p-12 lg:p-16 border border-[#EBEBEF] shadow-[0_8px_30px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-left'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5271ff]/15 to-[#ff3131]/10 text-[#5271ff] flex items-center justify-center">
                <Quote size={24} />
              </div>

              <h3 className="text-[26px] sm:text-[34px] lg:text-[38px] font-semibold leading-[1.2] text-[#0C0C0D] tracking-tight">
                "{current.quote}"
              </h3>

              <p className="text-[17px] sm:text-[18px] text-[#52525B] leading-relaxed max-w-2xl">
                {current.description}
              </p>

              <div className="pt-2">
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={onLearnMore}
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#5271ff] hover:text-[#ff3131] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + '-right'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#F7F7F8] rounded-2xl p-8 border border-[#EBEBEF] space-y-4"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                Principle 0{selectedIdx + 1}
              </div>
              <div className="text-[20px] font-semibold text-[#0C0C0D] leading-snug">
                {current.subtitle}
              </div>
              <div className="pt-4 border-t border-[#EBEBEF] text-[14px] text-[#ff3131] font-medium">
                {current.highlight}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};
