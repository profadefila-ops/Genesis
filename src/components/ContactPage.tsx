import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
  Clock,
  Building2,
} from 'lucide-react';
import { AnimatedH1 } from './common/AnimatedText';

interface ContactPageProps {
  onBackToHome: () => void;
  onBookCall: () => void;
}

/* ============================================
   CONTENT DATA
   ============================================ */

const CONTACT_METHODS = [
  {
    title: 'Book a call',
    description: 'Schedule a 30-minute discovery call with a senior partner.',
    action: 'Book a call',
    icon: Calendar,
  },
  {
    title: 'Send an email',
    description: 'Drop us a line and we\'ll respond within one business day.',
    action: 'info@genesisoutsourcing.co',
    icon: Mail,
  },
  {
    title: 'Give us a call',
    description: 'Let’s talk about your next big idea.',
    action: '+44 204 630 6663',
    icon: MapPin,
  },
];

const FAQS = [
  {
    question: 'How quickly can we start an engagement?',
    answer:
      'Most engagements begin within 7–10 business days of initial scoping. For urgent needs, we can sometimes mobilize faster — just tell us your timeline.',
  },
  {
    question: 'What does pricing look like?',
    answer:
      'Pricing depends on the role, seniority, and engagement model (Dedicated Resource or Managed Service). Genesis seat costs start at approximately £600/month per dedicated professional.',
  },
  {
    question: 'Where are your teams based?',
    answer:
      'We combine UK-based oversight with delivery capability in Ghana. This gives you senior UK-level standards paired with efficient offshore operating costs.',
  },
  {
    question: 'How do you handle data protection?',
    answer:
      'We operate GDPR-aligned processes, controlled data access, and secure cloud infrastructure. Every engagement includes signed NDAs and strict confidentiality.',
  },
  {
    question: 'Can we start with just one specialist?',
    answer:
      'Absolutely. Many of our partnerships begin with a single dedicated professional. As your needs grow, we can scale the team around your requirements.',
  },
];

const LOCATIONS = [
  { city: 'London', region: 'United Kingdom', timezone: 'GMT' },
  { city: 'Accra', region: 'Ghana', timezone: 'GMT' },
];

/* ============================================
   FAQ ITEM
   ============================================ */

const FAQItem: React.FC<{ faq: (typeof FAQS)[0]; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[20px] bg-white border border-[#EBEBEF] hover:border-[#5271ff]/30 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6 cursor-pointer"
      >
        <span className="text-[15px] sm:text-[17px] font-semibold text-[#0C0C0D] tracking-tight pr-4 group-hover:text-[#5271ff] transition-colors">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-br from-[#5271ff] to-[#ff3131] border-transparent text-white rotate-180'
              : 'bg-white border-[#E5E7EB] text-[#0C0C0D] group-hover:border-[#5271ff]/40 group-hover:text-[#5271ff]'
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 pt-1">
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-[#52525B] max-w-2xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ============================================
   PAGE
   ============================================ */

export const ContactPage: React.FC<ContactPageProps> = ({
  onBookCall,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'Services',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally open the BookCallModal after a short delay:
    // setTimeout(() => onBookCall(), 800);
  };

  return (
    <div className="bg-white">
      {/* ==========================================
          Full-Width Hero
         ========================================== */}
            {/* ==========================================
          Full-Width Hero
         ========================================== */}
      <section className="relative w-full h-[70vh] min-h-[520px] max-h-[780px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&auto=format&fit=crop&q=80"
          alt="Genesis Contact"
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
              <span>Genesis · Contact</span>
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
                <span>Get in Touch</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="[&_h1]:!text-white [&_h1_span]:!text-white [&_h1_.bg-clip-text]:!text-transparent"
              >
                <AnimatedH1
                  as="h1"
                  text="Let's start a"
                  highlight="conversation."
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16px] sm:text-[18px] leading-[1.7] text-white/75 max-w-2xl font-normal"
              >
                Whether you're exploring offshore teams, scaling an existing function, or just want to understand your options — we'd love to hear from you.
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
          Three Contact Method Cards
         ========================================== */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 bg-white overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#5271ff]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff3131]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {CONTACT_METHODS.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.button
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  onClick={index === 0 ? onBookCall : undefined}
                  className="group relative text-left p-7 rounded-[24px] bg-[#F9F9FB] border border-[#EBEBEF] hover:border-[#5271ff]/40 transition-all duration-300 hover:shadow-[0_20px_45px_-15px_rgba(82,113,255,0.15)] overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#5271ff]/12 via-[#ff3131]/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#EBEBEF] text-[#5271ff] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#5271ff] group-hover:to-[#6a5cff] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#A1A1AA] group-hover:text-[#ff3131] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>

                  <div className="relative space-y-2">
                    <h3 className="text-[17px] font-semibold text-[#0C0C0D] tracking-tight group-hover:text-[#5271ff] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-[#52525B]">
                      {method.description}
                    </p>
                    <div className="pt-3 text-[12px] font-medium text-[#71717A] group-hover:text-[#5271ff] transition-colors">
                      {method.action}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          Contact Form + Details
         ========================================== */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white overflow-hidden">
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
              <span>Send a Message</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Tell us what you're"
              highlight="working on."
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-[28px] bg-[#F9F9FB] border border-[#EBEBEF] p-6 sm:p-10 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #0C0C0D 1px, transparent 1px), linear-gradient(to bottom, #0C0C0D 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="relative py-16 sm:py-20 flex flex-col items-center text-center space-y-5"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] flex items-center justify-center text-white shadow-[0_10px_30px_-8px_rgba(82,113,255,0.6)]"
                      >
                        <CheckCircle2 size={28} />
                      </motion.div>
                      <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#0C0C0D] tracking-tight">
                        Message received
                      </h3>
                      <p className="text-[14px] leading-relaxed text-[#52525B] max-w-sm">
                        Thank you for reaching out. A member of our team will respond within one business day.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            company: '',
                            phone: '',
                            interest: 'Services',
                            message: '',
                          });
                        }}
                        className="text-[13px] font-medium text-[#5271ff] hover:text-[#ff3131] transition-colors underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleSubmit}
                      className="relative space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                            Work email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                            Phone <span className="text-[#A1A1AA] normal-case font-normal">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+44 ..."
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                          How can we help?
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200 cursor-pointer"
                        >
                          <option>Services</option>
                          <option>Dedicated Resources</option>
                          <option>Managed Services</option>
                          <option>Pricing & Engagement Models</option>
                          <option>Something else</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71717A] mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us a little about your business and what you're looking for..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#E5E7EB] text-[14px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden focus:border-[#5271ff] focus:ring-2 focus:ring-[#5271ff]/20 transition-all duration-200 resize-none"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <p className="text-[11px] text-[#71717A] leading-relaxed max-w-xs">
                          By submitting this form, you agree to our handling of your data in line with our privacy policy.
                        </p>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0C0C0D] text-white hover:bg-black transition-colors cursor-pointer shadow-md"
                        >
                          <span className="text-[13px] sm:text-[14px] font-medium tracking-tight">
                            Send message
                          </span>
                          <span className="w-7 h-7 rounded-full bg-white text-[#0C0C0D] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={13} strokeWidth={2.4} />
                          </span>
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact details sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-4"
            >
              {/* Direct contact card */}
              <div className="relative rounded-[24px] bg-[#0C0C0D] text-white p-7 sm:p-8 overflow-hidden">
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
                  className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#5271ff] blur-[100px] rounded-full opacity-25 pointer-events-none"
                />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5271ff]/15 border border-[#5271ff]/30 backdrop-blur-md flex items-center justify-center text-[#5271ff]">
                      <Sparkles size={16} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Direct Line
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-[#5271ff] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-1">
                          Email
                        </div>
                        <div className="text-[14px] font-medium text-white hover:text-[#5271ff] transition-colors">
                          info@genesisoutsourcing.co
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-[#ff3131] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-1">
                          Phone
                        </div>
                        <div className="text-[14px] font-medium text-white hover:text-[#ff3131] transition-colors">
                          +44 204 630 6663
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-white/70 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.14em] text-white/50 mb-1">
                          Response Time
                        </div>
                        <div className="text-[14px] font-medium text-white">
                          Within 1 business day
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations card */}
              <div className="relative rounded-[24px] bg-[#F9F9FB] border border-[#EBEBEF] p-7 sm:p-8 overflow-hidden">
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff3131]/10 border border-[#ff3131]/20 flex items-center justify-center text-[#ff3131]">
                      <Building2 size={16} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71717A]">
                      Our Locations
                    </span>
                  </div>

                  <div className="space-y-3">
                    {LOCATIONS.map((loc) => (
                      <div
                        key={loc.city}
                        className="flex items-center justify-between py-2 border-b border-[#EBEBEF] last:border-0"
                      >
                        <div>
                          <div className="text-[14px] font-semibold text-[#0C0C0D]">
                            {loc.city}
                          </div>
                          <div className="text-[12px] text-[#71717A]">
                            {loc.region}
                          </div>
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5271ff] px-2.5 py-1 rounded-md bg-[#5271ff]/8">
                          {loc.timezone}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Book a call teaser */}
              <motion.button
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={onBookCall}
                className="group relative w-full text-left rounded-[24px] overflow-hidden"
              >
                <div className="relative bg-gradient-to-br from-[#5271ff] to-[#6a5cff] p-7 text-white">
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                  </div>
                  <div className="absolute -top-16 -right-16 w-[200px] h-[200px] bg-[#ff3131] blur-[80px] rounded-full opacity-30 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 mb-2">
                        Ready to talk?
                      </div>
                      <div className="text-[16px] font-semibold tracking-tight">
                        Book a 30-min call
                      </div>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-white text-[#5271ff] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-lg">
                      <ArrowUpRight size={16} strokeWidth={2.4} />
                    </span>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ
         ========================================== */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 bg-[#FAFAFB] overflow-hidden">
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff] shadow-[0_0_6px_rgba(82,113,255,0.7)]" />
              <span>Common Questions</span>
            </div>
            <AnimatedH1
              as="h2"
              text="Answers before you"
              highlight="reach out."
            />
            <p className="text-[16px] sm:text-[17px] text-[#52525B] leading-relaxed max-w-2xl">
              Quick answers to the questions we hear most often from prospective partners.
            </p>
          </motion.div>

          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Bottom CTA
         ========================================== */}
      
    </div>
  );
};