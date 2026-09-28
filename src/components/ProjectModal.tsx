import React from 'react';
import { X, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookCall: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onBookCall,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ==========================================
            Gradient Header
           ========================================== */}
        <div className="relative px-6 sm:px-8 py-5 shrink-0 overflow-hidden">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5271ff] via-[#7a4bff] to-[#ff3131]" />

          {/* Deep overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Animated ambient glows */}
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            className="absolute -top-16 -right-16 w-[200px] h-[200px] bg-white/25 blur-[80px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
            className="absolute -bottom-16 -left-16 w-[200px] h-[200px] bg-[#0C0C0D]/30 blur-[80px] rounded-full pointer-events-none"
          />

          {/* Top and bottom hairline accents */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Header content */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-mono font-bold text-white bg-white/15 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded-full uppercase tracking-[0.14em]">
                Case Study #{project.number}
              </span>
              <span className="text-[12px] font-medium text-white/85 tracking-tight">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white flex items-center justify-center cursor-pointer transition-all duration-200"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8">
          <div className="space-y-3">
            <h1 className="text-[28px] sm:text-[38px] font-bold text-[#0C0C0D] leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Client: <span className="text-black font-semibold">{project.client}</span> • {project.year}
            </p>
          </div>

          {/* Hero Banner */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Impact Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#5271ff]/5 to-[#ff3131]/5 border border-[#5271ff]/20 flex items-start gap-4">
            <TrendingUp size={24} className="text-[#ff3131] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#ff3131]">
                Verified Strategic Impact
              </div>
              <div className="text-base sm:text-lg font-medium text-[#0C0C0D] mt-1">
                {project.impact}
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0C0C0D]">Strategic Context &amp; Mandate</h3>
            <p className="text-[#52525B] text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#F9F9FB] border border-[#EBEBEF] text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#0C0C0D]">{metric.value}</div>
                <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="text-base font-bold text-[#0C0C0D]">Execution Workstreams</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-[#5271ff] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
              <blockquote className="text-base italic text-gray-800">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-[#0C0C0D]">
                    {project.testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {project.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-sm font-medium text-gray-500 hover:text-black"
            >
              Close case study
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall(project.title);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C0C0D] hover:bg-black text-white text-sm font-medium transition-colors cursor-pointer"
            >
              <span>Discuss similar mandate</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};