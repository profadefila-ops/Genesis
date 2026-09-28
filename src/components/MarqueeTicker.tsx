import React from 'react';
import { motion } from 'framer-motion';

/* Marquee content — brand / value props */
const MARQUEE_ITEMS = [
  'Dedicated Teams',
  'Offshore Excellence',
  'Managed Services',
  'UK-Led Standards',
  'Global Delivery',
  'Scalable Capacity',
];

export const MarqueeTicker: React.FC = () => {
  // Repeating array to ensure smooth continuous marquee loop
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white pt-2 sm:pt-3 pb-10 sm:pb-12 select-none"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-full border border-[#EBEBEF] bg-white py-4 sm:py-5">
          <div
            className="flex w-max whitespace-nowrap items-center animate-marquee-track hover:[animation-play-state:paused]"
            style={{ animationDuration: '45s' }}
          >
            {repeatedItems.map((item, idx) => (
              <div key={idx} className="flex items-center group cursor-pointer">
                <span className="text-[15px] font-medium tracking-[0.02em] text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors duration-200">
                  {item}
                </span>

                {/* Alternating brand dots */}
                <span
                  className={`w-1.5 h-1.5 rounded-full inline-block mx-4 sm:mx-5 shrink-0 transition-transform duration-200 group-hover:scale-150 ${
                    idx % 2 === 0
                      ? 'bg-[#5271ff] shadow-[0_0_10px_rgba(82,113,255,0.7)]'
                      : 'bg-[#ff3131] shadow-[0_0_10px_rgba(255,49,49,0.7)]'
                  }`}
                />

                {/* Angled slash */}
                <span className="text-[15px] font-light text-[#0C0C0D]/30 mr-5 sm:mr-6 select-none group-hover:text-[#ff3131] transition-colors duration-200">
                  /
                </span>
              </div>
            ))}
          </div>

          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};