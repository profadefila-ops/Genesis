import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface NumberCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
  padLength?: number;
  ease?: string;
  start?: string;
  className?: string;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({
  value,
  duration = 1.8,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  padZero = false,
  padLength = 2,
  ease = 'power3.out',
  start = 'top 90%',
  className = '',
}) => {
  const formatNumber = (val: number) => {
    if (padZero) {
      const rounded = Math.round(val);
      return String(rounded).padStart(padLength, '0');
    }
    if (decimals > 0) {
      return val.toFixed(decimals);
    }
    return Math.round(val).toLocaleString();
  };

  const [displayValue, setDisplayValue] = useState<string>(() => formatNumber(0));
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const proxy = { val: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          if (animatedRef.current) return;
          animatedRef.current = true;

          gsap.to(proxy, {
            val: value,
            duration,
            delay,
            ease,
            onUpdate: () => {
              setDisplayValue(formatNumber(proxy.val));
            },
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, duration, delay, decimals, padZero, padLength, ease, start]);

  return (
    <span ref={elementRef} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

