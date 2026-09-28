import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Headphones,
  Wallet,
  Code2,
  Sparkles,
  UserCog,
  Building2,
  Globe2,
  MapPin,
  ArrowUpRight,
  TrendingDown,
} from 'lucide-react';
import { AnimatedH1 } from './common/AnimatedText';
import { AnimatedCounter } from './common/AnimatedCounter';

interface ServicesPageProps {
  onBackToHome: () => void;
  onBookCallForService: (title: string) => void;
}

/* ============================================
   CONTENT DATA
   ============================================ */

const SERVICE_PILLARS = [
  {
    id: 'talent-hr',
    number: '01',
    title: 'Talent & HR',
    tagline: 'Build the people engine behind your business.',
    description:
      'Extend your recruitment and HR capacity with dedicated professionals supporting:',
    capabilities: ['Recruitment Sourcing', 'Candidate Sourcing', 'Payroll', 'HR Administration', 'Compliance'],
    bestFor:
      'Staffing agencies and businesses experiencing recruitment volume, administrative pressure or rapid growth.',
    icon: Users,
  },
  {
    id: 'customer-care',
    number: '02',
    title: 'Customer Care',
    tagline: 'Give your customers the support they expect.',
    description:
      'Extend your customer support capacity with dedicated professionals aligned with your processes and communication standards.',
    capabilities: ['Call Support', 'Customer Experience', 'Inbound Support', 'Outbound Support'],
    bestFor:
      'Businesses that need greater customer support capacity without expanding their internal team.',
    icon: Headphones,
  },
  {
    id: 'finance-operations',
    number: '03',
    title: 'Finance & Operations',
    tagline: 'Take operational pressure off your core team.',
    description:
      'Move essential administrative work to dedicated professionals so your internal team can focus on higher-value activities.',
    capabilities: ['Credit Control', 'Invoicing', 'Bookkeeping', 'Back-Office Administration'],
    bestFor:
      'Businesses looking to improve operational efficiency and reduce administrative workload.',
    icon: Wallet,
  },
  {
    id: 'tech-growth',
    number: '04',
    title: 'Tech & Growth',
    tagline: 'Add specialist capability without unnecessary overhead.',
    description:
      'Access dedicated professionals supporting the technology and growth functions behind your business.',
    capabilities: ['IT Support', 'System Administration', 'Digital Marketing Support'],
    bestFor:
      'Businesses that need specialist capability without building an entire internal function.',
    icon: Code2,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated Resources',
    subtitle: 'Your management. Your processes. Our talent.',
    description:
      'We recruit professionals who become embedded within your team while you retain day-to-day management.',
    bestFor:
      'Additional capacity, specialist roles and businesses wanting direct operational control.',
    icon: UserCog,
  },
  {
    title: 'Managed Services',
    subtitle: 'Our management. Your outcomes.',
    description:
      'Genesis recruits, manages and monitors a dedicated team responsible for delivering an agreed business function.',
    bestFor:
      'Entire functions, high-volume operations and businesses looking to reduce internal workload.',
    icon: Building2,
  },
];

const GHANA_STATS = [
  { value: 11.8, suffix: 'M', label: 'Young people aged 15–35' },
  { value: 74.6, suffix: '%', label: 'Internet penetration' },
  { value: 0, suffix: 'GMT', label: 'Alignment with the UK', isText: true },
];

/* ============================================
   SERVICE PILLAR CARD
   ============================================ */

const PillarCard: React.FC<{
  pillar: (typeof SERVICE_PILLARS)[0];
  index: number;
  onBookCall: (title: string) => void;
}> = ({ pillar, index, onBookCall }) => {
  const Icon = pillar.icon;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-[28px] sm:rounded-[36px] bg-[#F9F9FB] border border-[#EBEBEF] hover:border-[#5271ff]/40 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.18)]"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none ${
          isReversed ? 'top-0 right-0 bg-[#ff3131]' : 'top-0 left-0 bg-[#5271ff]'
        }`}
      />

      <div
        className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-14 items-center ${
          isReversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-300 ${
                isReversed
                  ? 'bg-[#ff3131]/10 border-[#ff3131]/20 text-[#ff3131] group-hover:bg-gradient-to-br group-hover:from-[#ff3131] group-hover:to-[#ff5c5c] group-hover:text-white group-hover:border-transparent'
                  : 'bg-[#5271ff]/10 border-[#5271ff]/20 text-[#5271ff] group-hover:bg-gradient-to-br group-hover:from-[#5271ff] group-hover:to-[#6a5cff] group-hover:text-white group-hover:border-transparent'
              }`}
            >
              <Icon size={22} />
            </motion.div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A]">
              Service {pillar.number}
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#0C0C0D] tracking-[-0.02em] leading-[1.1] transition-colors duration-300 group-hover:text-[#5271ff]">
              {pillar.title}
            </h2>
            <p
              className={`text-[16px] sm:text-[17px] font-medium ${
                isReversed ? 'text-[#ff3131]' : 'text-[#5271ff]'
              }`}
            >
              {pillar.tagline}
            </p>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#52525B] max-w-xl font-normal">
            {pillar.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {pillar.capabilities.map((cap) => (
              <motion.span
                key={cap}
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[12px] font-medium text-[#3F3F46] hover:border-[#5271ff]/50 hover:text-[#5271ff] hover:shadow-[0_4px_12px_-4px_rgba(82,113,255,0.3)] transition-all duration-200 cursor-default"
              >
                {cap}
              </motion.span>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-[#EBEBEF] flex items-start gap-3">
            <Sparkles
              size={14}
              className={`mt-1 shrink-0 ${
                isReversed ? 'text-[#ff3131]' : 'text-[#5271ff]'
              }`}
            />
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-1">
                Best for
              </div>
              <p className="text-[13px] leading-relaxed text-[#52525B]">
                {pillar.bestFor}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              onClick={() => onBookCall(pillar.title)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-[#0C0C0D] text-white hover:bg-black transition-colors cursor-pointer shadow-md hover:shadow-[0_12px_30px_-8px_rgba(12,12,13,0.4)]"
            >
              <span className="text-[13px] font-medium tracking-tight">
                Initiate briefing
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45">
                <ArrowUpRight size={13} strokeWidth={2.4} />
              </span>
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0C0C0D] to-[#15151a]"
          >
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              className={`absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full blur-[100px] opacity-40 ${
                isReversed ? 'bg-[#5271ff]' : 'bg-[#ff3131]'
              }`}
            />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                whileHover={{ scale: 1.08, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                className="text-[180px] sm:text-[220px] font-black text-white/[0.05] tracking-tighter select-none leading-none"
              >
                {pillar.number}
              </motion.span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <Icon
                  size={16}
                  className={isReversed ? 'text-[#ff3131]' : 'text-[#5271ff]'}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  {pillar.title}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ============================================
   PAGE
   ============================================ */

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBookCallForService,
}) => {
  return (
    <div className="bg-white">
      {/* ==========================================
          Full-Width Hero
         ========================================== */}
      <section className="relative w-full h-[70vh] min-h-[520px] max-h-[780px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&auto=format&fit=crop&q=80"
          alt="Genesis Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/95 via-[#0C0C0D]/60 to-[#0C0C0D]/40" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[#5271ff]/20 rounded-full blur-[140px] pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
          className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[350px] bg-[#ff3131]/15 rounded-full blur-[140px] pointer-events-none"
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="absolute top-0 left-0 right-0 z-20 pt-28 sm:pt-32 lg:pt-36">
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.8)]" />
              <span>Genesis · Services</span>
            </motion.span>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-32 sm:pb-20 lg:pb-24">
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-4xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90"
              >
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shadow-[0_0_8px_rgba(255,49,49,0.9)]"
                />
                <span>Services &amp; Capabilities</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="[&_h1]:!text-white [&_h1_span]:!text-white [&_h1_.bg-clip-text]:!text-transparent"
              >
                <AnimatedH1
                  as="h1"
                  text="The capacity to grow."
                  highlight="The flexibility to adapt."
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16px] sm:text-[18px] leading-[1.7] text-white/75 max-w-2xl font-normal"
              >
                You don't always need more infrastructure. Sometimes you simply need more capable people. Genesis provides dedicated professionals and managed teams across the functions that keep your business operating and growing.
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ==========================================
          Four Service Pillars
         ========================================== */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#5271ff]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff3131]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-12 sm:mb-16"
          >
            <span className="w-10 h-px bg-[#0C0C0D]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              Our Services
            </span>
          </motion.div>

          <div className="space-y-8 lg:space-y-10">
            {SERVICE_PILLARS.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                index={index}
                onBookCall={onBookCallForService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Engagement Models
         ========================================== */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#5271ff]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 pb-12 sm:pb-16"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
              <span>How We Engage</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Choose how you want to"
              highlight="work with Genesis."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const Icon = model.icon;
              const isDark = index === 1;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 overflow-hidden transition-all duration-500 ${
                    isDark
                      ? 'bg-gradient-to-br from-[#0C0C0D] to-[#15151a] text-white hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.35)]'
                      : 'bg-gradient-to-br from-[#F9F9FB] to-[#F0F0F3] border border-[#EBEBEF] hover:border-[#5271ff]/40 hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.2)]'
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage: isDark
                        ? 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)'
                        : 'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                  />
                  {isDark && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                        className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#5271ff] blur-[120px] rounded-full pointer-events-none"
                      />
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </>
                  )}

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -3 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-md transition-colors duration-300 ${
                          isDark
                            ? 'bg-[#5271ff]/15 border-[#5271ff]/30 text-[#5271ff] group-hover:bg-gradient-to-br group-hover:from-[#5271ff] group-hover:to-[#6a5cff] group-hover:text-white group-hover:border-transparent'
                            : 'bg-[#ff3131]/10 border-[#ff3131]/20 text-[#ff3131] group-hover:bg-gradient-to-br group-hover:from-[#ff3131] group-hover:to-[#ff5c5c] group-hover:text-white group-hover:border-transparent'
                        }`}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                          isDark ? 'text-white/60' : 'text-[#71717A]'
                        }`}
                      >
                        Engagement Model {index + 1}
                      </span>
                    </div>

                    <h3
                      className={`text-[26px] sm:text-[32px] lg:text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] max-w-md ${
                        isDark ? 'text-white' : 'text-[#0C0C0D]'
                      }`}
                    >
                      {model.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] font-medium text-[#5271ff]">
                      {model.subtitle}
                    </p>

                    <p
                      className={`text-[15px] leading-[1.7] max-w-lg font-normal ${
                        isDark ? 'text-white/65' : 'text-[#52525B]'
                      }`}
                    >
                      {model.description}
                    </p>

                    <div
                      className={`pt-4 mt-2 border-t flex items-start gap-3 ${
                        isDark ? 'border-white/10' : 'border-[#EBEBEF]'
                      }`}
                    >
                      <Sparkles
                        size={14}
                        className={`mt-1 shrink-0 ${
                          isDark ? 'text-[#ff3131]' : 'text-[#5271ff]'
                        }`}
                      />
                      <div>
                        <div
                          className={`text-[10px] font-semibold uppercase tracking-[0.16em] mb-1 ${
                            isDark ? 'text-white/60' : 'text-[#71717A]'
                          }`}
                        >
                          Best for
                        </div>
                        <p
                          className={`text-[13px] leading-relaxed ${
                            isDark ? 'text-white/70' : 'text-[#52525B]'
                          }`}
                        >
                          {model.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          Delivery Locations
         ========================================== */}
      <section className="relative pt-4 sm:pt-4 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 pb-12 sm:pb-16"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#5271ff] inline-block shadow-[0_0_6px_rgba(82,113,255,0.7)]"
              />
              <span>Delivery Model</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Ghana-led. UK-led."
              highlight="Built around you."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Ghana Delivery Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="lg:col-span-1 relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#0C0C0D] to-[#15151a] text-white p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.35)]"
            >
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <motion.div
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
                className="absolute -top-24 -right-24 w-[320px] h-[320px] bg-[#5271ff] blur-[100px] rounded-full opacity-30 pointer-events-none"
              />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 rounded-2xl bg-[#5271ff]/15 border border-[#5271ff]/30 backdrop-blur-md flex items-center justify-center text-[#5271ff]"
                  >
                    <MapPin size={18} />
                  </motion.div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Ghana Delivery
                  </span>
                </div>

                <p className="text-[15px] leading-[1.7] text-white/70">
                  Access skilled, English-speaking professionals with GMT alignment and a more efficient operating cost base.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {GHANA_STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.1,
                                                ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ x: 4 }}
                      className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/8 last:border-0 cursor-default"
                    >
                      <span className="text-[20px] sm:text-[24px] font-semibold text-white tracking-tight leading-none">
                        {stat.isText ? (
                          stat.suffix
                        ) : (
                          <>
                            <AnimatedCounter
                              value={String(stat.value)}
                              duration={1.8}
                            />
                            <span>{stat.suffix}</span>
                          </>
                        )}
                      </span>
                      <span className="text-[11px] text-right text-white/55 leading-tight max-w-[140px]">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-2 flex items-start gap-3">
                  <Sparkles size={14} className="mt-1 shrink-0 text-[#ff3131]" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60 mb-1">
                      Best for
                    </div>
                    <p className="text-[13px] leading-relaxed text-white/70">
                      Cost-efficient, scalable offshore capacity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* UK Delivery Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="lg:col-span-1 relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#F9F9FB] to-[#F0F0F3] border border-[#EBEBEF] hover:border-[#5271ff]/40 p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.2)]"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-11 h-11 rounded-2xl bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]"
                  >
                    <Globe2 size={18} />
                  </motion.div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71717A]">
                    UK Delivery
                  </span>
                </div>

                <p className="text-[15px] leading-[1.7] text-[#52525B]">
                  Access UK-based professionals where proximity, operational requirements or closer collaboration matter.
                </p>

                <div className="pt-4 mt-4 border-t border-[#EBEBEF] flex items-start gap-3">
                  <Sparkles size={14} className="mt-1 shrink-0 text-[#5271ff]" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-1">
                      Best for
                    </div>
                    <p className="text-[13px] leading-relaxed text-[#52525B]">
                      Businesses requiring in-country proximity, industry-specific compliance or a closer working rhythm.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hybrid Delivery Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="lg:col-span-1 relative rounded-[28px] sm:rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(82,113,255,0.4)]"
            >
              <div className="relative h-full bg-gradient-to-br from-[#5271ff] to-[#6a5cff] p-8 sm:p-10 text-white">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <motion.div
                  animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                  className="absolute -top-24 -right-24 w-[280px] h-[280px] bg-[#ff3131] blur-[100px] rounded-full opacity-30 pointer-events-none"
                />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center text-white"
                    >
                      <Sparkles size={18} />
                    </motion.div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      Hybrid Delivery
                    </span>
                  </div>

                  <p className="text-[15px] leading-[1.7] text-white/90">
                    Combine UK oversight and Ghana-based capacity around the requirements of your operation.
                  </p>

                  <div className="pt-4 mt-4 border-t border-white/20 flex items-start gap-3">
                    <Sparkles size={14} className="mt-1 shrink-0 text-white/90" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 mb-1">
                        Best for
                      </div>
                      <p className="text-[13px] leading-relaxed text-white/90">
                        Businesses wanting senior UK-level oversight paired with efficient Ghana-based delivery capacity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          Business Case
         ========================================== */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#5271ff]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff3131]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 pb-12 sm:pb-16"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
              <span>The Business Case</span>
            </div>
            <AnimatedH1
              as="h2"
              text="A stronger business case"
              highlight="for outsourcing."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[28px] sm:rounded-[36px] bg-[#0C0C0D] text-white p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
              className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#5271ff] blur-[140px] rounded-full opacity-[0.22] pointer-events-none"
            />
            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
              className="absolute -bottom-32 -left-32 w-[440px] h-[440px] bg-[#ff3131] blur-[140px] rounded-full opacity-[0.18] pointer-events-none"
            />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pb-10 border-b border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="space-y-3 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5271ff]/15 border border-[#5271ff]/30 backdrop-blur-md flex items-center justify-center text-[#5271ff]">
                      <Sparkles size={16} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Genesis Seat Cost
                    </span>
                  </div>
                  <div className="text-[42px] sm:text-[54px] lg:text-[64px] font-bold tracking-tight leading-none text-white">
                    £<AnimatedCounter value="600" duration={1.8} />
                    <span className="text-[18px] sm:text-[22px] lg:text-[26px] text-white/60 font-medium ml-1">
                      /month
                    </span>
                  </div>
                  <p className="text-[13px] text-white/55 leading-relaxed">
                    Approximate cost per dedicated Genesis seat
                  </p>
                </motion.div>

                <div className="hidden lg:block w-px bg-white/10 mx-auto" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="space-y-3 cursor-default lg:col-start-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/70">
                      <Building2 size={16} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Comparable In-house
                    </span>
                  </div>
                  <div className="text-[42px] sm:text-[54px] lg:text-[64px] font-bold tracking-tight leading-none text-white/70">
                    £<AnimatedCounter value="2800" duration={1.8} />
                    <span className="text-[18px] sm:text-[22px] lg:text-[26px] text-white/40 font-medium ml-1">
                      +/month
                    </span>
                  </div>
                  <p className="text-[13px] text-white/55 leading-relaxed">
                    Estimated equivalent UK-based in-house resource
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-[#5271ff]/20 to-[#ff3131]/20 border border-white/20 backdrop-blur-md">
                    <TrendingDown size={16} className="text-[#ff3131]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Potential Savings
                    </span>
                  </div>
                  <div className="text-[68px] sm:text-[88px] lg:text-[104px] font-bold tracking-tighter leading-[0.9] bg-gradient-to-r from-[#5271ff] via-[#a855f7] to-[#ff3131] bg-clip-text text-transparent">
                    Up to <AnimatedCounter value="75" duration={2} />%
                  </div>
                </div>

                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/70 max-w-md lg:max-w-sm">
                  Reduce costs associated with recruitment, salaries, benefits, training, HR overhead, office infrastructure and equipment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 pt-8 border-t border-white/10"
              >
                <p className="text-[11px] leading-relaxed text-white/40 max-w-3xl italic">
                  Illustrative figures based on the Genesis Outsourcing operating model. Actual costs and savings depend on role, location, seniority, team structure and engagement requirements.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          Bottom CTA
         ========================================== */}
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
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0C0C0D]/95 via-[#0C0C0D]/85 to-[#0C0C0D]/90" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '56px 56px',
              }}
            />
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
              className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#5271ff] blur-[140px] rounded-full opacity-[0.22] pointer-events-none"
            />
            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
              className="absolute -bottom-32 -left-32 w-[440px] h-[440px] bg-[#ff3131] blur-[140px] rounded-full opacity-[0.18] pointer-events-none"
            />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85"
                >
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shadow-[0_0_8px_rgba(255,49,49,0.9)]"
                  />
                  <span>Next Steps</span>
                </motion.div>

                <div className="[&_*]:!text-white">
                  <AnimatedH1
                    as="h2"
                    dark={true}
                    text="Let's build your"
                    highlight="offshore team."
                  />
                </div>

                <p className="text-[14px] sm:text-[15px] text-white/75 max-w-lg font-normal leading-[1.65]">
                  From a single specialist to an entire function — Genesis delivers dedicated professionals built around your business.
                </p>

                <div className="pt-1">
                  <motion.button
                    onClick={() => onBookCallForService('General Services Inquiry')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-[#0C0C0D] hover:bg-white/95 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    <span className="text-[13px] sm:text-[14px] font-medium tracking-tight">
                      Book a Conversation
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#0C0C0D] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={13} strokeWidth={2.4} />
                    </span>
                  </motion.button>
                </div>
              </div>

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
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between pb-2.5 border-b border-white/15 cursor-default"
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
    </div>
  );
};