import React, { useState, useEffect } from 'react';
import { FileText, Sliders, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileData;
  language: 'en' | 'ur';
  setLanguage: (lang: 'en' | 'ur') => void;
  onOpenResume: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  language,
  setLanguage,
  onOpenResume,
  onOpenCustomizer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: language === 'en' ? 'About' : 'تعارف', href: '#about' },
    { label: language === 'en' ? 'Projects' : 'پروجیکٹس', href: '#projects' },
    { label: language === 'en' ? 'Experience' : 'تجربہ', href: '#experience' },
    { label: language === 'en' ? 'Skills' : 'مہارتیں', href: '#skills' },
    { label: language === 'en' ? 'Contact' : 'رابطہ', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/80 shadow-sm'
          : 'bg-zinc-950/60 backdrop-blur-sm border-zinc-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-zinc-100 hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          {profile.name}
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-zinc-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Interactive controls and primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 rounded-md transition-colors border border-zinc-800"
            title="Switch Language / زبان تبدیل کریں"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">{language === 'en' ? 'UR' : 'EN'}</span>
          </button>

          {/* Quick Resume View */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span className="whitespace-nowrap">{language === 'en' ? 'Resume' : 'سی وی'}</span>
          </button>

          {/* Portfolio Customizer Button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors"
            title="Edit Profile Information"
            aria-label="Customize profile details"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden lg:inline whitespace-nowrap">Edit</span>
          </button>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-md transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>{language === 'en' ? 'Get in Touch' : 'رابطہ کریں'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'View Resume' : 'سی وی دیکھیں'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Edit Details' : 'تبدیل کریں'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
