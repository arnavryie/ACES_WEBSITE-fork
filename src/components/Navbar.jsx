import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InstagramIcon, LinkedinIcon, GithubIcon } from './SocialIcons';
import WebGLBackground from './WebGLBackground';

const MENU_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'who-are-we', label: 'Who Are We', path: '/who-are-we' },
  { id: 'golden-moments', label: 'Golden Moments', path: '/golden-moments' },
  { id: 'gallery', label: 'Gallery', path: '/gallery' },
  { id: 'social', label: 'Social', path: '/social' },
  { id: 'members', label: 'Members', path: '/members' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy on home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = MENU_ITEMS.length - 1; i >= 0; i--) {
        const item = MENU_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle cross-page scrolling to sections
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: location.state.scrollTo === 'home' ? 0 : y, behavior: 'smooth' });
          setActiveSection(location.state.scrollTo);
        }
      }, 150);
      
      // Clear the state so it doesn't trigger again on refresh
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleNav = (item) => {
    setIsOpen(false);
    
    // When on Home page, all navbar items scroll to their respective sections on the Home page
    if (location.pathname === '/') {
      const el = document.getElementById(item.id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: item.id === 'home' ? 0 : y, behavior: 'smooth' });
        setActiveSection(item.id);
        return;
      }
    }

    // When on dedicated pages (/members or /gallery):
    if (item.id === 'gallery' || item.id === 'members') {
      if (location.pathname === item.path) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.path);
      }
      return;
    }

    // For all other items, redirect to Home page and scroll to that section
    navigate('/', { state: { scrollTo: item.id } });
  };

  const isItemActive = (item) => {
    if (location.pathname === '/') {
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      {/* ─── Desktop Floating Pill Navigation Bar (Windows / Large Screens Only) ─── */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-[#e8e6e1] rounded-full transition-all duration-300 ${scrolled
          ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-primary/25'
          : 'shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
          }`}
        aria-label="Main Navigation"
      >
        {/* ACES Logo Pill with Phoenix */}
        <button
          onClick={() => handleNav(MENU_ITEMS[0])}
          className="flex items-center gap-2 pl-1.5 pr-3 py-1 text-left group focus:outline-none cursor-pointer border-r border-muted/30 mr-1"
          title="ACES Home"
        >
          <div className="w-8 h-8 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src="/mascot.svg" alt="ACES Mascot" className="w-full h-full object-contain" />
          </div>
          {/* <span className="font-display font-black tracking-wider text-primary text-sm">
            ACES
          </span> */}
        </button>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {MENU_ITEMS.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${active
                  ? 'text-white bg-primary shadow-[0_2px_12px_rgba(178,43,47,0.3)]'
                  : 'text-muted hover:text-primary hover:bg-light-tint'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─── Mobile Floating Hamburger Button (Small Screens Only) ─── */}
      <div className="fixed top-5 right-5 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative p-3 rounded-full bg-white/95 text-muted border border-muted/50 hover:border-primary hover:text-primary shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none group cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
          title="Open Navigation Menu"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 text-current transition-transform group-hover:scale-110" />

        </button>
      </div>

      {/* ─── Slide-out Sidebar Drawer (from Right) ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-dark-overlay/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 h-[100dvh] z-50 w-80 max-w-[85vw] bg-white border-l border-muted/50 shadow-2xl flex flex-col justify-between overscroll-none overflow-hidden"
            >
              <WebGLBackground 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} 
              />
              
              {/* Content wrappers need relative z-index to stay above the absolute background */}
              <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                {/* Drawer Header */}
                <div className="p-5 border-b border-muted/30 bg-light-tint/60 pointer-events-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src="/aces-logo-gold.png" alt="ACES Gold Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-serif font-black tracking-[0.15em] text-primary text-xl">
                          ACES
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-muted hover:text-primary bg-white rounded-[4px] border border-muted/50 hover:border-primary transition-all duration-150 focus:outline-none cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto overscroll-none px-6 py-6 pointer-events-auto">
                <nav className="flex flex-col space-y-4" role="menu">
                  {MENU_ITEMS.map((item) => {
                    const active = isItemActive(item);
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleNav(item)}
                        className={`group cursor-pointer py-2 border-r-2 pr-3 transition-all duration-150 ${active ? 'border-primary' : 'border-transparent hover:border-primary'
                          }`}
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-base font-medium group-hover:text-primary group-hover:translate-x-1 transition-all duration-150 inline-block ${active ? 'text-primary font-semibold' : 'text-muted'
                            }`}>
                            {item.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer with Social Icons */}
              <div className="p-5 border-t border-muted/30 bg-transparent flex flex-col items-center justify-center space-y-3 pointer-events-auto">
                <div className="flex items-center justify-center space-x-5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none cursor-pointer text-muted hover:text-primary"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none cursor-pointer text-muted hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 active:scale-95 transition-all duration-150 inline-flex items-center justify-center focus:outline-none cursor-pointer text-muted hover:text-primary"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-[10px] text-muted font-medium tracking-wider text-center">
                  ACES • DIT PUNE
                </p>
              </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
