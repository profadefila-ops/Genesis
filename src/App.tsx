import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersSection } from './components/PartnersSection';
import { SolutionsSection } from './components/SolutionsSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CTATickerSection } from './components/CTATickerSection';
import { OurTeamSection } from './components/OurTeamSection';
import { BlogSection } from './components/BlogSection';
import { PreFooterCTA } from './components/PreFooterCTA';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { PortfolioPage } from './components/PortfolioPage';
import { PricingPage } from './components/PricingPage';
import { BookCallModal } from './components/BookCallModal';
import { SearchModal } from './components/SearchModal';
import { VideoModal } from './components/VideoModal';
import { ArticleModal } from './components/ArticleModal';
import { ProjectModal } from './components/ProjectModal';
import { Preloader } from './components/Preloader';
import { BlogPost, Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'about' | 'services' | 'contact' | 'portfolio' | 'pricing'
  >('home');
  const [activeSection, setActiveSection] = useState('home');

  // Preloader — shows once per browser session
 const [isLoading, setIsLoading] = useState(true);

const handlePreloaderComplete = () => {
  setIsLoading(false);
};

  // Modals
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [selectedServiceForCall, setSelectedServiceForCall] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Sync hash routing if present (#about, #services, #contact, #portfolio, #pricing)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
        setActiveSection('about');
      } else if (hash === 'services') {
        setCurrentPage('services');
        setActiveSection('services');
      } else if (hash === 'contact' || hash === 'contact-us') {
        setCurrentPage('contact');
        setActiveSection('contact');
      } else if (hash === 'portfolio') {
        setCurrentPage('portfolio');
        setActiveSection('portfolio');
      } else if (hash === 'pricing') {
        setCurrentPage('pricing');
        setActiveSection('pricing');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
        setActiveSection('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Scroll spy on homepage
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['partners', 'solutions', 'team', 'how-we-work', 'blog'];

      let current = 'home';
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = sec;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleNavigate = (target: string) => {
    if (target === 'about') {
      setCurrentPage('about');
      setActiveSection('about');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'services') {
      setCurrentPage('services');
      setActiveSection('services');
      window.location.hash = 'services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'contact') {
      setCurrentPage('contact');
      setActiveSection('contact');
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'portfolio') {
      setCurrentPage('portfolio');
      setActiveSection('portfolio');
      window.location.hash = 'portfolio';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'pricing') {
      setCurrentPage('pricing');
      setActiveSection('pricing');
      window.location.hash = 'pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setActiveSection(target);
      window.location.hash = '';
      setTimeout(() => {
        if (target === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          scrollToTarget(target);
        }
      }, 50);
      return;
    }

    setActiveSection(target);
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToTarget(target);
    }
  };

  const handleOpenBooking = (preselected?: string) => {
    setSelectedServiceForCall(preselected || '');
    setIsBookCallOpen(true);
  };

  return (
    <>
      {/* Preloader — renders above everything, hides once complete */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className="min-h-screen bg-white text-[#0C0C0D] selection:bg-[#0C0C0D] selection:text-white font-sans flex flex-col relative antialiased">
        <Navbar
          onNavigate={handleNavigate}
          activeSection={activeSection}
          onOpenSearch={() => setIsSearchOpen(true)}
          onBookCall={() => handleOpenBooking()}
        />

        <main className="flex-grow">
          {currentPage === 'about' ? (
            <AboutPage
              onBackToHome={() => handleNavigate('home')}
              onExploreSolutions={() => handleNavigate('services')}
              onBookCall={() => handleOpenBooking('Strategic Advisory Inquiry')}
            />
          ) : currentPage === 'services' ? (
            <ServicesPage
              onBackToHome={() => handleNavigate('home')}
              onBookCallForService={(title) => handleOpenBooking(`Service Scoping: ${title}`)}
            />
          ) : currentPage === 'contact' ? (
            <ContactPage
              onBackToHome={() => handleNavigate('home')}
              onBookCall={() => handleOpenBooking('Contact Page Inquiry')}
            />
          ) : currentPage === 'portfolio' ? (
            <PortfolioPage
              onBackToHome={() => handleNavigate('home')}
              onSelectProject={(proj) => setActiveProject(proj)}
              onBookCall={() => handleOpenBooking('Portfolio Strategy Inquiries')}
            />
          ) : currentPage === 'pricing' ? (
            <PricingPage
              onBackToHome={() => handleNavigate('home')}
              onSelectPlan={(plan) => handleOpenBooking(`Pricing Model: ${plan}`)}
              onBookCall={() => handleOpenBooking('Custom Strategic Retainer')}
            />
          ) : (
            <>
              {/* 1. Hero */}
              <Hero onHowWeHelpClick={() => handleNavigate('services')} />

              {/* 2. Partners & Impact */}
              <PartnersSection
                onWatchVideoClick={() => setIsVideoOpen(true)}
                onExploreSolutionsClick={() => handleNavigate('services')}
              />

              {/* 3. Solutions Section (homepage grid) */}
              <SolutionsSection
                onSelectSolution={(sol) => handleOpenBooking(sol.title)}
                onExploreMore={() => handleNavigate('services')}
              />

              {/* Marquee Ticker */}
              <MarqueeTicker />

              {/* 4. CTA Metrics */}
              <CTATickerSection onBookCall={() => handleOpenBooking()} />

              {/* 5. Our Team / How We Work */}
              <OurTeamSection onMeetAllMembersClick={() => handleNavigate('about')} />

              {/* 6. Blog / Perspectives Section */}
              <BlogSection
                onSelectPost={(post) => setActiveArticle(post)}
                onExploreMore={() => handleNavigate('blog')}
              />

              {/* 7. Pre-Footer CTA Banner */}
              <PreFooterCTA onBookCall={() => handleOpenBooking()} />
            </>
          )}
        </main>

        <Footer
          onNavigate={handleNavigate}
          onBookCall={() => handleOpenBooking()}
        />

        <BookCallModal
          isOpen={isBookCallOpen}
          onClose={() => setIsBookCallOpen(false)}
          preselectedService={selectedServiceForCall}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={handleNavigate}
        />

        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          onBookCall={() => handleOpenBooking('Engagement Overview Consultation')}
        />

        <ArticleModal
          post={activeArticle}
          onClose={() => setActiveArticle(null)}
          onBookCall={() => handleOpenBooking(activeArticle?.title)}
        />

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onBookCall={(proj) => handleOpenBooking(proj)}
        />
      </div>
    </>
  );
}