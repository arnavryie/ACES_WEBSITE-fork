import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  SearchX, 
  Sparkles,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { galleryItems, marqueeImages } from './galleryData';
import DriftWall from '../../components/ui/DriftWall';

export default function Gallery({ embedded = false }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Touch swipe handling for modal
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const categories = ['All', 'Hackathons', 'Workshops', 'Cultural', 'Technical', 'Leadership'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  // Split marquee images into 4 columns for Hero banner
  const col1 = [...marqueeImages.slice(0, 3), ...marqueeImages.slice(0, 3)];
  const col2 = [...marqueeImages.slice(3, 6), ...marqueeImages.slice(3, 6)];
  const col3 = [...marqueeImages.slice(6, 9), ...marqueeImages.slice(6, 9)];
  const col4 = [...marqueeImages.slice(9, 12), ...marqueeImages.slice(9, 12)];

  // IntersectionObserver to pause marquee when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Category switch loading simulation
  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return;
    setIsLoading(true);
    setSelectedCategory(category);
    setActiveSlideIndex(0);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  // Keyboard navigation for Lightbox Modal
  useEffect(() => {
    if (activeItemIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  // Touch handlers for Lightbox swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (distance < -minSwipeDistance) {
      setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleCtaClick = () => {
    if (embedded) {
      navigate('/gallery');
    } else {
      const grid = document.getElementById('gallery-grid');
      if (grid) {
        grid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentActiveItem = filteredItems[activeSlideIndex] || filteredItems[0];

  return (
    <div id="gallery" className="w-full text-dark-overlay">
      {/* Embedded CSS for keyframes & responsive marquee styling */}
      <style>{`
        @keyframes galleryMarqueeUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes galleryMarqueeDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }

        .marquee-container {
          animation-play-state: ${isHeroVisible ? 'running' : 'paused'};
          will-change: transform;
        }

        .animate-marquee-sync {
          animation: galleryMarqueeUp 26s linear infinite;
        }

        @media (min-width: 1280px) {
          .animate-marquee-col1 { animation: galleryMarqueeUp 28s linear infinite; }
          .animate-marquee-col2 { animation: galleryMarqueeDown 22s linear infinite; }
          .animate-marquee-col3 { animation: galleryMarqueeUp 32s linear infinite; }
          .animate-marquee-col4 { animation: galleryMarqueeDown 24s linear infinite; }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-container {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* SECTION 1: HERO SHOWCASE (Full-Screen Marquee Background + Glassmorphism Center Card) */}
      <section 
        ref={heroRef}
        className={`relative ${embedded ? 'h-screen' : 'h-[340px] sm:h-[400px] mt-4'} overflow-hidden flex items-center justify-center`}
      >
        {/* Ambient Glow (handled by parent page) */}
        <div 
          className="absolute inset-0 pointer-events-none -z-10" 
          style={{ background: 'transparent' }}
        />

        {/* Marquee Background Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-80 select-none">
          {/* Mobile / Tablet: 2 Synchronized Columns */}
          <div className="flex xl:hidden gap-4 sm:gap-6 h-[200%] w-full">
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-sync flex flex-col gap-4 sm:gap-6">
                {[...col1, ...col2].map((img, idx) => (
                  <div key={`sync1-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale opacity-90" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-sync flex flex-col gap-4 sm:gap-6" style={{ animationDirection: 'reverse' }}>
                {[...col3, ...col4].map((img, idx) => (
                  <div key={`sync2-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop (xl+): 4 Independent Floating Columns */}
          <div className="hidden xl:flex gap-6 h-[200%] w-full">
            {/* Column 1 - Moving Up */}
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-col1 flex flex-col gap-6">
                {col1.map((img, idx) => (
                  <div key={`col1-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 opacity-90" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Moving Down */}
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-col2 flex flex-col gap-6">
                {col2.map((img, idx) => (
                  <div key={`col2-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 opacity-90" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - Moving Up */}
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-col3 flex flex-col gap-6">
                {col3.map((img, idx) => (
                  <div key={`col3-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 opacity-90" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 - Moving Down */}
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container animate-marquee-col4 flex flex-col gap-6">
                {col4.map((img, idx) => (
                  <div key={`col4-${idx}`} className="w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-light-tint shadow-sm">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 opacity-90" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay Darkening Gradient with seamless #FFF4F2 flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF4F2]/80 via-[#FFF4F2]/30 to-[#FFF4F2]/80 pointer-events-none" />

        {/* Expanded Glassmorphism Hero Card */}
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 z-10">
          <div className="w-full max-w-2xl bg-white/95 border border-muted/50 rounded-[16px] p-7 sm:p-10 md:p-12 text-center space-y-4 sm:space-y-6 shadow-2xl backdrop-blur-md">
            {/* Secondary Accent Badge */}
            {!embedded && (
              <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/40 text-secondary px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>ACES Archives & Memories</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-primary tracking-tight leading-tight">
              Capturing Moments, <br className="hidden sm:inline" /><span className="text-secondary">Coding History</span>
            </h1>

            {/* Subtitle */}
            <p className="text-body text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium">
              Explore the rich history of technical workshops, national hackathons, cultural festivals, and student leadership at DIT Pune.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-[6px] transition-all cursor-pointer shadow-brand-glow group"
              >
                <span>Explore Full Gallery</span>
                {embedded ? (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DRIFT WALL 3D EVENT GALLERY (Shown on standalone /gallery page) */}
      {!embedded && (
        <section 
          id="gallery-grid" 
          className="w-full bg-gallery-atmosphere py-14 sm:py-24 relative overflow-hidden scroll-mt-24"
        >
          {/* Faint Background Watermark Text */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-primary pointer-events-none select-none -z-10 tracking-widest"
            style={{ opacity: 0.015 }}
          >
            ACES
          </div>

          <div className="w-full space-y-6">
            {/* Section Title & Info */}
            <div className="text-center space-y-2 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 text-secondary bg-light-tint border border-muted/30 px-3 py-1 rounded-[4px] text-xs font-semibold tracking-wider uppercase">
                <ImageIcon className="w-3.5 h-3.5" /> Drift Wall Archive
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-near-black tracking-tight">Event Gallery</h2>
              <p className="text-body text-xs sm:text-sm font-medium">
                Hover over photos to bring them forward in 3D space, or click any moment to inspect high-resolution details.
              </p>
            </div>

            {/* Category Filter Pills (Seamless without border-b) */}
            <div className="flex flex-wrap justify-center gap-2 pb-1 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-body hover:text-primary hover:bg-light-tint'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Loading Skeletons State */}
            {isLoading ? (
              <div className="w-full h-[520px] bg-light-tint/60 flex items-center justify-center animate-pulse">
                <div className="w-72 h-44 bg-muted/20 rounded-[12px]" />
              </div>
            ) : filteredItems.length === 0 ? (
              /* Empty State UI */
              <div className="text-center py-16 px-4 bg-light-tint border border-muted/50 rounded-[4px] max-w-md mx-auto space-y-4">
                <div className="w-12 h-12 bg-white text-muted border border-muted/40 rounded-full flex items-center justify-center mx-auto">
                  <SearchX className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-dark-overlay">No Moments Found</h3>
                <p className="text-muted text-xs sm:text-sm">
                  There are currently no gallery items matching the "{selectedCategory}" category.
                </p>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="inline-flex items-center gap-2 bg-white hover:bg-light-tint border border-muted/50 text-muted hover:text-primary text-xs font-semibold px-4 py-2 rounded-[4px] transition-colors cursor-pointer"
                >
                  Reset to All Categories
                </button>
              </div>
            ) : (
              /* 3D Horizontal Drift Wall Container - Full Bleed Edge to Edge */
              <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-transparent my-1">
                <div className="w-full h-[740px] sm:h-[800px] lg:h-[840px] relative overflow-hidden flex items-center justify-center">
                  <DriftWall
                    items={filteredItems}
                    rows={3}
                    tileWidth={360}
                    tileHeight={220}
                    gap={24}
                    radius={16}
                    tilt={4}
                    turn={-2}
                    roll={0}
                    perspective={1200}
                    depth={40}
                    speed={38}
                    direction="right"
                    variance={0.3}
                    parallax={0.25}
                    lift={40}
                    dim={1}
                    pauseOnHover={true}
                    grayscale={false}
                    onItemClick={(item, idx) => {
                      const origIdx = filteredItems.findIndex(i => i.id === item.id);
                      setActiveItemIndex(origIdx !== -1 ? origIdx : idx);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* LIGHTBOX MODAL (Only when not embedded) */}
      {!embedded && (
        <AnimatePresence>
          {activeItemIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-overlay/80 backdrop-blur-sm"
              onClick={() => setActiveItemIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image preview detail"
            >
              <div 
                className="relative w-full max-w-4xl bg-white border border-muted/50 rounded-[8px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-muted/30 bg-light-tint">
                  <div className="flex items-center gap-2 text-xs text-secondary uppercase font-bold tracking-wider">
                    <span>{filteredItems[activeItemIndex]?.category}</span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">{activeItemIndex + 1} of {filteredItems.length}</span>
                  </div>
                  <button
                    ref={closeBtnRef}
                    onClick={() => setActiveItemIndex(null)}
                    className="p-2 text-muted hover:text-dark-overlay bg-white hover:bg-light-tint border border-muted/40 rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Image View */}
                <div className="relative flex-grow overflow-hidden bg-light-tint flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
                  <img
                    src={filteredItems[activeItemIndex]?.image}
                    alt={filteredItems[activeItemIndex]?.title}
                    className="max-h-[60vh] w-auto max-w-full object-contain select-none shadow-md"
                  />

                  {/* Left Arrow Button */}
                  <button
                    onClick={() => setActiveItemIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-dark-overlay border border-muted/50 shadow-sm transition-colors cursor-pointer hidden sm:flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    onClick={() => setActiveItemIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-dark-overlay border border-muted/50 shadow-sm transition-colors cursor-pointer hidden sm:flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption & Metadata Footer */}
                <div className="p-6 bg-white border-t border-muted/30 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold font-display text-dark-overlay">
                      {filteredItems[activeItemIndex]?.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        {filteredItems[activeItemIndex]?.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {filteredItems[activeItemIndex]?.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed font-sans">
                    {filteredItems[activeItemIndex]?.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
