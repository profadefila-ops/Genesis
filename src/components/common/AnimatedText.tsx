import React from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface AnimatedH1Props {
  text: string;
  highlight?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  dark?: boolean;
}

export const AnimatedH1: React.FC<AnimatedH1Props> = ({
  text,
  highlight,
  className = '',
  as = 'h2',
  dark = false,
}) => {
  const ref = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.08,
      },
    },
  };

  const wordMaskVariants = {
    hidden: { y: '110%', opacity: 0, filter: 'blur(6px)', rotateX: 25 },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionComponent = as === 'h1' ? motion.h1 : as === 'h3' ? motion.h3 : as === 'h4' ? motion.h4 : as === 'div' ? motion.div : motion.h2;

  // Split lines by newline if present
  const lines = text.split('\n');

  // Base font size & text design exactly matching "Clarity for your biggest decisions."
  const baseClasses = `font-['Plus_Jakarta_Sans',sans-serif] text-[30px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[48px] leading-[1.12] font-semibold tracking-[-0.03em] ${
    dark ? 'text-white' : 'text-[#0C0C0D]'
  }`;

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`relative select-text ${baseClasses} ${className}`}
    >
      {lines.map((line, lineIdx) => {
        const words = line.trim().split(/\s+/).filter(Boolean);
        const isLastLine = lineIdx === lines.length - 1;

        return (
          <span key={lineIdx} className={lines.length > 1 ? 'block' : 'inline'}>
            {words.map((word, wordIdx) => (
              <span
                key={wordIdx}
                className="inline-block overflow-hidden mr-[0.24em] align-top py-0.5"
              >
                <motion.span
                  variants={wordMaskVariants}
                  whileHover={{ y: -3, color: '#5271ff' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="inline-block cursor-default transition-colors duration-200"
                >
                  {word}
                </motion.span>
              </span>
            ))}

            {isLastLine && highlight && (
              <span className="inline-block overflow-hidden align-top py-0.5 ml-[0.05em]">
                <motion.span
                  variants={wordMaskVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="inline-block bg-gradient-to-r from-[#5271ff] via-[#a855f7] to-[#ff3131] bg-clip-text text-transparent font-bold cursor-default drop-shadow-xs"
                >
                  {highlight}
                </motion.span>
              </span>
            )}
          </span>
        );
      })}
    </MotionComponent>
  );
};

export const AnimatedHeadingTitle = AnimatedH1;

interface SplitTextRevealProps {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
  delay?: number;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  highlight,
  className = '',
  highlightClassName = 'bg-gradient-to-r from-[#5271ff] to-[#ff3131] bg-clip-text text-transparent',
  delay = 0.1,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.055,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden align-top mr-[0.22em]">
          <motion.span
            variants={wordVariants}
            whileHover={{ y: -2, color: '#5271ff' }}
            className="inline-block transition-colors"
          >
            {word}
          </motion.span>
        </span>
      ))}
      {highlight && (
        <span className="inline-block overflow-hidden align-top">
          <motion.span
            variants={wordVariants}
            whileHover={{ scale: 1.05 }}
            className={`inline-block ${highlightClassName}`}
          >
            {highlight}
          </motion.span>
        </span>
      )}
    </motion.span>
  );
};
