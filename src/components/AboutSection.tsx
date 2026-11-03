import React from 'react';
import { HIGHLIGHT_CARDS } from '../data/portfolioData';
import { Brain, Zap, HeartHandshake, MapPin, Calendar, Code, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const getIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case '02':
        return <Zap className="w-5 h-5 text-violet-400" />;
      case '03':
      default:
        return <HeartHandshake className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A12]/80">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            Get To Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-purple-300/90 font-medium">
            Passionate Developer. Creative Thinker. Continuous Learner.
          </p>
        </div>

        {/* Narrative & Key Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Content */}
          <div className="lg:col-span-7 bg-[#11111B]/90 rounded-2xl p-8 sm:p-10 border border-purple-500/20 shadow-[0_0_35px_rgba(139,92,246,0.15)] flex flex-col justify-between">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm <strong className="text-white font-semibold">Isha Prajapati</strong>, a dedicated{' '}
                <span className="text-purple-300 font-medium">.NET Software Developer</span> with less than one year of professional experience. I enjoy developing dynamic web applications, working with databases and creating practical software solutions.
              </p>
              <p>
                My primary focus is Microsoft .NET technologies, especially{' '}
                <span className="text-white font-medium">ASP.NET MVC, C#, SQL Server and Entity Framework</span>. I specialize in turning architectural blueprints and business rules into clean, resilient backend logic.
              </p>
              <p>
                I believe in writing clean code, learning continuously and improving my development skills through real-world projects. Every challenge is an opportunity to strengthen fundamentals and deliver meaningful digital experiences.
              </p>
            </div>

            {/* Quick Metadata Strip - Clean unboxed text with typographic dots (Zero-Pill Discipline) */}
            <div className="pt-8 mt-8 border-t border-purple-900/30 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">{profile.location}</span>
              </div>
              <span className="text-purple-500/50" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">Experience: {profile.experienceDuration}</span>
              </div>
              <span className="text-purple-500/50" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300">Primary: Microsoft .NET</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="bg-[#11111B]/80 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Professional Focus</div>
              <div className="text-xl font-bold text-white mb-2">Full-Lifecycle .NET</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                From relational schema design and stored queries to C# controllers, LINQ projections, and responsive web views.
              </p>
            </div>

            <div className="bg-[#11111B]/80 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_0_20px_rgba(139,92,246,0.1)]">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Architecture Standard</div>
              <div className="text-xl font-bold text-white mb-2">Clean Code &amp; MVC</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adherence to Separation of Concerns, Model-View-Controller pattern, defensive validation, and transaction safety.
              </p>
            </div>

            <div className="bg-[#11111B]/80 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_0_20px_rgba(139,92,246,0.1)] sm:col-span-2 lg:col-span-1">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Professional Tagline</div>
              <div className="text-base font-semibold text-purple-200 italic">
                "{profile.tagline}"
              </div>
            </div>

          </div>

        </div>

        {/* 3 Highlight Cards as specified: 01 Problem Solver, 02 Quick Learner, 03 Passionate Developer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHT_CARDS.map((card) => (
            <div
              key={card.number}
              className="group relative bg-[#11111B]/90 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/60 shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:shadow-[0_0_35px_rgba(139,92,246,0.3)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Header with Editorial Numbering & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                    {getIcon(card.number)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>
                <div className="text-xs font-medium text-purple-400/90 mb-4 font-mono">
                  {card.tagline}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 pt-4 border-t border-purple-900/30 text-xs text-slate-300">
                {card.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow line */}
              <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
