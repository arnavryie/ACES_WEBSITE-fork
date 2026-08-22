import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { goldenMoments } from './momentsData';

export default function GoldenMoments({ embedded = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const total = goldenMoments.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Tighter card spacing relative to card width so cards tuck cohesively without dead gaps
  const getCardSpacing = () => {
    if (windowWidth < 640) return 290;
    if (windowWidth < 1024) return 350;
    if (windowWidth < 1440) return 390;
    return 430;
  };

  const cardSpacing = getCardSpacing();

  return (
    <div id="golden-moments" className={`w-full ${embedded ? 'pt-16 sm:pt-24 pb-14' : 'min-h-screen pt-28 sm:pt-36 pb-24'} px-0 flex flex-col justify-center items-center overflow-visible relative select-none`}>

      <div className="w-full z-10 space-y-8">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4 reveal-heading max-w-3xl mx-auto">
          {!embedded && (
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-brand-glow">
              <Award className="w-3.5 h-3.5" /> Landmark Milestones
            </div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-brand tracking-tight">
            Golden Moments
          </h1>
          <p className="text-body text-xs sm:text-sm md:text-base max-w-lg mx-auto font-sans font-medium">
            Swipe left or right or drag across the cards to explore our landmark history.
          </p>
        </div>

        {/* Carousel Viewport Container (Spans full viewport with middle desktop arrow buttons) */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-2">

          {/* Left fade-out gradient — dissolves left side card into page background */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-[22%] sm:w-[18%] lg:w-[15%] pointer-events-none z-50"
            style={{ background: 'linear-gradient(to right, #FFF4F2 0%, rgba(255,244,242,0.85) 40%, transparent 100%)' }}
          />

          {/* Right fade-out gradient — dissolves right side card into page background */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-[22%] sm:w-[18%] lg:w-[15%] pointer-events-none z-50"
            style={{ background: 'linear-gradient(to left, #FFF4F2 0%, rgba(255,244,242,0.85) 40%, transparent 100%)' }}
          />
          
          {/* Left Arrow Button (Only on PCs / Laptops, vertically centered at far left edge) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 lg:left-10 xl:left-14 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Arrow Button (Only on PCs / Laptops, vertically centered at far right edge) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 lg:right-10 xl:right-14 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Swiper Animated Track */}
          <div className="relative w-full h-[640px] sm:h-[700px] lg:h-[760px] flex items-center justify-center [perspective:1400px]">
            
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {goldenMoments.map((moment, idx) => {
                // Shortest circular distance calculation
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 2.5;

                return (
                  <motion.div
                    key={moment.id}
                    onClick={() => setActiveIndex(idx)}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.88 : 0.77,
                      opacity: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.82 : isVisible ? 0.52 : 0,
                      x: offset * cardSpacing,
                      rotateY: offset * -8,
                      zIndex: isCenter ? 30 : 20 - Math.abs(Math.round(offset)) * 5,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 30,
                      mass: 0.8,
                    }}
                    className={`absolute w-[88vw] max-w-[360px] sm:w-[420px] md:w-[450px] lg:w-[480px] h-[600px] sm:h-[660px] lg:h-[720px] flex-shrink-0 cursor-pointer rounded-[32px] overflow-hidden border bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isCenter 
                        ? 'shadow-[0_24px_70px_rgba(178,43,47,0.24),0_6px_20px_rgba(0,0,0,0.08)] border-primary/50' 
                        : 'shadow-[0_12px_36px_rgba(0,0,0,0.08)] border-[#e8e6e1]'
                    }`}
                  >
                    {/* Brand / Event Tagline & Year (Clean Flex Row - Zero Overlap) */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 pb-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                        <span className="text-[11px] sm:text-xs font-sans tracking-[0.15em] uppercase font-black text-secondary truncate">
                          {moment.eventName ? `EVENT • ${moment.eventName}` : 'ACES DIT PUNE'}
                        </span>
                      </div>
                      <div className="bg-secondary text-dark-overlay font-bold font-mono text-[11px] sm:text-xs tracking-wider px-3 py-1 rounded-[4px] shadow-sm flex-shrink-0">
                        {moment.year}
                      </div>
                    </div>

                    {/* Middle Heading & Description */}
                    <div className="text-center space-y-2 sm:space-y-3 px-2 pt-1">
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary leading-tight">
                        {moment.title}
                      </h2>
                      <p className={`text-body text-xs sm:text-sm lg:text-base font-sans font-medium leading-relaxed max-w-sm mx-auto ${isCenter ? '' : 'line-clamp-3'}`}>
                        {moment.description}
                      </p>
                    </div>

                    {/* Bottom Arched Window Cutout Image (Full rounded corners & clean smooth display) */}
                    <div className="w-full flex-1 min-h-[280px] sm:min-h-[330px] lg:min-h-[380px] rounded-t-[180px] sm:rounded-t-[200px] rounded-b-[20px] overflow-hidden border border-muted/30 shadow-md relative mt-3 bg-light-tint group">
                      <img
                        src={moment.image}
                        alt={moment.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 pt-2 pb-2">
          {goldenMoments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex 
                  ? 'w-9 bg-primary shadow-brand-glow' 
                  : 'w-2.5 bg-muted/40 hover:bg-muted'
              }`}
              aria-label={`Milestone ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
