import React from 'react';
import { X, Printer, Download, Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { ProfileData, Project } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  projects: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#11111B] border border-purple-500/40 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-[0_0_60px_rgba(139,92,246,0.35)] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Not printed) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161628] border-b border-purple-500/20 sticky top-0 z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Resume Preview
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">Isha Prajapati – .NET Developer</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-purple-950/40 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#0C0C14] text-slate-200 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-purple-900/40 pb-6 print:border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg font-semibold text-purple-400 print:text-purple-700 mt-1">
              {profile.role}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-400 print:text-slate-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.email}</span>
              </span>
              <span>·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.linkedin.replace('https://', '')}</span>
              </a>
              <span>·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-purple-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.github.replace('https://', '')}</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Dedicated and analytical .NET Software Developer with experience designing and developing dynamic database-driven web applications using Microsoft .NET technologies (C#, ASP.NET MVC, Entity Framework) and Microsoft SQL Server. Passionate about clean code, modular architecture, and transforming real-world business requirements into reliable software solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 font-bold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#11111B] print:bg-slate-50 p-3 rounded-lg border border-purple-500/20 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Backend &amp; Languages:</span>
                <span className="text-slate-300 print:text-slate-700">C#, ASP.NET MVC, ASP.NET Core, Entity Framework, LINQ, REST API</span>
              </div>
              <div className="bg-[#11111B] print:bg-slate-50 p-3 rounded-lg border border-purple-500/20 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Database &amp; Storage:</span>
                <span className="text-slate-300 print:text-slate-700">Microsoft SQL Server, SQL Queries, Database Management, Normalization</span>
              </div>
              <div className="bg-[#11111B] print:bg-slate-50 p-3 rounded-lg border border-purple-500/20 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Frontend Technologies:</span>
                <span className="text-slate-300 print:text-slate-700">HTML5, CSS3, JavaScript, Bootstrap, jQuery</span>
              </div>
              <div className="bg-[#11111B] print:bg-slate-50 p-3 rounded-lg border border-purple-500/20 print:border-slate-200">
                <span className="font-bold text-white print:text-black block mb-1">Development Tools:</span>
                <span className="text-slate-300 print:text-slate-700">Visual Studio, Git, GitHub, Postman</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 font-bold mb-4">
              Work Experience
            </h2>
            {profile.experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black">{exp.position}</h3>
                    <div className="text-xs text-purple-300 print:text-purple-800 font-medium">
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                    {exp.period} ({exp.experienceDuration})
                  </div>
                </div>

                <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed pt-1">
                  {exp.description}
                </p>

                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-700 space-y-1 pt-1">
                  {exp.keyAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 font-bold mb-4">
              Key Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-sm font-bold text-white print:text-black">
                      {proj.name}
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 print:text-purple-800">
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-xs text-slate-400 print:text-slate-600">
                    <strong>Key Features:</strong> {proj.features.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 print:text-purple-700 font-bold mb-3">
              Education
            </h2>
            {profile.education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="text-sm font-bold text-white print:text-black">{edu.degree}</div>
                  <div className="text-xs text-purple-300 print:text-purple-800">{edu.institution}</div>
                </div>
                <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer info (print hidden) */}
        <div className="px-6 py-4 bg-[#141424] border-t border-purple-500/20 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-400 font-mono">
            Directly formatted for A4 print and PDF exports.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
