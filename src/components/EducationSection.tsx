import React from 'react';
import { GraduationCap, Calendar, BookOpen, Edit3, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';

interface EducationSectionProps {
  profile: ProfileData;
  onOpenEditProfile: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ profile, onOpenEditProfile }) => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#0A0A12]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Foundational computer science principles, database systems, and object-oriented engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {profile.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#11111B]/90 rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-400/50 shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 mb-4 border-b border-purple-900/30">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-[#161628] border border-purple-500/30 text-purple-400 mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <div className="text-sm sm:text-base font-medium text-purple-300 mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0A14] border border-purple-500/30 text-xs font-mono text-purple-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                    <button
                      onClick={onOpenEditProfile}
                      className="p-1.5 text-slate-400 hover:text-purple-300 rounded-md border border-purple-500/20 transition-colors"
                      title="Edit Education Fields"
                      aria-label="Edit Education Details"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Relevant Coursework:</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs text-slate-300 bg-[#09090F] border border-purple-500/20 rounded-lg"
                      >
                        {course}
                      </span>
                    ))}
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
