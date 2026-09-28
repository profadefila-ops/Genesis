import React from 'react';
import { ArrowLeft, ArrowRight, Check, HelpCircle } from 'lucide-react';
import { PRICING_PLANS, FAQS_DATA } from '../data/content';
import { AnimatedH1 } from './common/AnimatedText';

interface PricingPageProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string) => void;
  onBookCall: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onBackToHome,
  onSelectPlan,
  onBookCall,
}) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>back to overview</span>
          </button>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Consilio • Pricing
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff3131]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
            <span>Investment &amp; Models</span>
          </div>
          <AnimatedH1
            as="h1"
            text="Straightforward"
            highlight="pricing."
          />
          <p className="text-[19px] sm:text-[22px] text-[#52525B] leading-relaxed max-w-3xl">
            Clear, transparent engagement frameworks designed around enterprise outcomes — zero hourly billing surprises or speculative scope creep.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[32px] p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-[#0C0C0D] text-white border-black shadow-2xl scale-102 ring-2 ring-[#5271ff]/50'
                  : 'bg-[#F9F9FB] text-[#0C0C0D] border-[#EBEBEF] hover:border-gray-300 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-8 bg-gradient-to-r from-[#5271ff] to-[#ff3131] text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Most Requested
                </span>
              )}

              <div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      plan.isPopular ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="my-8 py-6 border-y border-current/10">
                  <div className="text-xs font-mono uppercase tracking-wider opacity-60">
                    Structure &amp; Duration
                  </div>
                  <div className="text-xl font-bold mt-1">{plan.format}</div>
                  <div className="text-xs mt-1 opacity-70">Model: {plan.fee}</div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-60">
                    Included Capabilities:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          plan.isPopular ? 'text-[#ff3131]' : 'text-[#5271ff]'
                        }`}
                      />
                      <span className={plan.isPopular ? 'text-white/90' : 'text-[#3F3F46]'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-current/10">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#5271ff] to-[#ff3131] hover:opacity-95 text-white shadow-md'
                      : 'bg-[#0C0C0D] hover:bg-black text-white'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="pt-12 space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
              Advisory FAQ
            </div>
            <AnimatedH1
              as="h2"
              text="Frequently asked"
              highlight="questions"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F9F9FB] border border-[#EBEBEF] space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#5271ff]">
                  <HelpCircle size={14} />
                  <span>{faq.category}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0C0C0D] leading-snug">
                  {faq.question}
                </h4>
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
