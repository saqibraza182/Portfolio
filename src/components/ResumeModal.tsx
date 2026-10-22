import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Check, Award, Gamepad2, Glasses, GraduationCap } from 'lucide-react';
import { ProfileData, ExperienceItem, SkillCategory, EducationItem } from '../types/portfolio';
import { initialEducation } from '../data/defaultData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  language: 'en' | 'ur';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  skillCategories,
  language,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${profile.name} - ${profile.title}\nPhone: ${profile.phone}\nEmail: ${profile.email}\nLinkedIn: ${profile.linkedinUrl}\nLocation: ${profile.location}\n\nSummary:\n${profile.bio}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl text-zinc-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">Curriculum Vitae</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-blue-400 font-medium">Muhammad Saqib Raza (Game & XR)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 space-y-8 bg-zinc-900/40 text-zinc-200">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
              {profile.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-blue-400">
              Senior Unity / Game Developer & XR Architect (Desktop · AR · VR · MR)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                {profile.phone}
              </span>
              <span className="text-zinc-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                {profile.email}
              </span>
              <span className="text-zinc-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <Globe className="w-3.5 h-3.5 text-zinc-500" />
                linkedin.com/in/saqibraztoor
              </span>
              <span className="text-zinc-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Gamepad2 className="w-4 h-4 text-blue-400" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Glasses className="w-4 h-4 text-cyan-400" />
              <span>Technical Skill Matrix (Desktop · AR · VR · MR · Mobile)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
                  <p className="font-semibold text-white">{cat.title}</p>
                  <p className="text-zinc-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Professional Studio History & Leadership Roles
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 border-b border-zinc-800/60 pb-5 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-bold text-white">
                      {exp.role} <span className="font-normal text-zinc-400">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400">{exp.location} · {exp.employmentType}</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-300 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-2 border-t border-zinc-800">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Education</span>
            </h2>
            <div className="space-y-3">
              {initialEducation.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs py-2 border-b border-zinc-800/50 last:border-0">
                  <div>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-zinc-400">{edu.institution} ({edu.period})</p>
                    <p className="text-zinc-500 text-[11px] mt-0.5">{edu.details}</p>
                  </div>
                  <span className="font-mono text-emerald-400 font-semibold mt-1 sm:mt-0 shrink-0">
                    {edu.cgpa}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 pt-2 border-t border-zinc-800 text-xs text-zinc-400">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Key Projects & Leadership
            </h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li><strong>ImmersAnatomy (Simfusion):</strong> Producer & Lead Architect for complete human anatomy across AR, VR, Desktop, Android, iOS, and Tablets.</li>
              <li><strong>MathQuest (PhD Research Project):</strong> Lead AR developer for spatial mathematics geometry and learning retention experiments.</li>
              <li><strong>Tactical VR Shooting:</strong> 6-DOF virtual reality firearm manipulation simulator with 90 FPS locked performance.</li>
              <li><strong>PGDC 2025:</strong> Organizing committee member at Air University Department of Computer Games Development.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
