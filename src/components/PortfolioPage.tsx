import React from 'react';
import { ArrowLeft, ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { Project } from '../types';
import { AnimatedH1 } from './common/AnimatedText';

interface PortfolioPageProps {
  onBackToHome: () => void;
  onSelectProject: (project: Project) => void;
  onBookCall: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onBackToHome,
  onSelectProject,
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
            Consilio • Portfolio
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ff3131]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3131] inline-block shadow-[0_0_6px_rgba(255,49,49,0.7)]" />
            <span>Case Studies</span>
          </div>
          <AnimatedH1
            as="h1"
            text="Decisions that"
            highlight="compound."
          />
          <p className="text-[19px] sm:text-[22px] text-[#52525B] leading-relaxed max-w-3xl">
            Explore how we partner with enterprise leaders and high-growth founders to unlock rapid EBITDA expansion, category moats, and operational velocity.
          </p>
        </div>

        {/* Case Studies Cards List */}
        <div className="space-y-16">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#F9F9FB] rounded-[36px] overflow-hidden border border-[#EBEBEF] hover:border-[#D1D5DB] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14">
                {/* Visual Image */}
                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#0C0C0D] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">
                      Case #{project.number} • {project.year}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white group-hover:bg-gradient-to-r group-hover:from-[#5271ff] group-hover:to-[#ff3131] group-hover:text-white text-[#0C0C0D] flex items-center justify-center transition-colors shadow-xs">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h2 className="text-[26px] sm:text-[34px] font-semibold text-[#0C0C0D] tracking-tight group-hover:text-[#5271ff] transition-colors leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-base text-[#52525B] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-4 rounded-2xl bg-white border border-[#EBEBEF] flex items-start gap-3">
                    <TrendingUp size={20} className="text-[#ff3131] shrink-0 mt-0.5" />
                    <div className="text-sm font-medium text-[#0C0C0D]">
                      {project.impact}
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-gray-100 text-center">
                        <div className="text-lg font-bold text-[#0C0C0D]">{m.value}</div>
                        <div className="text-[11px] text-gray-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-12 rounded-3xl bg-[#0C0C0D] text-white text-center space-y-6">
          <AnimatedH1
            as="h3"
            dark={true}
            text="Ready to architect your own strategic"
            highlight="breakthrough?"
          />
          <p className="text-white/70 max-w-xl mx-auto text-base">
            Every engagement begins with an NDA and a private dialogue with a Consilio Managing Partner.
          </p>
          <div>
            <button
              onClick={onBookCall}
              className="px-8 py-3.5 rounded-full bg-white text-[#0C0C0D] hover:bg-gray-100 font-medium text-sm transition-colors cursor-pointer shadow-md"
            >
              Book an executive dialogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
