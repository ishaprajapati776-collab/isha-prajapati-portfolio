import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Server, Database, Layout, Wrench, Sparkles, Code2, Check, ArrowRight } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    category: string;
    description: string;
    level?: string;
  } | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Backend Development': <Server className="w-5 h-5 text-purple-400" />,
    'Database & Storage': <Database className="w-5 h-5 text-violet-400" />,
    'Frontend Technologies': <Layout className="w-5 h-5 text-purple-300" />,
    'Development Tools': <Wrench className="w-5 h-5 text-fuchsia-400" />,
  };

  const allCategories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#09090F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Core competence in Microsoft .NET ecosystems, robust SQL Server schemas, and responsive user interfaces.
          </p>

          {/* Interactive Filter Control (Allowed per §1.A: segmented button controls with click handlers) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400'
                    : 'bg-[#11111B] text-slate-300 border border-purple-500/20 hover:text-white hover:border-purple-400/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#11111B]/80 rounded-2xl p-7 border border-purple-500/20 hover:border-purple-400/50 shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 mb-6 border-b border-purple-900/30">
                  <div className="p-2.5 rounded-xl bg-[#181829] border border-purple-500/30">
                    {categoryIcons[category.name] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() =>
                        setActiveSkill({
                          name: skill.name,
                          category: category.name,
                          description: skill.description,
                        })
                      }
                      className="group p-3.5 rounded-xl bg-[#0E0E18] border border-purple-500/15 hover:border-purple-400/60 hover:bg-[#141424] transition-all cursor-pointer text-left flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-sm text-slate-100 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-500/30">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="pt-5 mt-6 border-t border-purple-900/20 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.skills.length} verified technologies</span>
                <span className="text-purple-400 flex items-center gap-1 group">
                  <span>Click to inspect</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Inspector Modal */}
        {activeSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setActiveSkill(null)}
          >
            <div
              className="bg-[#11111B] border border-purple-500/40 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_50px_rgba(139,92,246,0.35)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  {activeSkill.category}
                </span>
                <button
                  onClick={() => setActiveSkill(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-md text-sm font-mono"
                >
                  ✕
                </button>
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">{activeSkill.name}</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeSkill.description}
              </p>

              <div className="space-y-3 p-4 rounded-xl bg-[#09090F] border border-purple-500/20 text-xs text-slate-300">
                <div className="font-semibold text-purple-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                  <span>Practical Implementation</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Utilized in real-world project development including database query planning, C# controller actions, and transactional services.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
