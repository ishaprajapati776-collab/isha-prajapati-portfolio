import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, AlertCircle, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactSectionProps {
  profile: ProfileData;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'prepared';
    mailtoUrl?: string;
  }>({ status: 'idle' });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a clear subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Construct genuine mailto URL to initiate user's email client directly without fake server success claims
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailto = `mailto:${profile.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Trigger user mail client
    window.location.href = mailto;

    setSubmissionStatus({
      status: 'prepared',
      mailtoUrl: mailto,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyDraft = () => {
    const draft = `To: ${profile.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\n\nFrom: ${formData.fullName} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#09090F]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Amazing Together!
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a project idea or an opportunity? I'd love to connect and discuss how we can create something meaningful.
          </p>
        </div>

        {/* Contact Layout: Info Column + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 bg-[#11111B]/90 rounded-2xl p-8 border border-purple-500/20 shadow-[0_0_35px_rgba(139,92,246,0.12)] space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach out directly via email or connect with me on professional developer networks.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#09090F] border border-purple-500/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Email Address</div>
                    <div className="text-sm font-semibold text-white select-all">{profile.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl bg-[#09090F] border border-purple-500/25 hover:border-purple-400/50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {profile.linkedin.replace('https://', '')}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl bg-[#09090F] border border-purple-500/25 hover:border-purple-400/50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {profile.github.replace('https://', '')}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#09090F] border border-purple-500/25 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-white">{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-purple-900/30 text-xs text-slate-400 leading-relaxed font-mono">
              Available for full-time .NET software engineering opportunities, contract projects, and technical discussions.
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#11111B]/90 rounded-2xl p-8 border border-purple-500/20 shadow-[0_0_35px_rgba(139,92,246,0.12)]">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            {/* Submission Status Banner (Honest, transparent, no fake server claim) */}
            {submissionStatus.status === 'prepared' && (
              <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 space-y-3">
                <div className="flex items-start gap-2.5 text-purple-200 text-xs">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-1">
                      Email Draft Prepared &amp; Client Opened!
                    </strong>
                    Your message has been formatted and opened in your email software addressed to{' '}
                    <span className="font-mono text-purple-300">{profile.email}</span>.
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#09090F] border border-purple-500/30 text-xs font-mono text-purple-300 hover:text-white transition-colors"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Draft Text</span>
                      </>
                    )}
                  </button>

                  <a
                    href={submissionStatus.mailtoUrl}
                    className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 underline font-mono"
                  >
                    Re-open Email App
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090F] border ${
                      errors.fullName ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-400'
                    } text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090F] border ${
                      errors.email ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-400'
                    } text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Time .NET Developer Opportunity"
                  className={`w-full px-4 py-3 rounded-xl bg-[#09090F] border ${
                    errors.subject ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-400'
                  } text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, team opportunity, or discussion topic..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#09090F] border ${
                    errors.message ? 'border-rose-500' : 'border-purple-500/25 focus:border-purple-400'
                  } text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-y`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
