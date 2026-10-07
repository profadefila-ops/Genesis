import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PARTNERS_SECTION } from '../data/content';
import { AnimatedCounter } from './common/AnimatedCounter';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapTilt } from '../hooks/useGsapMagnetic';

interface PartnersSectionProps {
  onWatchVideoClick: () => void;
  onExploreSolutionsClick?: () => void;
}

/* Client logos — swap with your own brand assets anytime */
const CLIENT_LOGOS = [
  {
    name: 'Client 01',
    url: 'https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/0f98eb17-721b-4bdd-b7ae-65337d530431-removebg-preview.png',
  },
  {
    name: 'Client 02',
    url: 'https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/115fa110-3463-4abb-8b02-68eefd868967-removebg-preview.png',
  },
  {
    name: 'Client 03',
    url: 'https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/nj9.png',
  },
  {
    name: 'Client 04',
    url: 'https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/day.png',
  },
];

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onWatchVideoClick,
}) => {
  const videoCardTiltRef = useGsapTilt<HTMLDivElement>();

  return (
    <motion.section
      id="partners"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <AnimatedH1
                as="h2"
                text={"Scale your business without doubling your"}
                highlight="overhead."
              />
              <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-[#52525B] max-w-xl font-normal">
                {PARTNERS_SECTION.description}
              </p>
            </div>

            {/* Avatars & Rating */}
            <div className="mt-8 sm:mt-10 space-y-3">
              <div className="flex -space-x-2.5">
                {PARTNERS_SECTION.clientAvatars.map((avatar, idx) => (
                  <motion.img
                    key={idx}
                    src={avatar}
                    alt="Client executive"
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + idx * 0.08,
                      type: 'spring',
                      stiffness: 300,
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover shadow-xs cursor-pointer transition-shadow"
                  />
                ))}
              </div>

              <div className="space-y-0.5 pt-1">
                <div className="text-[22px] sm:text-[24px] font-bold text-[#0C0C0D] tracking-tight leading-none">
                  1000s
                </div>
                <div className="text-[13px] sm:text-[14px] text-[#71717A] font-normal">
                  {PARTNERS_SECTION.ratingLabel}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="space-y-1">
              <div className="text-[72px] sm:text-[84px] lg:text-[90px] font-bold tracking-tight leading-none text-[#0C0C0D] flex items-baseline">
                <AnimatedCounter value="75" duration={1.8} />
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
                  className="text-[#ff3131] font-bold ml-0.5"
                >
                  %
                </motion.span>
              </div>
              <div className="text-[15px] sm:text-[16px] text-[#71717A] font-normal">
                {PARTNERS_SECTION.statsLabel}
              </div>
            </div>

            {/* Image Card with Arrow CTA */}
            <motion.a
              ref={videoCardTiltRef as any}
              href="/about"
              className="mt-8 sm:mt-10 relative rounded-[28px] overflow-hidden aspect-[16/10] sm:aspect-[16/9.5] w-full shadow-lg border border-black/5 bg-[#0C0C0D] block group cursor-pointer"
            >
              <motion.img
                src={PARTNERS_SECTION.videoThumbnail}
                alt="About Genesis"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-[#0C0C0D]/40 to-[#0C0C0D]/20 transition-opacity duration-300 group-hover:opacity-85" />
              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-white text-[19px] sm:text-[22px] font-semibold leading-snug tracking-tight max-w-[220px]">
                    See how we approach a<br />
                    new engagement
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#5271ff] group-hover:to-[#ff3131] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(82,113,255,0.4)]"
                  >
                    <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.div>
                </div>
                <div>
                  <span className="text-xs sm:text-[13px] text-white/90 font-medium px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-xs">
                    {PARTNERS_SECTION.videoDuration}
                  </span>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ============================================
          Client Logos Marquee (single row)
         ============================================ */}
      <div className="mt-20 sm:mt-24 relative">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 mb-10"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0C0C0D]/10 to-[#0C0C0D]/15" />
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#71717A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.8)]" />
              <span>Trusted by teams worldwide</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.8)]" />
            </div>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#0C0C0D]/10 to-[#0C0C0D]/15" />
          </div>
        </motion.div>

        {/* Single scrolling row */}
        <div className="relative overflow-hidden py-2">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div
            className="flex w-max animate-marquee-track hover:[animation-play-state:paused] items-center gap-3 sm:gap-4"
            style={{ animationDuration: '42s' }}
          >
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <LogoCard key={idx} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Individual Logo Card ---------- */
const LogoCard: React.FC<{ logo: { name: string; url: string } }> = ({ logo }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex items-center justify-center shrink-0 w-[180px] sm:w-[220px] lg:w-[260px] h-[90px] sm:h-[110px] lg:h-[130px] rounded-2xl border border-[#0C0C0D]/8 bg-gradient-to-b from-white to-[#FAFAFB] hover:border-[#5271ff]/30 hover:shadow-[0_20px_40px_-15px_rgba(82,113,255,0.25)] transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Subtle top-corner brand glow on hover */}
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-[#5271ff]/25 via-[#ff3131]/15 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Corner accent dot */}
      <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#0C0C0D]/10 group-hover:bg-gradient-to-br group-hover:from-[#5271ff] group-hover:to-[#ff3131] transition-colors duration-300" />

      {/* Logo — forced black by default */}
      <img
        src={logo.url}
        alt={logo.name}
        className="relative max-h-[45%] max-w-[55%] w-auto h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        style={{ filter: 'brightness(0)' }}
      />
    </motion.div>
  );
};