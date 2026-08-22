import { Target, Compass, Sparkles, BookOpen, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoAreWe({ embedded = false }) {
  return (
    <div id="who-are-we" className={`${embedded ? "relative min-h-screen flex items-center" : "min-h-screen"} bg-[#FFF4F2]`}>
      {/* ─── Hero Header ─── */}
      <section className={`relative bg-[#FFF4F2] w-full ${embedded ? 'py-16 sm:py-24' : 'pt-28 sm:pt-36 pb-16 sm:pb-24'} px-4 sm:px-6 lg:px-8 text-center overflow-hidden`}>
        {/* Ambient Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 pointer-events-none -z-10"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(209,165,80,0.12) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 reveal-heading">


          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-gradient-brand tracking-[-0.02em] leading-tight">
            WHO ARE WE?
          </h1>

          <p className="text-body text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-sans font-medium">
            The Association of Computer Engineering Students is a vibrant departmental club of Department of Computer Engineering at Dr. D. Y. Patil Institute of Technology, Pimpri. Comprising passionate students, faculty mentors, and industry enthusiasts, ACES serves as a dynamic hub for fostering collaboration & innovation within the realm of computer engineering.
          </p>
        </div>
      </section>
    </div>
  );
}
