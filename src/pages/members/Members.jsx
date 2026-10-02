import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, getMembersByCategory } from './membersData';
import MemberCard from '../../components/members/MemberCard';
import { ArrowRight } from 'lucide-react';

export default function Members({ embedded = false }) {
  const navigate = useNavigate();

  // If embedded on Home page, only show Core Leadership (Faculty Coordinator + Core Team)
  if (embedded) {
    const faculty = getMembersByCategory('faculty-coordinator');
    const core = getMembersByCategory('core-team');
    const corePreview = [...faculty, ...core].slice(0, 3);

    return (
      <div id="members" className="w-full bg-white pt-10 pb-20 font-sans border-t border-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="reveal-heading">
            <div className="flex items-center gap-2 text-primary font-display text-2xl sm:text-3xl font-black uppercase tracking-[0.06em] border-l-[3px] border-secondary pl-3">
              <span>Core Team</span>
            </div>
            <p className="text-body text-sm sm:text-base font-medium pl-3 mt-1">
              The primary leadership and guidance of ACES.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {corePreview.map((member, idx) => (
              <div key={member.id} className={`w-full max-w-xs reveal-card delay-${(idx + 1) * 100}`}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Button */}
          <div className="pt-6 flex justify-center reveal">
            {/* 
            <button 
              onClick={() => {
                navigate('/members');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-primary hover:text-white transition-all duration-200 px-8 py-3.5 border-2 border-primary rounded-[6px] bg-white hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(178,43,47,0.25)] cursor-pointer font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm group"
            >
              <span>Explore Members Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            */}
          </div>

        </div>
      </div>
    );
  }

  // Full Standalone /members Page — Expanded widescreen layout utilizing left/right spaces
  return (
    <div id="members" className="w-full bg-members-atmosphere min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      {/* Header Banner */}
      <div className="w-full pb-12 md:pb-16 px-6 md:px-12 xl:px-16">
        <div className="max-w-[1550px] mx-auto reveal-heading text-center">
          <div className="mb-3">
            <h1 className="font-display text-3xl md:text-5xl font-black uppercase text-gradient-brand tracking-tight">
              ACES Members
            </h1>
          </div>
          <h2 className="font-display text-xl md:text-2xl font-extrabold text-primary mb-3">
            Meet the people behind ACES.
          </h2>
          <p className="text-body leading-relaxed font-sans max-w-3xl mx-auto text-sm sm:text-base font-medium">
            Meet the passionate individuals who inspire and drive ACES forward. We are the students and leaders who contribute to the technical, creative, and organizational activities of ACES.
          </p>
        </div>
      </div>

      {/* All Sections — Expanded width to fit 4 columns on desktop without wasted space */}
      <div className="max-w-[1550px] mx-auto px-6 md:px-12 xl:px-16 space-y-20">
        {categories.map((category) => {
          const membersList = getMembersByCategory(category.id);
          const isFaculty = category.id === 'faculty-coordinator';

          return (
            <section key={category.id} className="border-t border-muted/40 pt-10 reveal">
              {/* Section Header */}
              <div className={`flex flex-col mb-8 reveal-heading ${isFaculty ? 'items-center text-center' : ''}`}>
                {isFaculty && (
                  <div className="w-10 h-[3px] bg-secondary rounded-full mb-3" />
                )}
                <h3 className={`font-display text-2xl font-black text-primary mb-2 uppercase tracking-[0.06em] ${isFaculty ? '' : 'border-l-[3px] border-secondary pl-3'}`}>
                  {category.title}
                </h3>
                <p className={`text-body text-sm font-medium ${isFaculty ? '' : 'pl-3'}`}>
                  {category.description}
                </p>
              </div>

              {/* Cards */}
              {isFaculty ? (
                <div className="flex justify-center">
                  {membersList.length > 0 ? (
                    membersList.map((member, idx) => (
                      <div key={member.id} className={`w-full max-w-xs reveal-card delay-${Math.min((idx + 1) * 100, 500)}`}>
                        <MemberCard member={member} />
                      </div>
                    ))
                  ) : (
                    <div className="bg-white border border-muted/50 p-8 text-center rounded-[12px] w-full shadow-sm">
                      <p className="text-body font-medium">No members found in this category yet.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                  {membersList.length > 0 ? (
                    membersList.map((member, idx) => (
                      <div key={member.id} className={`w-full max-w-xs reveal-card delay-${Math.min((idx + 1) * 100, 500)}`}>
                        <MemberCard member={member} />
                      </div>
                    ))
                  ) : (
                    <div className="bg-white border border-muted/50 p-8 text-center rounded-[12px] col-span-full w-full shadow-sm">
                      <p className="text-body font-medium">No members found in this category yet.</p>
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
