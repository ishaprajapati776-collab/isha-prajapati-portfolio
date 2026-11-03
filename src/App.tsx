/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INITIAL_PROFILE_DATA, PROJECTS_DATA } from './data/portfolioData';
import { ProfileData, Project } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('isha_portfolio_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          !parsed.linkedin ||
          parsed.linkedin.includes('isha-prajapati') ||
          !parsed.github ||
          parsed.github.includes('isha-prajapati')
        ) {
          parsed.linkedin = INITIAL_PROFILE_DATA.linkedin;
          parsed.github = INITIAL_PROFILE_DATA.github;
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_PROFILE_DATA;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('isha_portfolio_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((p: Project) => {
          if (p.githubUrl && p.githubUrl.includes('isha-prajapati')) {
            const defaultMatch = PROJECTS_DATA.find((d) => d.id === p.id);
            if (defaultMatch) {
              return { ...p, githubUrl: defaultMatch.githubUrl };
            }
          }
          return p;
        });
      }
    } catch {
      // ignore
    }
    return PROJECTS_DATA;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  // Sync profile changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('isha_portfolio_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  // Sync projects changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('isha_portfolio_projects', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  const handleUpdateProjectLinks = (projectId: string, githubUrl: string, liveDemoUrl: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, githubUrl, liveDemoUrl } : p))
    );
  };

  const handleResetProfile = () => {
    setProfile(INITIAL_PROFILE_DATA);
    setProjects(PROJECTS_DATA);
    localStorage.removeItem('isha_portfolio_profile');
    localStorage.removeItem('isha_portfolio_projects');
  };

  return (
    <div className="relative min-h-screen bg-[#09090F] text-[#F8FAFC] selection:bg-purple-600/30 selection:text-purple-200">
      {/* Subtle interactive purple particle constellation */}
      <ParticleBackground />

      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenEditProfile={() => setIsEditProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection />
        <ProjectsSection
          projects={projects}
          onUpdateProjectLinks={handleUpdateProjectLinks}
        />
        <ExperienceSection
          profile={profile}
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />
        <EducationSection
          profile={profile}
          onOpenEditProfile={() => setIsEditProfileOpen(true)}
        />
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        projects={projects}
      />

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profile={profile}
        onSave={(updated) => setProfile(updated)}
        onReset={handleResetProfile}
      />
    </div>
  );
}
