import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Code2, Layers, CheckCircle2, Database, Sparkles, Edit3, X, Copy, Check } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  onUpdateProjectLinks: (projectId: string, githubUrl: string, liveDemoUrl: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onUpdateProjectLinks }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editGithub, setEditGithub] = useState('');
  const [editLiveDemo, setEditLiveDemo] = useState('');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleOpenEdit = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingProject(project);
    setEditGithub(project.githubUrl);
    setEditLiveDemo(project.liveDemoUrl);
  };

  const handleSaveLinks = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      onUpdateProjectLinks(editingProject.id, editGithub, editLiveDemo);
      setEditingProject(null);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Bespoke SVG architectural illustrations for each project (avoids random stock photos!)
  const renderProjectIllustration = (id: string) => {
    if (id === 'mandir-search-platform') {
      return (
        <div className="relative w-full h-56 bg-gradient-to-br from-[#121024] to-[#1a1738] rounded-xl overflow-hidden p-4 border border-purple-500/20 flex flex-col justify-between group-hover:border-purple-400/40 transition-colors">
          {/* Top simulated browser/system bar */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/60" />
            </div>
            <span className="text-[10px] font-mono text-purple-300/80">Mandir.Platform / MVC Core</span>
          </div>

          {/* Isometric UI dashboard composition */}
          <div className="grid grid-cols-12 gap-2 my-auto">
            {/* Pandit Verification card */}
            <div className="col-span-5 bg-[#09090F]/80 p-2.5 rounded-lg border border-purple-500/30 space-y-1.5 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-purple-300">Pandit Registry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="h-1.5 w-16 bg-purple-500/40 rounded" />
              <div className="h-1.5 w-12 bg-purple-900/60 rounded" />
              <div className="text-[9px] font-mono text-emerald-400 pt-1">Verified Slots: 14</div>
            </div>

            {/* Pooja Service Scheduler */}
            <div className="col-span-7 bg-[#09090F]/80 p-2.5 rounded-lg border border-purple-500/30 space-y-1.5 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-200">Temple Ritual Hub</span>
                <span className="text-[9px] font-mono text-purple-400">ASP.NET</span>
              </div>
              <div className="grid grid-cols-3 gap-1 pt-1">
                <div className="h-4 bg-purple-950/80 rounded border border-purple-500/20 flex items-center justify-center text-[8px] text-purple-300">Aarti</div>
                <div className="h-4 bg-purple-950/80 rounded border border-purple-500/20 flex items-center justify-center text-[8px] text-purple-300">Havan</div>
                <div className="h-4 bg-purple-950/80 rounded border border-purple-500/20 flex items-center justify-center text-[8px] text-purple-300">Darshan</div>
              </div>
              <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1">
                <span>Location Indexed</span>
                <span className="text-purple-300 font-mono">SQL Clustered</span>
              </div>
            </div>
          </div>

          {/* Bottom metrics strip */}
          <div className="flex items-center justify-between text-[10px] font-mono text-purple-400/90 pt-1 border-t border-purple-500/15">
            <span>Role: Admin + Pandit + Devotee</span>
            <span className="text-slate-400">Entity Framework 6</span>
          </div>
        </div>
      );
    }

    if (id === 'wallet-package-management') {
      return (
        <div className="relative w-full h-56 bg-gradient-to-br from-[#101428] to-[#1b193d] rounded-xl overflow-hidden p-4 border border-purple-500/20 flex flex-col justify-between group-hover:border-purple-400/40 transition-colors">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/60" />
            </div>
            <span className="text-[10px] font-mono text-purple-300/80">WalletLedger.Engine / ACID</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            {/* Balance Card */}
            <div className="bg-[#09090F]/80 p-3 rounded-lg border border-purple-500/30 space-y-1">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Active Balance</span>
              <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1">
                <span>₹18,450.00</span>
              </div>
              <div className="text-[9px] text-purple-300/80 font-mono">Double-Entry Verified</div>
            </div>

            {/* Refund Engine */}
            <div className="bg-[#09090F]/80 p-3 rounded-lg border border-purple-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Refund Algo</span>
                <span className="text-[8px] font-mono text-purple-400">Proportional</span>
              </div>
              <div className="w-full bg-purple-950/60 h-2 rounded-full overflow-hidden border border-purple-500/30">
                <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full w-2/3" />
              </div>
              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                <span>Used: 4 / 6</span>
                <span className="text-emerald-400">Refund: ₹6,150</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-purple-400/90 pt-1 border-t border-purple-500/15">
            <span>Transaction Isolation: Serializable</span>
            <span className="text-slate-400">Zero Inconsistencies</span>
          </div>
        </div>
      );
    }

    // Default: Developer Portfolio
    return (
      <div className="relative w-full h-56 bg-gradient-to-br from-[#131026] to-[#1e173e] rounded-xl overflow-hidden p-4 border border-purple-500/20 flex flex-col justify-between group-hover:border-purple-400/40 transition-colors">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/60" />
          </div>
          <span className="text-[10px] font-mono text-purple-300/80">ISHA.DEV / Viewport Grid</span>
        </div>

        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="bg-[#09090F]/80 p-2 rounded-lg border border-purple-500/30 space-y-1">
            <div className="h-1.5 w-10 bg-purple-400 rounded" />
            <div className="h-8 bg-purple-950/40 rounded border border-purple-500/15 flex items-center justify-center text-[9px] font-mono text-purple-300">
              Hero &amp; IDE
            </div>
          </div>
          <div className="bg-[#09090F]/80 p-2 rounded-lg border border-purple-500/30 space-y-1">
            <div className="h-1.5 w-10 bg-violet-400 rounded" />
            <div className="h-8 bg-purple-950/40 rounded border border-purple-500/15 flex items-center justify-center text-[9px] font-mono text-violet-300">
              Skills Matrix
            </div>
          </div>
          <div className="bg-[#09090F]/80 p-2 rounded-lg border border-purple-500/30 space-y-1">
            <div className="h-1.5 w-10 bg-purple-300 rounded" />
            <div className="h-8 bg-purple-950/40 rounded border border-purple-500/15 flex items-center justify-center text-[9px] font-mono text-purple-200">
              Projects Hub
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-purple-400/90 pt-1 border-t border-purple-500/15">
          <span>Dark Obsidian #09090F</span>
          <span className="text-slate-400">100% Responsive</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A12]/90">
      {/* Ambient purple aura */}
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-purple-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Recent Projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Production-oriented web solutions built on Microsoft .NET, ASP.NET MVC, Entity Framework, and SQL Server.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-[#11111B]/90 rounded-2xl border border-purple-500/20 hover:border-purple-400/60 shadow-[0_0_35px_rgba(139,92,246,0.12)] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Illustration Top Frame */}
              <div className="p-5 pb-0">
                {renderProjectIllustration(project.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Clean unboxed metadata (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                    <span>PROJECT {String(index + 1).padStart(2, '0')}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{project.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    <div className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {project.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 4 && (
                      <div className="text-[11px] text-purple-400/80 font-mono pl-5">
                        +{project.features.length - 4} additional modules
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack - Clean typographic tags with border */}
                <div className="pt-4 border-t border-purple-900/30">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-purple-200 bg-[#0A0A14] border border-purple-500/25 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions: Deep Dive + GitHub + Live Demo + Edit Links */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm transition-all flex-1 justify-center whitespace-nowrap"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Details</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && project.githubUrl !== '#' ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-[#09090F] border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                          title="View Source on GitHub"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      ) : null}

                      {project.liveDemoUrl && project.liveDemoUrl !== '#' ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-[#09090F] border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                          title="Live Demo Preview"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}

                      {/* Quick Edit Links Button per prompt instruction */}
                      <button
                        onClick={(e) => handleOpenEdit(project, e)}
                        className="p-2 rounded-lg bg-[#09090F] border border-purple-500/20 text-slate-400 hover:text-purple-300 hover:border-purple-400 transition-colors"
                        title="Edit Project Links"
                        aria-label="Edit Project Links"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Architecture Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#11111B] border border-purple-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.3)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-purple-900/30 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <span>{selectedProject.badge}</span>
                    <span>·</span>
                    <span className="text-slate-400">Architecture &amp; Code Inspector</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                  <p className="text-xs text-purple-300/80 font-mono mt-0.5">{selectedProject.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-purple-950/40 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Sections */}
              <div className="space-y-6 text-sm text-slate-300">
                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-base flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>System Architecture</span>
                  </h4>
                  <p className="leading-relaxed text-slate-300 bg-[#09090F] p-4 rounded-xl border border-purple-500/20">
                    {selectedProject.architectureDetails.overview}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-base">Key Technical Implementation</h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureDetails.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Database Schema Overview */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-base flex items-center gap-2">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span>Relational Database Tables (SQL Server)</span>
                  </h4>
                  <div className="bg-[#09090F] p-4 rounded-xl border border-purple-500/20 space-y-1.5 font-mono text-xs text-purple-300/90">
                    {selectedProject.architectureDetails.databaseStructure.map((table, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-slate-500">•</span>
                        <span>{table}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* C# Code Snippet */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white text-base flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span>C# / ASP.NET Implementation Snippet</span>
                    </h4>
                    <button
                      onClick={() => handleCopyCode(selectedProject.architectureDetails.csharpSnippet)}
                      className="flex items-center gap-1 text-xs text-purple-300 hover:text-white font-mono"
                    >
                      {copiedSnippet ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Snippet</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-[#080811] p-4 rounded-xl border border-purple-500/20 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300">
                    <pre>{selectedProject.architectureDetails.csharpSnippet}</pre>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-purple-900/30 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-mono">
                  Repository: {selectedProject.githubUrl}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Project Links Modal */}
        {editingProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
            onClick={() => setEditingProject(null)}
          >
            <div
              className="bg-[#11111B] border border-purple-500/40 rounded-2xl max-w-md w-full p-6 shadow-[0_0_50px_rgba(139,92,246,0.35)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-purple-900/30 mb-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-purple-400" />
                  <span>Edit Links – {editingProject.name}</span>
                </h4>
                <button
                  onClick={() => setEditingProject(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSaveLinks} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    GitHub Repository URL:
                  </label>
                  <input
                    type="text"
                    value={editGithub}
                    onChange={(e) => setEditGithub(e.target.value)}
                    placeholder="https://github.com/your-username/project-repo"
                    className="w-full px-3 py-2 bg-[#09090F] border border-purple-500/30 rounded-lg text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Keep as # if you want to leave it private or without a public repo.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Live Demo / Staging URL:
                  </label>
                  <input
                    type="text"
                    value={editLiveDemo}
                    onChange={(e) => setEditLiveDemo(e.target.value)}
                    placeholder="https://my-live-app.com or #"
                    className="w-full px-3 py-2 bg-[#09090F] border border-purple-500/30 rounded-lg text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
