import { useState, useEffect } from 'react';
import CyberHeroAnimation from '../../components/CyberHeroAnimation';
import WhoAreWe from '../who-are-we/WhoAreWe';
import GoldenMoments from '../golden-moments/GoldenMoments';
import Gallery from '../gallery/Gallery';
import Feed from '../feed/Feed';
import Social from '../social/Social';
import Members from '../members/Members';

export default function Home() {
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
      {/* ─── 1. Home / Hero Section: Cyber Mesh & Technical Architecture (Screenshot 2 Design) ─── */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden scroll-mt-20">
        <CyberHeroAnimation onExploreClick={() => scrollToSection('who-are-we')} />
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
