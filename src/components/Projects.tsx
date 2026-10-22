import React, { useState } from 'react';
import { ArrowUpRight, Gamepad2, Star, Zap, Glasses, Layers } from 'lucide-react';
import { GameProject } from '../types/portfolio';

interface ProjectsProps {
  projects: GameProject[];
  language: 'en' | 'ur';
  onSelectProject: (project: GameProject) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, language, onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AR, VR & XR' | 'Shooting & Action' | 'Simulation & Sports' | 'Playable Ads & Casual' | 'R&D & Conferences'>('All');

  const filterOptions = [
    { id: 'All', label: language === 'en' ? 'All Works' : 'تمام پروجیکٹس' },
    { id: 'AR, VR & XR', label: 'AR · VR · MR · Desktop' },
    { id: 'Shooting & Action', label: 'Shooting & Action' },
    { id: 'Simulation & Sports', label: 'Simulation & Sports' },
    { id: 'Playable Ads & Casual', label: 'Playable Ads & Casual' },
    { id: 'R&D & Conferences', label: 'PGDC & R&D' },
  ] as const;

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <Gamepad2 className="w-4 h-4 text-blue-400" />
              <span>{language === 'en' ? 'Shipped Games & XR Systems' : 'گیمز اور ایکس آر سسٹمز'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {language === 'en' ? 'Commercial Game & XR Showcase' : 'کمرشل گیمز اور اے آر / وی آر پروجیکٹس'}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {language === 'en'
                ? 'Featured production titles spanning Complete Anatomy XR (Simfusion), PhD Educational AR (MathQuest), 6-DOF VR Combat Simulators, and multi-million download Play Store hits.'
                : 'سمفیوژن کے تحت ایمرس ایناٹمی، پی ایچ ڈی ریسرچ میتھ کویسٹ، وی آر شوٹنگ ٹریننگ اور پلے اسٹور ہٹس کا تفصیلی جائزہ۔'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === opt.id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Media Container with Cinematic Screenshot */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/80">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  {project.category === 'AR, VR & XR' && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-950/80 backdrop-blur-md border border-blue-700/80 text-[11px] font-bold text-blue-300">
                      <Glasses className="w-3 h-3 text-blue-400" />
                      <span>XR / SPATIAL</span>
                    </div>
                  )}
                  {project.playStoreMetrics?.rating && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] font-bold text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{project.playStoreMetrics.rating}</span>
                    </div>
                  )}
                  {project.playStoreMetrics?.downloads && (
                    <div className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-emerald-400 font-semibold truncate max-w-[200px]">
                      {project.playStoreMetrics.downloads}
                    </div>
                  )}
                </div>

                {/* Corner quick affordance */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:bg-zinc-900 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Overlaid Bottom Title Strip */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white drop-shadow">{project.studio}</span>
                    {project.role && (
                      <span className="text-[10px] text-zinc-400 border-l border-zinc-700 pl-2">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-zinc-300 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                    <Zap className="w-3 h-3 text-emerald-400" />
                    <span>{project.category === 'AR, VR & XR' ? '90 FPS / XR' : '60 FPS Locked'}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Clean unboxed metadata with separators - NO PILLS */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 flex-wrap">
                    <span className="font-mono tabular-nums">{project.year}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-blue-400 font-semibold">{project.genre}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-300">{project.platforms.slice(0, 3).join(', ')}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Footer: Tech Stack + View Case Study Trigger */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div className="text-zinc-400 truncate max-w-[65%]">
                    {project.technologies.slice(0, 4).join(' · ')}
                  </div>

                  <span className="font-semibold text-zinc-200 group-hover:text-white flex items-center gap-1 shrink-0">
                    <span>{language === 'en' ? 'Architecture & Specs' : 'کیس اسٹڈی دیکھیں'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
