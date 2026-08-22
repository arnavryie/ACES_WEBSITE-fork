import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Code2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import ShapeGrid from '../../components/ShapeGrid';
import WhoAreWe from '../who-are-we/WhoAreWe';
import GoldenMoments from '../golden-moments/GoldenMoments';
import Gallery from '../gallery/Gallery';
import Feed from '../feed/Feed';
import Social from '../social/Social';
import Members from '../members/Members';

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function StatCard({ target, suffix = "+", label, color = "text-primary", delay = 100 }) {
  const { count, ref } = useCountUp(target, 1600);

  return (
    <div className={`bg-white border border-[#e8e6e1] p-6 rounded-[14px] text-center hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-brand-hover transition-all duration-300 shadow-sm reveal-card delay-${delay}`}>
      <span ref={ref} className={`font-display text-3xl sm:text-4xl font-black ${color} block mb-1 tracking-tight`}>
        {count}{suffix}
      </span>
      <span className="text-xs text-muted font-semibold uppercase tracking-wider block">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [gridSquareSize, setGridSquareSize] = useState(
    () => (typeof window !== 'undefined' && window.innerWidth < 640) ? 32 : 40
  );

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 639px)');
    const handleChange = (e) => setGridSquareSize(e.matches ? 32 : 40);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF4F2]">
      {/* ─── 1. Home / Hero Section (Color: #FFF4F2, 100% Full Viewport Coverage) ─── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
        {/* ShapeGrid Background Layer (Full Section Grid Coverage) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ShapeGrid
            squareSize={gridSquareSize}
            speed={0.3}
            direction="diagonal"
            shape="square"
            borderColor="rgba(107,109,113,0.25)"
            hoverFillColor="rgba(209,165,80,0.15)"
            hoverTrailAmount={3}
          />
        </div>

        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.14) 0%, transparent 70%)' }}
        />

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center space-y-8 relative z-10"
        >

          {/* Main Headline */}
          <motion.h1
            variants={heroItem}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-gradient-brand tracking-[-0.02em] leading-none max-w-4xl mx-auto"
          >
            Association of Computer Engineering Students
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            className="text-body text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-medium"
          >
            Association of Computer Engineering Students (ACES) at D. Y. Patil Institute of Technology, Pimpri, Pune. Connecting visionary minds through technology, leadership, and collaboration.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('who-are-we')}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary/90 hover:-translate-y-0.5 shadow-brand-glow hover:shadow-[0_6px_28px_rgba(178,43,47,0.28)] transition-all group cursor-pointer tracking-wider uppercase"
            >
              <span>Explore ACES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center gap-2 border border-primary text-primary bg-white/90 font-bold text-sm px-7 py-3.5 rounded-[4px] hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer shadow-sm tracking-wider uppercase"
            >
              <span>View Gallery</span>
            </button>
          </motion.div>

          {/* Quick Stats Grid with Count-up Animation */}
          <motion.div variants={heroItem} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            <StatCard target={500} suffix="+" label="Active Members" color="text-primary" delay={100} />
            <StatCard target={25} suffix="+" label="Annual Events" color="text-secondary" delay={200} />
            <StatCard target={10} suffix="+" label="National Awards" color="text-primary" delay={300} />
            <StatCard target={100} suffix="%" label="Student Driven" color="text-secondary" delay={400} />
          </motion.div>

        </motion.div>
      </section>
      {/* ─── Who Are We Section ─── */}
      <WhoAreWe embedded={true} />

      {/* ─── Golden Moments Section (Manual navigation) ─── */}
      <GoldenMoments embedded={true} />

      {/* ─── Gallery Showcase Section (Hero with Explore CTA) ─── */}
      <Gallery embedded={true} />

      {/* ─── Social Highlights Section ─── */}
      <Social embedded={true} />

      {/* ─── Members Directory Preview Section ─── */}
      <Members embedded={true} />
    </div>
  );
}
