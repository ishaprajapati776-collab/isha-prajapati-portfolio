import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07070C] border-t border-purple-900/30 text-slate-400 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-purple-900/20">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-xl font-bold font-mono tracking-tight text-white whitespace-nowrap"
            >
              <span className="text-purple-400">&lt;</span>
              <span className="tracking-wider">ISHA</span>
              <span className="text-purple-400">.DEV</span>
              <span className="text-purple-400">/&gt;</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Designed &amp; Developed with passion by {profile.name}.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-purple-300 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-[#11111B] border border-purple-500/20 hover:border-purple-400 text-slate-300 hover:text-purple-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 ml-2 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all shadow-sm"
              title="Back to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Location Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} {profile.name}. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-purple-400/80">Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span>in {profile.location}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
