import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Github, Mail, Sparkles, Copy, Check } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroSectionProps {
  profile: ProfileData;
}

const DESIGNATIONS = [
  '.NET Developer',
  'Software Developer',
  'Backend Developer',
  'Web Application Developer',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect for animated designation
  useEffect(() => {
    const currentFullRole = DESIGNATIONS[roleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullRole.length) {
          setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % DESIGNATIONS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-violet-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Small introduction kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>HELLO, I'M</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {profile.name}
            </h1>

            {/* Animated Designation */}
            <div className="h-10 sm:h-14 flex items-center justify-center text-xl sm:text-3xl lg:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-purple-200">
              <span>{displayedText}</span>
              <span className="inline-block w-2.5 sm:w-3 h-6 sm:h-8 bg-purple-400 ml-1.5 animate-pulse" />
            </div>
          </div>

          {/* Main Tagline */}
          <p className="text-lg sm:text-2xl font-medium text-purple-200/90 max-w-2xl mx-auto">
            Building Smart, Scalable &amp; Modern Web Applications.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            I specialize in developing database-driven web applications using C#, ASP.NET MVC, SQL Server and modern web technologies. I enjoy transforming complex problems into simple and effective solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-purple-200 bg-[#11111B] border border-purple-500/30 hover:border-purple-400 hover:bg-[#181828] hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Icons Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">
              Connect:
            </span>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all text-xs font-mono"
                title="Click to copy email address"
                aria-label="Copy Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Clean Tech Highlights Strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#11111B]/80 border border-purple-500/20 text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>C# &amp; .NET</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#11111B]/80 border border-purple-500/20 text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span>ASP.NET MVC</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#11111B]/80 border border-purple-500/20 text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>SQL Server &amp; EF</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
