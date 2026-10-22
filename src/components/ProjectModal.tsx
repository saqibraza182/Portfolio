import React, { useEffect } from 'react';
import { X, Play, Gamepad2, Award, Cpu, ShieldCheck, Download, Smartphone } from 'lucide-react';
import { GameProject } from '../types/portfolio';

interface ProjectModalProps {
  project: GameProject | null;
  onClose: () => void;
  language: 'en' | 'ur';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, language }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-zinc-950 border border-zinc-700/80 rounded-2xl shadow-2xl text-zinc-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tabular-nums text-zinc-400">{project.year}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-blue-400 font-semibold">{project.genre}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400">{project.studio}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Platforms */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="text-zinc-500 font-medium">Platforms:</span>
              {project.platforms.map((plat, idx) => (
                <React.Fragment key={plat}>
                  <span className="text-zinc-300 font-medium">{plat}</span>
                  {idx < project.platforms.length - 1 && (
                    <span className="text-zinc-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Full-bleed Cinematic Screenshot Viewer */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[16/9] shadow-xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Play Store & Engineering Metrics Banner */}
          {project.playStoreMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs">
              {project.playStoreMetrics.rating && (
                <div>
                  <p className="text-zinc-500 text-[11px]">Store Rating</p>
                  <p className="text-amber-400 font-bold text-sm">{project.playStoreMetrics.rating}</p>
                </div>
              )}
              {project.playStoreMetrics.downloads && (
                <div>
                  <p className="text-zinc-500 text-[11px]">Total Installs</p>
                  <p className="text-emerald-400 font-bold text-sm font-mono">{project.playStoreMetrics.downloads}</p>
                </div>
              )}
              {project.playStoreMetrics.performanceTarget && (
                <div>
                  <p className="text-zinc-500 text-[11px]">Framerate Target</p>
                  <p className="text-blue-400 font-bold text-sm font-mono">{project.playStoreMetrics.performanceTarget}</p>
                </div>
              )}
              {project.playStoreMetrics.buildSize && (
                <div>
                  <p className="text-zinc-500 text-[11px]">Build Size Cap</p>
                  <p className="text-white font-bold text-sm font-mono">{project.playStoreMetrics.buildSize}</p>
                </div>
              )}
            </div>
          )}

          {/* Technologies Used (Unboxed Text with Separators) */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Engine, C# & Toolchain Stack</span>
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-zinc-200">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-zinc-600 font-bold" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Deep Dive Engineering Case Study */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Challenge */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Technical & Optimization Challenge</span>
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Unity Engine Architectural Solution</span>
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Engine Architecture Blueprint */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span>Core Subsystems & Mechanics Breakdown</span>
            </h4>
            <div className="space-y-2">
              {project.caseStudy.engineArchitecture.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="font-mono text-xs text-blue-400 shrink-0 mt-0.5 font-bold">0{i+1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Results */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Verified Store & Performance Metrics</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.caseStudy.optimizationMetrics.map((metric, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-zinc-900/95 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
          >
            {language === 'en' ? 'Close Preview' : 'بند کریں'}
          </button>
        </div>
      </div>
    </div>
  );
};
