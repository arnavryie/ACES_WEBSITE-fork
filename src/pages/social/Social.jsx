import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  VolumeX, 
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../../components/SocialIcons';
import { REELS_DATA, POSTS_DATA, ACES_INSTAGRAM_URL } from '../../data/socialData';

export default function Social({ embedded = false }) {
  const [activeTab, setActiveTab] = useState('reels');
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [activePostIndex, setActivePostIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const videoRefs = useRef([]);

  const activeList = activeTab === 'reels' ? REELS_DATA : POSTS_DATA;
  const activeIndex = activeTab === 'reels' ? activeReelIndex : activePostIndex;
  const setActiveIndex = activeTab === 'reels' ? setActiveReelIndex : setActivePostIndex;
  const total = activeList.length;

  // Window resize handler with debounce for performance
  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Play visible reel cards, pause far-off cards to preserve performance
  useEffect(() => {
    if (activeTab !== 'reels') return;
    
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      
      let offset = idx - activeReelIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const isCenter = offset === 0;
      const isNearby = Math.abs(offset) <= 2;

      if (isNearby) {
        videoEl.muted = isCenter ? isMuted : true;
        if (videoEl.paused) {
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              videoEl.muted = true;
              videoEl.play().catch(() => {});
            });
          }
        }
      } else {
        if (!videoEl.paused) videoEl.pause();
      }
    });
  }, [activeTab, isMuted, activeReelIndex, total]);

  // Sync muted state of center video
  useEffect(() => {
    const activeVideo = videoRefs.current[activeReelIndex];
    if (activeVideo) activeVideo.muted = isMuted;
  }, [isMuted, activeReelIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [setActiveIndex, total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [setActiveIndex, total]);

  const handleCardClick = (idx, item) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
      return;
    }
    // Clicking the active center card redirects directly to ACES Instagram
    window.open(item.instagramUrl || ACES_INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 35;
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
      if (activeTab === 'reels' && e.key === 'm') {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, handleNext, handlePrev]);

  // Optimized card spacing
  const cardSpacing = useMemo(() => {
    if (windowWidth < 640) return 290;
    if (windowWidth < 1024) return 350;
    if (windowWidth < 1440) return 390;
    return 430;
  }, [windowWidth]);

  return (
    <div
      id="social"
      className={`w-full ${
        embedded ? 'bg-gradient-to-b from-[#FFF4F2] via-[#FFF4F2] to-white pt-16 sm:pt-24 pb-16' : 'bg-[#FFF4F2] min-h-screen pt-28 sm:pt-36 pb-24'
      } px-0 flex flex-col justify-center items-center overflow-visible relative select-none`}
    >

      <div className="w-full z-10 space-y-7">
        
        {/* Header Title */}
        <div className="text-center space-y-2 px-4 reveal-heading max-w-3xl mx-auto">
          <a
            href={ACES_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-[4px] text-xs font-bold tracking-widest uppercase shadow-brand-glow transition-all hover:scale-105"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-white" /> @aces.dit Instagram
          </a>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-brand tracking-tight">
            Social Highlights
          </h1>
          <p className="text-body text-xs sm:text-sm md:text-base max-w-lg mx-auto font-sans font-medium">
            Swipe left or right or use arrow buttons to explore interactive reels and updates.
          </p>
        </div>

        {/* Tab Switcher: REELS / POSTS */}
        <div className="flex justify-center items-center px-4">
          <div className="inline-flex p-1 rounded-full bg-[#faece9] border border-[#edd7d1] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('reels')}
              className={`px-8 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'reels'
                  ? 'bg-primary text-white shadow-brand-glow'
                  : 'text-muted hover:text-near-black hover:bg-white/40'
              }`}
            >
              Reels
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('posts')}
              className={`px-8 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'posts'
                  ? 'bg-primary text-white shadow-brand-glow'
                  : 'text-muted hover:text-near-black hover:bg-white/40'
              }`}
            >
              Posts
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-2 px-0">
          
          {/* Left Arrow Button (Only on PCs / Laptops) */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Right Arrow Button (Only on PCs / Laptops) */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 z-40 w-12 h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white text-near-black hover:text-primary rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-brand-glow border border-[#e8e6e1] hover:border-primary/50 transition-all duration-200 cursor-pointer items-center justify-center hover:scale-110 active:scale-95 backdrop-blur-md"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Swiper Animated Track */}
          <div className="relative w-full h-[600px] sm:h-[650px] lg:h-[700px] flex items-center justify-center [perspective:1400px]">
            
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing transform-gpu"
              style={{ touchAction: 'pan-y' }}
            >
              {activeList.map((item, idx) => {
                // Shortest circular distance calculation
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                // Keep ALL cards in the DOM — just hide far ones with opacity 0
                // This prevents unmount/remount stutter on edge cards
                const isFarHidden = Math.abs(offset) > 2.5;

                return (
                  <motion.div
                    key={`${activeTab}-${item.id}`}
                    onClick={() => !isFarHidden && handleCardClick(idx, item)}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.88 : 0.76,
                      opacity: isFarHidden ? 0 : isCenter ? 1 : Math.abs(offset) <= 1.2 ? 0.82 : 0.45,
                      x: offset * cardSpacing,
                      rotateY: offset * -7,
                      zIndex: isFarHidden ? 0 : isCenter ? 30 : 20 - Math.abs(Math.round(offset)) * 5,
                      pointerEvents: isFarHidden ? 'none' : 'auto',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 340,
                      damping: 32,
                      mass: 0.6,
                    }}
                    style={{
                      willChange: 'transform, opacity',
                    }}
                    className={`absolute w-[88vw] max-w-[340px] sm:w-[380px] md:w-[410px] lg:w-[440px] h-[550px] sm:h-[600px] lg:h-[650px] flex-shrink-0 cursor-pointer rounded-[32px] overflow-hidden border bg-white flex flex-col justify-between p-4 sm:p-5 transform-gpu ${
                      isCenter 
                        ? 'shadow-[0_20px_48px_-10px_rgba(28,25,23,0.14),0_6px_18px_-4px_rgba(178,43,47,0.08)] border-primary/40' 
                        : 'shadow-[0_6px_20px_rgba(0,0,0,0.05)] border-[#e8e6e1]'
                    }`}
                  >
                    {/* Card Top Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-muted/20">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center shadow-sm">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-0.5">
                            <InstagramIcon className="w-full h-full" />
                          </div>
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-near-black font-sans tracking-tight hover:text-primary transition-colors">
                          {item.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isCenter && (
                          <span className="text-primary/70 text-[10px] font-bold flex items-center gap-0.5">
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Main Media Area */}
                    {activeTab === 'reels' ? (
                      /* ─── REEL CARD BODY ─── */
                      <div className="flex-1 w-full mt-3 relative rounded-[24px] overflow-hidden bg-black flex items-center justify-center group/video shadow-inner">
                        <video
                          ref={(el) => (videoRefs.current[idx] = el)}
                          src={item.videoSrc}
                          poster={item.posterSrc}
                          playsInline
                          loop
                          muted={isCenter ? isMuted : true}
                          preload="metadata"
                          className="w-full h-full object-cover select-none pointer-events-none"
                        />

                        {/* Sound Toggle Button on Center Card */}
                        {isCenter && (
                          <button
                            onClick={toggleMute}
                            className="absolute top-3.5 right-3.5 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md active:scale-95"
                            aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
                            title={isMuted ? 'Click to unmute' : 'Click to mute'}
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4 text-white/90" />
                            ) : (
                              <Volume2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        )}

                      </div>
                    ) : (
                      /* ─── POST CARD BODY ─── */
                      <div className="flex-1 w-full mt-2 flex flex-col justify-between overflow-hidden">
                        <div className="w-full h-56 sm:h-64 lg:h-72 rounded-[24px] overflow-hidden relative shadow-sm mt-1 bg-light-tint flex-shrink-0 border border-[#e8e6e1]">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div className="space-y-2 py-3 px-1 text-left flex-1 flex flex-col justify-center">
                          <h3 className="font-display font-extrabold text-base sm:text-lg lg:text-xl text-near-black leading-snug line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-body text-xs sm:text-sm leading-relaxed font-sans font-medium line-clamp-3">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Pagination Dots & Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={handlePrev}
            className="md:hidden p-2.5 rounded-full bg-white text-near-black hover:text-primary border border-muted/30 shadow-sm transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#faece9] rounded-full border border-[#edd7d1]">
            {activeList.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-250 cursor-pointer ${
                  activeIndex === i ? 'w-6 bg-primary' : 'w-2 bg-muted/40 hover:bg-muted/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="md:hidden p-2.5 rounded-full bg-white text-near-black hover:text-primary border border-muted/30 shadow-sm transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
