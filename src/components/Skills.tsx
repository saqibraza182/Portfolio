import React from 'react';
import { Gamepad2, Cpu, Smartphone, Glasses, Layers, ShieldCheck } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
  language: 'en' | 'ur';
}

export const Skills: React.FC<SkillsProps> = ({ categories, language }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Glasses':
        return <Glasses className="w-5 h-5 text-cyan-400" />;
      case 'Gamepad':
        return <Gamepad2 className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-blue-400">
            {language === 'en' ? 'Core Proficiencies' : 'تکنیکی مہارتیں'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Technical Competencies' : 'ٹیکنالوجیز اور ٹولز'}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {language === 'en'
              ? 'Deep hands-on experience across the entire web stack, from low-latency client rendering to resilient cloud architectures.'
              : 'فرنٹ اینڈ، بیک اینڈ، کلاؤڈ ڈیٹا بیسز اور ماڈرن سسٹم ڈیزائن کے تمام شعبوں پر گرفت۔'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, cIdx) => (
            <div
              key={cIdx}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-zinc-700/80 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List in Tabular Format */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-sm py-1.5 border-b border-zinc-800/50 last:border-0"
                    >
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-zinc-400">
                        <span className="text-zinc-500">{skill.level}</span>
                        <span className="text-zinc-700" aria-hidden="true">·</span>
                        <span className="text-zinc-300 font-semibold">{skill.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom trust footer */}
              <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-500">
                Verified in production environments
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
