import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/content';

/* Background images per testimonial */
const BG_IMAGES = [
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=80',
];

const AUTOPLAY_MS = 8000;

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const total = TESTIMONIALS_DATA.length;
  const item = TESTIMONIALS_DATA[currentIdx];

  const goTo = (idx: number) => {
    setProgress(0);
    setCurrentIdx(((idx % total) + total) % total);
  };
  const next = () => goTo(currentIdx + 1);
  const prev = () => goTo(currentIdx - 1);

  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / AUTOPLAY_MS) * 100);
      setProgress(p);
      if (p >= 100) next();
      else rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx, paused]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      {/* Very subtle background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7] via-white to-[#FBFAF7] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0C0C0D]/70 mb-12 sm:mb-16"
        >
          <span className="w-8 h-px bg-[#0C0C0D]/25" />
          <span>Client Perspectives</span>
        </motion.div>

        {/* Main content */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
        >
          {/* Left: small portrait image + author info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col"
          >
            {/* Portrait image with smooth crossfade */}
            <div className="relative w-full aspect-[4/5] max-w-[320px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(12,12,13,0.2)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={BG_IMAGES[currentIdx % BG_IMAGES.length]}
                  alt={item.company}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Thin dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/35 via-transparent to-transparent" />

              {/* Company mark bottom-left */}
              <motion.div
                key={`badge-${currentIdx}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/85">
                  {item.company}
                </div>
              </motion.div>
            </div>

            {/* Author block below image */}
            <motion.div
              key={`author-${currentIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex items-center gap-3"
            >
              <img
                src={item.avatar}
                alt={item.author}
                className="w-11 h-11 rounded-full object-cover border border-[#E5E7EB]"
              />
              <div>
                <div className="text-[14px] font-semibold text-[#0C0C0D] tracking-tight">
                  {item.author}
                </div>
                <div className="text-[12px] text-[#71717A] mt-0.5">
                  {item.role}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: quote content */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[420px]">
            {/* Small quote icon */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-full bg-[#0C0C0D] text-white flex items-center justify-center mb-8"
            >
              <Quote size={16} />
            </motion.div>

            {/* Quote — 16px base font, refined line-height */}
            <div className="flex-1 flex items-start">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIdx}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.75] text-[#0C0C0D] font-normal tracking-[-0.005em] max-w-2xl"
                >
                  {item.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Bottom bar: stat + controls */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-[#0C0C0D]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              {/* Stat */}
              {item.stats && (
                <motion.div
                  key={`stat-${currentIdx}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-[22px] sm:text-[26px] font-semibold text-[#0C0C0D] tracking-tight leading-none">
                    {item.stats}
                  </span>
                  <span className="text-[12px] text-[#71717A] max-w-[220px] leading-tight">
                    {item.statsLabel}
                  </span>
                </motion.div>
              )}

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Progress dots */}
                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="relative h-[2px] w-8 rounded-full bg-[#0C0C0D]/10 overflow-hidden cursor-pointer"
                    >
                      {i === currentIdx && (
                        <div
                          className="absolute inset-y-0 left-0 bg-[#0C0C0D]"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      {i < currentIdx && (
                        <div className="absolute inset-0 bg-[#0C0C0D]/40" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={prev}
                    aria-label="Previous"
                    className="w-9 h-9 rounded-full border border-[#0C0C0D]/12 text-[#0C0C0D] flex items-center justify-center hover:bg-[#0C0C0D] hover:text-white hover:border-[#0C0C0D] transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={13} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={next}
                    aria-label="Next"
                    className="w-9 h-9 rounded-full border border-[#0C0C0D]/12 text-[#0C0C0D] flex items-center justify-center hover:bg-[#0C0C0D] hover:text-white hover:border-[#0C0C0D] transition-colors cursor-pointer"
                  >
                    <ArrowRight size={13} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};