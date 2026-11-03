import React, { useState } from 'react';
import { X, Save, RotateCcw, Check } from 'lucide-react';
import { ProfileData } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updatedProfile: ProfileData) => void;
  onReset: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: profile.name,
    role: profile.role,
    tagline: profile.tagline,
    email: profile.email,
    location: profile.location,
    linkedin: profile.linkedin,
    github: profile.github,
    company: profile.experience[0]?.company || '[Company / Organization Name]',
    period: profile.experience[0]?.period || '[Joining Date] – Present',
    degree: profile.education[0]?.degree || '[Degree / Qualification]',
    institution: profile.education[0]?.institution || '[College / University Name]',
    passingYear: profile.education[0]?.period || '[Passing Year]',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ProfileData = {
      ...profile,
      name: form.name,
      role: form.role,
      tagline: form.tagline,
      email: form.email,
      location: form.location,
      linkedin: form.linkedin,
      github: form.github,
      experience: [
        {
          ...profile.experience[0],
          company: form.company,
          period: form.period,
        },
      ],
      education: [
        {
          ...profile.education[0],
          degree: form.degree,
          institution: form.institution,
          period: form.passingYear,
        },
      ],
    };

    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#11111B] border border-purple-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-[0_0_60px_rgba(139,92,246,0.35)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/30 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Customize Portfolio Placeholders</h3>
            <p className="text-xs text-purple-300 font-mono mt-0.5">
              Personalize company details, education credentials, and social URLs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-purple-950/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Profile customizations saved successfully to your browser storage!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Work Experience Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Work Experience Details (Prompt Requirements)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Company / Organization Name:</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="[Company / Organization Name]"
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Joining Date / Period:</label>
                <input
                  type="text"
                  value={form.period}
                  onChange={(e) => setForm({ ...form, period: e.target.value })}
                  placeholder="e.g. July 2024 – Present"
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Education Placeholders */}
          <div className="space-y-3 pt-2 border-t border-purple-900/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Education Credentials (Prompt Requirements)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Degree / Qualification:</label>
                <input
                  type="text"
                  value={form.degree}
                  onChange={(e) => setForm({ ...form, degree: e.target.value })}
                  placeholder="[Degree / Qualification]"
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">College / University Name:</label>
                <input
                  type="text"
                  value={form.institution}
                  onChange={(e) => setForm({ ...form, institution: e.target.value })}
                  placeholder="[College / University Name]"
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Passing Year:</label>
                <input
                  type="text"
                  value={form.passingYear}
                  onChange={(e) => setForm({ ...form, passingYear: e.target.value })}
                  placeholder="e.g. 2024"
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Contact Details & Links */}
          <div className="space-y-3 pt-2 border-t border-purple-900/30">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Contact &amp; Social Links
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Email Address:</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">LinkedIn Profile URL:</label>
                <input
                  type="text"
                  value={form.linkedin}
                  onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">GitHub Profile URL:</label>
                <input
                  type="text"
                  value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Location:</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#09090F] border border-purple-500/25 text-xs text-white focus:outline-none focus:border-purple-400 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-slate-400 hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-sm transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
