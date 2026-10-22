import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { ExperienceItem, EducationItem } from '../types/portfolio';
import { initialEducation } from '../data/defaultData';

interface ExperienceProps {
  experiences: ExperienceItem[];
  language: 'en' | 'ur';
}

export const Experience: React.FC<ExperienceProps> = ({ experiences, language }) => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>{language === 'en' ? 'Professional Track Record' : 'پیشہ ورانہ کیریئر'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {language === 'en' ? '7+ Years Game Studio Experience' : 'گیم اسٹوڈیوز میں 7 سالہ ملازمت کا ریکارڈ'}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {language === 'en'
              ? 'Proven history of engineering and delivering top-tier mobile, console, and WebGL game systems across leading gaming studios in Pakistan.'
              : 'آئیڈیوفیوژن، کوڈورا، پلازما اور جیو ٹیک میں بطور سینئر یونٹی ڈویلپر خدمات۔'}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700/80 transition-all duration-200 space-y-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      0{index + 1}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400 flex-wrap">
                    <span className="font-semibold text-zinc-200">{exp.company}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-400">{exp.employmentType}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 sm:self-start bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements with quantifiable impact */}
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Key Technical Achievements & Pipeline Impact
                </span>
                <div className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized (Clean unboxed text) */}
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 flex-wrap">
                <span className="text-zinc-500 font-medium">Tools & Systems:</span>
                {exp.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="text-zinc-300 font-medium">{skill}</span>
                    {sIdx < exp.skills.length - 1 && (
                      <span className="text-zinc-600" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academic Rigor Section */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>{language === 'en' ? 'Education & Academic Rigor' : 'تعلیم اور ڈگریاں'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialEducation.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors space-y-4"
              >
                <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                      {edu.cgpa}
                    </span>
                    <p className="text-[11px] font-mono text-zinc-500 mt-1">{edu.period}</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
