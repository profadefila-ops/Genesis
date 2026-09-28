import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (target: string) => void;
  activeSection: string;
  onOpenSearch: () => void;
  onBookCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
  onOpenSearch,
  onBookCall,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Blog', target: 'blog' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(12,12,13,0.05)] py-2.5 border-b border-[#0C0C0D]/5'
          : 'bg-white/60 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-hidden shrink-0"
          aria-label="Genesis Home"
        >
          <img
            src="https://pub-3e8b7c985b25437fa65904241981be21.r2.dev/TP-version.png"
            alt="Genesis"
            className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links — Pill Container */}
        <nav className="hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-[#0C0C0D]/[0.03] border border-[#0C0C0D]/[0.06] backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.target}
                onClick={() => handleLinkClick(link.target)}
                className={`relative px-3.5 py-1.5 rounded-full text-[14px] transition-all duration-200 capitalize cursor-pointer ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#4A4A4D] hover:text-[#0C0C0D] hover:bg-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] shadow-[0_4px_16px_-4px_rgba(82,113,255,0.6)]" />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Mobile Menu Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Search / Quick Connect — Pill with label */}
          <button
            onClick={onOpenSearch}
            className="group hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full border border-[#0C0C0D]/10 hover:border-[#5271ff]/40 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-200 cursor-pointer shadow-xs"
            aria-label="Search or Quick Connect"
            title="Search Genesis"
          >
            <span className="text-[13px] font-medium text-[#0C0C0D] tracking-tight">
              Search
            </span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-[0_4px_14px_-4px_rgba(82,113,255,0.6)]">
              <Search size={14} strokeWidth={2.4} />
            </span>
          </button>

          {/* Mobile-only compact search */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden w-9 h-9 rounded-full bg-gradient-to-br from-[#5271ff] to-[#ff3131] text-white flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 shadow-[0_4px_14px_-4px_rgba(82,113,255,0.6)] cursor-pointer"
            aria-label="Search"
          >
            <Search size={15} strokeWidth={2.4} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full border border-[#0C0C0D]/10 bg-white/60 backdrop-blur-md flex items-center justify-center text-[#0C0C0D] hover:bg-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#0C0C0D]/8 px-6 py-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`flex items-center justify-between text-left text-[16px] font-medium capitalize px-4 py-3 rounded-2xl transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#5271ff]/10 to-[#ff3131]/10 text-[#5271ff]'
                      : 'text-[#0C0C0D] hover:bg-[#F7F7F8]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-[#0C0C0D]/8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full py-3.5 px-5 rounded-full bg-gradient-to-r from-[#5271ff] to-[#ff3131] text-white text-[14px] font-medium hover:opacity-95 active:scale-[0.99] transition-all text-center shadow-[0_8px_24px_-8px_rgba(82,113,255,0.7)]"
            >
              Book a Conversation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}