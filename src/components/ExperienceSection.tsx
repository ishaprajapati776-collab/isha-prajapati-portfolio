import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Edit3, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';

interface ExperienceSectionProps {
  profile: ProfileData;
  onOpenEditProfile: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile, onOpenEditProfile }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#09090F]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-purple-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Professional Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Practical web application engineering with Microsoft .NET, database integration, and responsive user interfaces.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-purple-500/30 space-y-12">
            
            {profile.experience.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#09090F] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>

                {/* Card Container */}
                <div className="bg-[#11111B]/90 rounded-2xl p-6 sm:p-8 border border-purple-500/20 group-hover:border-purple-400/50 shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all">
                  
                  {/* Top Bar with Position, Period, and Edit Trigger */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-purple-900/30">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                        <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                        <span>Experience Duration: {exp.experienceDuration}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="text-base font-medium text-slate-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end justify-between sm:justify-start gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0A14] border border-purple-500/30 text-xs font-mono text-purple-300">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Areas of Responsibility */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-mono text-purple-300 uppercase tracking-wider font-semibold">
                      Key Areas &amp; Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.keyAreas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used & Customize prompt */}
                  <div className="pt-4 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono text-purple-300 bg-[#0A0A14] border border-purple-500/25 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenEditProfile}
                      className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-mono transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Company / Dates</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
