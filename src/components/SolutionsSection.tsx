import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SolutionItem } from '../types';
import { AnimatedH1 } from './common/AnimatedText';
import { useGsapTilt } from '../hooks/useGsapMagnetic';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onExploreMore: () => void;
}

/* New content mapped into the same card shape */
const CAPABILITY_ITEMS: SolutionItem[] = [
  {
    id: 'talent-hr',
    number: '01',
    category: 'People',
    title: 'Talent & HR',
    tagline: 'Hire, onboard, and scale your team',
    description: '',
    deliverables: [],
    impactMetric: '',
    impactLabel: '',
    image: '',
  },
  {
    id: 'customer-care',
    number: '02',
    category: 'Support',
    title: 'Customer Care',
    tagline: 'Always-on service that feels in-house',
    description: '',
    deliverables: [],
    impactMetric: '',
    impactLabel: '',
    image: '',
  },
  {
    id: 'finance-operations',
    number: '03',
    category: 'Operations',
    title: 'Finance & Operations',
    tagline: 'Run lean, stay compliant, move fast',
    description: '',
    deliverables: [],
    impactMetric: '',
    impactLabel: '',
    image: '',
  },
  {
    id: 'tech-growth',
    number: '04',
    category: 'Technology',
    title: 'Tech & Growth',
    tagline: 'Build, ship, and scale your product',
    description: '',
    deliverables: [],
    impactMetric: '',
    impactLabel: '',
    image: '',
  },
];

const SolutionCardItem: React.FC<{
  item: SolutionItem;
  index: number;
  onSelect: () => void;
}> = ({ item, index, onSelect }) => {
  const cardTiltRef = useGsapTilt<HTMLDivElement>();

  return (
    <motion.div
      ref={cardTiltRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      onClick={onSelect}
      className="group bg-white rounded-[28px] border border-[#E5E7EB] hover:border-[#5271ff] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_rgba(82,113,255,0.12)] cursor-pointer min-h-[340px] sm:min-h-[360px] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#ff3131]/15 via-[#5271ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center justify-between">
        <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 bg-white group-hover:border-[#ff3131]/40 group-hover:text-[#ff3131] transition-colors">
          {item.category}
        </span>

        <span className="w-10 h-10 rounded-full flex items-center justify-center text-[#0C0C0D] group-hover:text-[#5271ff] group-hover:bg-[#5271ff]/10 transition-all duration-300">
          <ArrowUpRight size={22} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <div className="my-8">
        <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#0C0C0D] tracking-tight leading-snug group-hover:text-[#5271ff] transition-colors duration-200">
          {item.title}
        </h3>
      </div>

      <div className="flex items-end justify-between pt-6 border-t border-gray-100/80">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-[56px] sm:text-[64px] font-bold text-[#5271ff] group-hover:text-[#ff3131] leading-none tracking-tighter select-none inline-block transition-colors duration-300"
        >
          {item.number}
        </motion.span>

        <span className="text-[13px] sm:text-[14px] text-[#52525B] leading-snug max-w-[140px] text-right font-normal">
          {item.tagline}
        </span>
      </div>
    </motion.div>
  );
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onExploreMore,
}) => {
  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 bg-white"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-4"
          >
            <AnimatedH1
              as="h2"
              text={"The capacity to grow. \nThe flexibility to"}
              highlight="adapt."
            />
            <p className="text-[16px] sm:text-[17px] text-[#52525B] leading-relaxed max-w-xl">
              You don't always need more infrastructure. Sometimes you simply need more capable people.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#52525B] leading-relaxed max-w-xl">
              Genesis provides dedicated professionals and managed teams across the functions that keep your business operating and growing.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onExploreMore}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 hover:border-black bg-white text-[#0C0C0D] transition-colors duration-200 cursor-pointer text-sm font-medium shadow-xs self-start lg:self-end"
          >
            <span>Explore More</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CAPABILITY_ITEMS.map((item, index) => (
            <SolutionCardItem
              key={item.id}
              item={item}
              index={index}
              onSelect={() => onSelectSolution(item)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};