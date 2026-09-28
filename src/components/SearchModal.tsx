import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowUpRight,
  BookOpen,
  Layers,
  Users,
  Sparkles,
  UserCog,
  FileText,
  Clock,
  Mail,
  Building2,
} from 'lucide-react';
import {
  SOLUTIONS_ITEMS,
  BLOG_POSTS,
  TEAM_MEMBERS,
} from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

/* Quick links shown when the search input is empty */
const QUICK_LINKS = [
  { label: 'Services', target: 'services', desc: 'Talent, Care, Finance, Tech', icon: Layers, accent: '#5271ff' },
  { label: 'About Us', target: 'about', desc: 'Mission, vision & principles', icon: Users, accent: '#ff3131' },
  { label: 'Contact', target: 'contact', desc: 'Book a call or send a message', icon: Mail, accent: '#5271ff' },
  { label: 'Blog & Insights', target: 'blog', desc: 'Strategy and execution writing', icon: BookOpen, accent: '#ff3131' },
  { label: 'Our Approach', target: 'how-we-work', desc: 'From conversation to embedded team', icon: Sparkles, accent: '#5271ff' },
  { label: 'Engagement Models', target: 'services', desc: 'Dedicated vs Managed teams', icon: Building2, accent: '#ff3131' },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const filteredSolutions = q
    ? SOLUTIONS_ITEMS.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.tagline.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : [];

  const filteredPosts = q
    ? BLOG_POSTS.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q)
      )
    : [];

  const filteredTeam = q
    ? TEAM_MEMBERS.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.role.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    filteredSolutions.length + filteredPosts.length + filteredTeam.length;

  const handleSelect = (target: string) => {
    onClose();
    onNavigate(target);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-28 px-4 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-[0_30px_80px_-20px_rgba(12,12,13,0.5)] border border-[#EBEBEF] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ==========================================
              Search Input Bar
             ========================================== */}
          <div className="relative p-5 border-b border-[#EBEBEF] flex items-center gap-3">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#5271ff]/40 to-transparent" />

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5271ff]/12 to-[#ff3131]/12 text-[#5271ff] flex items-center justify-center shrink-0 border border-[#5271ff]/15">
              <Search size={18} />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, insights, team..."
              className="flex-1 bg-transparent text-[16px] text-[#0C0C0D] placeholder-[#A1A1AA] focus:outline-hidden tracking-tight"
            />

            {query && (
              <button
                onClick={() => setQuery('')}
                className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-[#71717A] hover:text-[#0C0C0D] transition-colors cursor-pointer px-2"
              >
                Clear
              </button>
            )}

            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full bg-[#0C0C0D]/5 hover:bg-[#0C0C0D]/10 text-[#4A4A4D] hover:text-[#0C0C0D] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* ==========================================
              Results Container
             ========================================== */}
          <div className="max-h-[65vh] overflow-y-auto p-4 space-y-5">
            {/* Empty state: quick links */}
            {!q && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131]" />
                  <div className="text-[10px] font-semibold text-[#71717A] uppercase tracking-[0.18em]">
                    Quick Navigation
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {QUICK_LINKS.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.button
                        key={link.label}
                        whileHover={{ y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        onClick={() => handleSelect(link.target)}
                        className="group p-3 rounded-2xl bg-[#F9F9FB] hover:bg-white border border-[#EBEBEF] hover:border-[#5271ff]/30 flex items-center gap-3 text-left transition-all cursor-pointer"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                          style={{
                            backgroundColor: `${link.accent}15`,
                            color: link.accent,
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[13px] font-semibold text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors">
                            {link.label}
                          </div>
                          <div className="text-[11px] text-[#71717A] truncate">
                            {link.desc}
                          </div>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-[#A1A1AA] group-hover:text-[#ff3131] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Empty search results */}
            {q && totalResults === 0 && (
              <div className="py-14 flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#F9F9FB] border border-[#EBEBEF] flex items-center justify-center text-[#A1A1AA]">
                  <Search size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[15px] font-semibold text-[#0C0C0D]">
                    No results for "{query}"
                  </div>
                  <div className="text-[12px] text-[#71717A]">
                    Try a different search term or browse the quick links above.
                  </div>
                </div>
              </div>
            )}

            {/* Services matches */}
            {filteredSolutions.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 px-3 pt-1">
                  <Layers size={11} className="text-[#5271ff]" />
                  <div className="text-[10px] font-semibold text-[#71717A] uppercase tracking-[0.18em]">
                    Services
                  </div>
                </div>
                {filteredSolutions.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    onClick={() => handleSelect('services')}
                    className="group w-full text-left p-3 rounded-xl hover:bg-[#F9F9FB] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <div className="text-[14px] font-medium text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors truncate">
                        {item.title}
                      </div>
                      <div className="text-[12px] text-[#71717A] truncate">
                        {item.tagline}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#A1A1AA] group-hover:text-[#ff3131] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Blog matches */}
            {filteredPosts.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 px-3 pt-1">
                  <BookOpen size={11} className="text-[#ff3131]" />
                  <div className="text-[10px] font-semibold text-[#71717A] uppercase tracking-[0.18em]">
                    Insights
                  </div>
                </div>
                {filteredPosts.map((post) => (
                  <motion.button
                    key={post.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    onClick={() => handleSelect('blog')}
                    className="group w-full text-left p-3 rounded-xl hover:bg-[#F9F9FB] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#F9F9FB] border border-[#EBEBEF] flex items-center justify-center text-[#71717A] shrink-0">
                        <FileText size={13} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[14px] font-medium text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors truncate">
                          {post.title}
                        </div>
                        <div className="text-[12px] text-[#71717A] flex items-center gap-1.5">
                          <span className="truncate">{post.category}</span>
                          <span className="text-[#A1A1AA]">•</span>
                          <span className="flex items-center gap-1 shrink-0">
                            <Clock size={10} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#A1A1AA] group-hover:text-[#ff3131] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Team matches */}
            {filteredTeam.length > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 px-3 pt-1">
                  <UserCog size={11} className="text-[#5271ff]" />
                  <div className="text-[10px] font-semibold text-[#71717A] uppercase tracking-[0.18em]">
                    Leadership
                  </div>
                </div>
                {filteredTeam.map((t) => (
                  <motion.button
                    key={t.id}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    onClick={() => handleSelect('about')}
                    className="group w-full text-left p-3 rounded-xl hover:bg-[#F9F9FB] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-9 h-9 rounded-full object-cover border border-[#EBEBEF] shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-[14px] font-medium text-[#0C0C0D] group-hover:text-[#5271ff] transition-colors truncate">
                          {t.name}
                        </div>
                        <div className="text-[12px] text-[#71717A] truncate">
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[#A1A1AA] group-hover:text-[#ff3131] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* ==========================================
              Footer
             ========================================== */}
          <div className="px-5 py-3 bg-[#FAFAFB] border-t border-[#EBEBEF] flex items-center justify-between text-[10px] text-[#71717A]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded border border-[#E5E7EB] bg-white font-mono text-[9px] text-[#4A4A4D]">
                  ESC
                </span>
                <span>to close</span>
              </span>
              {q && (
                <>
                  <span className="w-px h-3 bg-[#E5E7EB]" />
                  <span className="font-mono">
                    {totalResults} result{totalResults === 1 ? '' : 's'}
                  </span>
                </>
              )}
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5271ff]" />
              <span className="w-1 h-1 rounded-full bg-[#ff3131]" />
              <span className="ml-1 font-mono tracking-wider">GENESIS</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};