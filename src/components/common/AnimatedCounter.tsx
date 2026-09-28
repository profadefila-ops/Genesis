import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse the value string: e.g. "35+", "4.9/5", "3.4x", "88%", "$4.2B"
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const numericTarget = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isDecimal = match[2].includes('.');
    const decimalPlaces = isDecimal ? (match[2].split('.')[1]?.length || 1) : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Quartic ease out curve for silky deceleration
      const ease = 1 - Math.pow(1 - progress, 4);
      const currentVal = numericTarget * ease;

      const formatted = isDecimal
        ? currentVal.toFixed(decimalPlaces)
        : Math.round(currentVal).toString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};
