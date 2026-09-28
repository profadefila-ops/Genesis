import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AnimatedH1 } from './common/AnimatedText';

interface OurTeamSectionProps {
  onMeetAllMembersClick: () => void;
}

const VALUE_PILLARS = [
  {
    id: 'dedicated-people',
    number: '01',
    title: 'Dedicated People',
    description: 'Professionals aligned with your business and requirements.',
  },
  {
    id: 'flexible-delivery',
    number: '02',
    title: 'Flexible Delivery',
    description: 'Start with one specialist, build a team or outsource an entire function.',
  },
  {
    id: 'uk-led-standards',
    number: '03',
    title: 'UK-Led Standards',
    description: 'UK-led oversight combined with established delivery capability in Ghana.',
  },
  {
    id: 'operational-accountability',
    number: '04',
    title: 'Operational Accountability',
    description: 'Clear responsibilities, performance monitoring and dedicated account management.',
  },
];

/* ---------- Value Card ---------- */
const ValueCard: React.FC<{ item: (typeof VALUE_PILLARS)[0]; index: number }> = ({
  item,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative w-full h-full rounded-[24px] overflow-hidden bg-[#F7F7F8] border border-[#EBEBEF] hover:border-[#5271ff]/40 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(82,113,255,0.12)] p-7 sm:p-8 flex flex-col justify-between min-h-[280px]"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5271ff]/15 via-[#ff3131]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex items-start justify-between">
        <span className="text-[13px] font-mono text-[#71717A] group-hover:text-[#5271ff] transition-colors duration-200">
          {item.number}
        </span>
        <span className="w-2 h-2 rounded-full bg-[#5271ff] group-hover:bg-[#ff3131] group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_rgba(82,113,255,0.4)]" />
      </div>

      <div className="relative mt-10">
        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0C0C0D] tracking-tight leading-snug group-hover:text-[#5271ff] transition-colors duration-200">
          {item.title}
        </h3>
        <p className="mt-3 text-[14px] text-[#52525B] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

/* ---------- Mobile-only Autoplay Carousel ---------- */
const MobileCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const total = VALUE_PILLARS.length;
  const maxIndex = total - 1;

  // Autoplay loop
  useEffect(() => {
    if (paused) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, maxIndex]);

  return (
    <div
      className="relative sm:hidden"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            const swipe = info.offset.x;
            if (swipe < -60) {
              setIndex((prev) => Math.min(prev + 1, maxIndex));
            } else if (swipe > 60) {
              setIndex((prev) => Math.max(prev - 1, 0));
            }
          }}
        >
          {VALUE_PILLARS.map((item, idx) => (
            <div key={item.id} className="shrink-0 w-full px-1">
              <ValueCard item={item} index={idx} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {VALUE_PILLARS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group p-1.5 cursor-pointer"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-[#5271ff]'
                  : 'w-1.5 bg-[#D4D4D8] group-hover:bg-[#A1A1AA]'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ---------- Main Section ---------- */
export const OurTeamSection: React.FC<OurTeamSectionProps> = ({
  onMeetAllMembersClick,
}) => {
  return (
    <motion.section
      id="how-we-work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0C0C0D]">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#5271ff] inline-block shadow-[0_0_6px_rgba(82,113,255,0.7)]"
              />
              <span>How We Work</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Dedicated people. Flexible delivery."
              highlight="Built to scale."
            />
            <p className="text-[17px] sm:text-[18px] text-[#52525B] leading-relaxed">
              From conversation to fully embedded team we design, build and integrate
              dedicated professionals around the way your business actually operates.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onMeetAllMembersClick}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#DCDCE0] hover:border-[#0C0C0D] bg-white text-[#0C0C0D] transition-colors duration-200 self-start lg:self-end hover:shadow-xs cursor-pointer"
          >
            <span className="text-[14px] font-medium">Book a Conversation</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile: Autoplay carousel (hidden on sm and up) */}
        <MobileCarousel />

        {/* Tablet + Desktop: Static grid (hidden on mobile) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {VALUE_PILLARS.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};