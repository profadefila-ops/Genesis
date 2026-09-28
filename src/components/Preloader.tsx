import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Animate the progress counter from 0 → 100
  useEffect(() => {
    const duration = 1800; // ms
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic for a smooth finish
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Small pause at 100% before exit
        setTimeout(() => setExiting(true), 250);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Once exiting, wait for the exit animation, then call onComplete
  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(() => onComplete(), 900);
    return () => clearTimeout(t);
  }, [exiting, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ==========================================
          Ambient brand glows (soft, light)
         ========================================== */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5271ff] blur-[180px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#ff3131] blur-[180px] rounded-full pointer-events-none"
      />

      {/* ==========================================
          Grid texture (dark lines on light bg)
         ========================================== */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ==========================================
          Subtle noise texture
         ========================================== */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ==========================================
          Top and bottom hairlines
         ========================================== */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0C0C0D]/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0C0C0D]/10 to-transparent" />

      {/* ==========================================
          Main content
         ========================================== */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <img
            src="https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/TP-version.png"
            alt="Genesis"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </motion.div>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#71717A]"
        >
          <span className="w-6 h-px bg-[#0C0C0D]/20" />
          <span>Preparing your experience</span>
          <span className="w-6 h-px bg-[#0C0C0D]/20" />
        </motion.div>

        {/* Progress bar */}
        <div className="relative w-[220px] sm:w-[280px] h-[3px] rounded-full overflow-hidden bg-[#0C0C0D]/[0.06]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.15, ease: 'linear' }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-y-0 left-0 right-0 rounded-full bg-gradient-to-r from-[#5271ff] via-[#a855f7] to-[#ff3131]"
          />
        </div>

        {/* Progress counter */}
        <div className="mt-5 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] text-[#71717A]">
          <span className="text-[#0C0C0D] font-semibold tabular-nums">
            {String(progress).padStart(3, '0')}
          </span>
          <span className="w-4 h-px bg-[#0C0C0D]/20" />
          <span>Loading</span>
        </div>

        {/* Animated brand dots */}
        <div className="mt-10 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.4, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className={`w-1.5 h-1.5 rounded-full ${
                i === 0 ? 'bg-[#5271ff]' : i === 1 ? 'bg-[#a855f7]' : 'bg-[#ff3131]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ==========================================
          Bottom-right brand mark
         ========================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-6 right-6 flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#71717A]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff]" />
        <span className="w-1 h-1 rounded-full bg-[#ff3131]" />
        <span className="ml-1">Genesis</span>
      </motion.div>

      {/* ==========================================
          Exit curtain reveal (slides up on exit)
         ========================================== */}
      <motion.div
        initial={{ y: '100%' }}
        animate={exiting ? { y: '-100%' } : { y: '100%' }}
        transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="absolute inset-0 bg-gradient-to-br from-white via-[#F9F9FB] to-white pointer-events-none"
      />
    </motion.div>
  );
};