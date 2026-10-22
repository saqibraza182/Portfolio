import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomizerModal } from './components/CustomizerModal';

import {
  initialProfile,
  initialProjects,
  initialExperiences,
  initialSkillCategories,
} from './data/defaultData';
import { ProfileData, GameProject } from './types/portfolio';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('saqib_game_xr_developer_profile_v2');
      return saved ? JSON.parse(saved) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const [selectedProject, setSelectedProject] = useState<GameProject | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('saqib_game_xr_developer_profile_v2', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Top Bar Contract */}
      <Navbar
        profile={profile}
        language={language}
        setLanguage={setLanguage}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Cinematic Portfolio Content */}
      <main className="flex-1">
        {/* Split-Screen Hero & Full-Width 4-Column Metric Strip */}
        <Hero
          profile={profile}
          language={language}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Selected Commercial Games & Play Store Titles */}
        <Projects
          projects={initialProjects}
          language={language}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 7+ Years Studio Track Record & Academic Rigor */}
        <Experience
          experiences={initialExperiences}
          language={language}
        />

        {/* Engine, Shaders, Physics & SDK Competencies */}
        <Skills
          categories={initialSkillCategories}
          language={language}
        />

        {/* Interactive Ingestion Form & Direct Channels (Phone & Email) */}
        <Contact
          profile={profile}
          language={language}
        />
      </main>

      {/* Quiet, Clean Footer */}
      <Footer
        profile={profile}
        language={language}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* High-Resolution Game Case Study & Screenshot Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />

      {/* ATS Printable Resume & Master's Degree CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={initialExperiences}
        skillCategories={initialSkillCategories}
        language={language}
      />

      {/* Live Profile Customizer Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />
    </div>
  );
}
