import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../data/content';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapMagnetic, useGsapTilt } from '../hooks/useGsapMagnetic';

interface HeroProps {
  onHowWeHelpClick: () => void;
  onScrollDownClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHowWeHelpClick,
  onScrollDownClick,
}) => {
  const ctaBtnRef = useGsapMagnetic<HTMLButtonElement>();
  const bannerTiltRef = useGsapTilt<HTMLDivElement>();

  return (
    <section id="hero-section" className="relative pt-28 sm:pt-32 lg:pt-36 bg-white overflow-hidden">
      {/* Top Text Grid */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-12 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Tag / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0C0C0D]"
            >
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-[#5271ff] inline-block shrink-0 shadow-[0_0_8px_rgba(82,113,255,0.6)]"
                />
                <motion.span
                  animate={{ scale: [1.35, 1, 1.35], opacity: [1, 0.8, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shrink-0 shadow-[0_0_6px_rgba(255,49,49,0.5)]"
                />
              </div>
              <span>{HERO_CONTENT.tag}</span>
            </motion.div>

            {/* Main Title (H1) - Removed hardcoded text sizes */}
            <AnimatedH1
              text={HERO_CONTENT.headingLine1}
              highlight={HERO_CONTENT.headingHighlight}
              className="font-['Plus_Jakarta_Sans',sans-serif] leading-[1.12] font-semibold tracking-[-0.03em] text-[#0C0C0D]"
            />
          </div>

          {/* Right Column: Paragraph + CTA Pill */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-6 flex flex-col items-start space-y-6 sm:space-y-7"
          >
            {/* Description - Now with smaller text sizes */}
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.65] text-[#52525B] font-normal tracking-tight max-w-lg">
              {HERO_CONTENT.description}
            </p>

            {/* Pill CTA Button */}
            <motion.button
              ref={ctaBtnRef}
              onClick={onHowWeHelpClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full border border-[#D4D4D8] hover:border-[#5271ff] bg-white text-[#0C0C0D] transition-colors duration-200 hover:shadow-[0_8px_25px_rgba(82,113,255,0.15)] cursor-pointer"
            >
              <span className="text-[13px] sm:text-[14px] font-medium tracking-tight normal">
                {HERO_CONTENT.ctaText}
              </span>
              <motion.span
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0C0C0D] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-gradient-to-r group-hover:from-[#5271ff] group-hover:to-[#ff3131] shadow-xs"
              >
                <ArrowRight size={13} strokeWidth={2.2} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Hero Banner - Full Width with Border Radius */}
      <div className="relative w-full mx-auto px-0 pb-4 sm:pb-8">
        <motion.div
          ref={bannerTiltRef}
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] xl:h-[480px] rounded-[30px] sm:rounded-[50px] lg:rounded-[70px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]  group"
        >
          {/* Background Video */}
          <motion.video
            src="https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/1114644_Plan_Architecture_1920x1080.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />

          {/* Top Center Curved Cutout Shape */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] pointer-events-none z-10">
            <img
              src="/assets/hero-cutout.svg"
              alt=""
              className="w-full h-auto block filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};