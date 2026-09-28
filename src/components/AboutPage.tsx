import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Layers,
  Sparkles,
  CheckCircle2,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { AnimatedH1 } from './common/AnimatedText';

interface AboutPageProps {
  onBackToHome: () => void;
  onExploreSolutions: () => void;
  onBookCall: () => void;
}

/* ---------- Content Data ---------- */

const BELIEFS = [
  {
    title: 'People drive performance.',
    description: 'The right people, processes and expectations can transform an operation.',
  },
  {
    title: 'Outsourcing should feel integrated.',
    description: 'Your outsourced team should operate as an extension of your business.',
  },
  {
    title: "Efficiency shouldn't compromise quality.",
    description: "The goal isn't simply lower costs. It's a better operating model.",
  },
  {
    title: "Growth shouldn't create unnecessary complexity.",
    description: 'We handle the operational heavy lifting so you can focus on growing your business.',
  },
];

const WHY_GENESIS = [
  {
    label: 'Your team.',
    description: 'Dedicated professionals built around your requirements.',
    icon: Users,
  },
  {
    label: 'Your processes.',
    description: 'Your systems, workflows and standards.',
    icon: Layers,
  },
  {
    label: 'Your culture.',
    description: 'People aligned with how your organisation operates.',
    icon: Heart,
  },
  {
    label: 'Your growth.',
    description: 'Continuous monitoring, optimisation and support as you scale.',
    icon: TrendingUp,
  },
];

const ACCOUNTABILITY = [
  {
    title: 'Data Protection',
    description: 'GDPR-aligned data handling, controlled access and secure cloud infrastructure.',
    icon: Shield,
  },
  {
    title: 'Accountability',
    description: 'Dedicated account management, KPI reporting and regular performance reviews.',
    icon: CheckCircle2,
  },
  {
    title: 'Continuous Improvement',
    description: 'Structured feedback to continuously improve workflows and performance.',
    icon: Compass,
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onExploreSolutions,
  onBookCall,
}) => {
  return (
    <div className="bg-white">
      {/* ==========================================
          Full-Width Hero with Background Image
         ========================================== */}
      <section className="relative w-full h-[70vh] min-h-[520px] max-h-[780px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&auto=format&fit=crop&q=80"
          alt="Genesis Boardroom Working Session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/95 via-[#0C0C0D]/60 to-[#0C0C0D]/40" />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[#5271ff]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[350px] bg-[#ff3131]/15 rounded-full blur-[140px] pointer-events-none" />
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
              <span>Genesis · About Us</span>
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
                <span>Who We Are</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="[&_h1]:!text-white [&_h1_span]:!text-white [&_h1_.bg-clip-text]:!text-transparent"
              >
                <AnimatedH1
                  as="h1"
                  text="Strategy rooted in"
                  highlight="operator reality."
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16px] sm:text-[18px] leading-[1.7] text-white/75 max-w-2xl font-normal"
              >
                We founded Genesis on a straightforward premise: the most critical
                business decisions should never be delegated to junior consultants
                armed with abstract theoretical templates.
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
          Mission & Vision
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
            className="flex items-center gap-3 mb-10 sm:mb-14"
          >
            <span className="w-10 h-px bg-[#0C0C0D]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              Purpose · Direction
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#0C0C0D] to-[#15151a] text-white overflow-hidden"
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
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#5271ff] blur-[120px] rounded-full pointer-events-none"
              />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#5271ff]/15 border border-[#5271ff]/30 backdrop-blur-md flex items-center justify-center text-[#5271ff]">
                    <Target size={20} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Our Mission
                  </span>
                </div>

                <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-semibold tracking-[-0.02em] leading-[1.15] text-white max-w-md">
                  To define the future of{' '}
                  <span className="bg-gradient-to-r from-[#5271ff] via-[#a855f7] to-[#ff3131] bg-clip-text text-transparent">
                    global work.
                  </span>
                </h2>

                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-white/65 max-w-lg font-normal">
                  To connect ambitious businesses with world-class international talent, making it easier to reduce operational costs, increase capacity and scale through seamless offshore partnerships.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#F9F9FB] to-[#F0F0F3] border border-[#EBEBEF] overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]">
                    <Eye size={20} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71717A]">
                    Our Vision
                  </span>
                </div>

                <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-semibold tracking-[-0.02em] leading-[1.15] text-[#0C0C0D] max-w-md">
                  Great talent{' '}
                  <span className="bg-gradient-to-r from-[#5271ff] via-[#a855f7] to-[#ff3131] bg-clip-text text-transparent">
                    without borders.
                  </span>
                </h2>

                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#52525B] max-w-lg font-normal">
                  A world where geography does not limit businesses from accessing the people they need to grow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          What We Believe
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
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12"
          >
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-[#5271ff] inline-block shadow-[0_0_6px_rgba(82,113,255,0.7)]"
                />
                <span>What We Believe</span>
              </div>
              <AnimatedH1
                as="h2"
                text="Principles that shape"
                highlight="how we work."
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {BELIEFS.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative p-7 sm:p-8 rounded-[24px] bg-white border border-[#EBEBEF] hover:border-[#5271ff]/30 hover:shadow-[0_20px_45px_-15px_rgba(82,113,255,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#5271ff]/10 via-[#ff3131]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  <span className="text-[11px] font-mono text-[#A1A1AA] group-hover:text-[#5271ff] transition-colors pt-1 shrink-0">
                    0{index + 1}
                  </span>
                  <div className="space-y-2.5">
                    <h3 className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-[#0C0C0D] leading-snug">
                      {belief.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#52525B]">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Why Genesis + Accountability
         ========================================== */}
      <section className="relative pt-4 sm:pt-4 pb-16 sm:pb-20 bg-white overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#5271ff]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4 pb-10 sm:pb-12"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0D]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
              <span>Why Genesis</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Built around"
              highlight="your business."
            />
            <p className="text-[16px] sm:text-[17px] text-[#52525B] leading-relaxed max-w-2xl">
              Every engagement is shaped by your requirements, your processes and your culture — not a template.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12 sm:mb-16">
            {WHY_GENESIS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative p-7 rounded-[24px] bg-[#F9F9FB] border border-[#EBEBEF] hover:border-[#5271ff]/40 hover:shadow-[0_20px_45px_-15px_rgba(82,113,255,0.15)] transition-all duration-300 min-h-[220px] flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#5271ff]/12 via-[#ff3131]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#EBEBEF] text-[#5271ff] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#5271ff] group-hover:to-[#6a5cff] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-[#A1A1AA]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-8 space-y-2">
                    <h3 className="text-[17px] font-semibold tracking-tight text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors duration-200">
                      {item.label}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-[#52525B]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[28px] sm:rounded-[36px] bg-[#0C0C0D] text-white p-8 sm:p-12 lg:p-14 overflow-hidden"
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
              animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
              className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#5271ff] blur-[120px] rounded-full opacity-[0.22] pointer-events-none"
            />
            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
              className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#ff3131] blur-[120px] rounded-full opacity-[0.18] pointer-events-none"
            />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white">
                  <Sparkles size={18} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Built for Accountability
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
                {ACCOUNTABILITY.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center text-[#5271ff] group-hover:text-[#ff3131] group-hover:border-white/30 transition-colors">
                          <Icon size={16} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-relaxed text-white/60 pl-12">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80"
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
                    onClick={onBookCall}
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
    </div>
  );
};