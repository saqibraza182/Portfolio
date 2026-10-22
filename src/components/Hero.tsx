import React, { useState } from 'react';
import { ArrowDown, FileText, Mail, Phone, Linkedin, Check, Gamepad2, Award, Zap, Glasses, Monitor, Smartphone } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
  language: 'en' | 'ur';
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, language, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-zinc-800/80 overflow-hidden">
      {/* Subtle cinematic ambient glow behind hero */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <Gamepad2 className="w-4 h-4 text-blue-400" />
              <span>{language === 'en' ? 'Senior Unity & XR Architect' : 'سینئر یونٹی اور ایکس آر آرکیٹیکٹ'}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300 font-normal">
                {language === 'en' ? 'Game Producer' : 'گیم پروڈیوسر'}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-normal">
                {language === 'en' ? '7+ Years Exp' : '7 سالہ تجربہ'}
              </span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              {language === 'en'
                ? 'Engineering high-octane 3D gameplay, immersive XR (Desktop · AR · VR · MR) & Play Store hits.'
                : 'ڈیسک ٹاپ، اے آر، وی آر، ایم آر اور گوگل پلے اسٹور کے لیے جدید اور ہائی پرفارمنس گیمز کی تعمیر۔'}
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              {language === 'en' ? profile.bio : profile.bioUrdu}
            </p>

            {/* Supported XR & Gaming Platforms Bar */}
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-300">
              <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">Core Domains:</span>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Glasses className="w-3.5 h-3.5 text-blue-400" />
                <span>AR / VR / MR</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                <span>Desktop (PC/Mac)</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Android & iOS</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>WebGL & Playable Ads</span>
              </div>
            </div>

            {/* Current Academic Pursuit & Trust marker */}
            <div className="flex items-center gap-2.5 text-xs text-zinc-300 py-0.5">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium text-amber-300/90">{profile.currentPursuit}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{profile.location}</span>
            </div>

            {/* Availability info */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">{profile.availability}</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>{language === 'en' ? 'Explore Game & XR Works' : 'پروجیکٹس دیکھیں'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>{language === 'en' ? 'View Full CV / Resume' : 'مکمل سی وی دیکھیں'}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 rounded-lg transition-colors inline-flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 rounded-lg transition-colors inline-flex items-center gap-2"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-semibold">Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs">{profile.phone}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-zinc-400 text-xs">
              <span className="uppercase tracking-wider text-zinc-500 font-medium">Connect</span>
              <div className="h-3 w-[1px] bg-zinc-800" />
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="underline-offset-2 hover:underline">linkedin.com/in/saqibraztoor</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-zinc-100 transition-colors hover:underline"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor / Real Photo with Holographic Tech Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Outer cinematic neon aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-xl opacity-75" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-900 shadow-2xl">
                {!imgError ? (
                  <img
                    src={profile.portraitUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full aspect-square object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full aspect-square bg-zinc-950 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-2xl font-bold text-blue-400 mb-4">
                      SR
                    </div>
                    <h3 className="text-lg font-bold text-white">{profile.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{profile.title}</p>
                  </div>
                )}

                {/* Cinematic HUD Overlay Card */}
                <div className="p-4 bg-zinc-950/95 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{profile.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 font-mono">
                        XR LEAD
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Simfusion · Ideofuzion · Islamabad</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-mono font-bold text-cyan-400 flex items-center justify-end gap-1">
                      <Glasses className="w-3.5 h-3.5 text-cyan-400" />
                      <span>AR · VR · MR · PC</span>
                    </p>
                    <p className="text-[10px] text-zinc-500">60/90 FPS Locked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip below Hero Split */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white flex items-baseline gap-1">
              <span>{profile.yearsExperience}</span>
              <span className="text-xs font-sans text-blue-400 font-normal">Industry Experience</span>
            </p>
            <p className="text-xs text-zinc-400">
              {language === 'en' ? 'Years Hands-on Game & XR Engineering' : 'سال کا پیشہ ورانہ گیم اور ایکس آر تجربہ'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white flex items-baseline gap-1">
              <span>{profile.gamesShipped}</span>
              <span className="text-xs font-sans text-emerald-400 font-normal">Commercial Releases</span>
            </p>
            <p className="text-xs text-zinc-400">
              {language === 'en' ? 'Shipped Games, XR Apps & Research' : 'شوٹنگ، ایناٹمی سمولیشن اور گیمز'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white flex items-baseline gap-1">
              <span>{profile.fpsTarget}</span>
              <span className="text-xs font-sans text-cyan-400 font-normal">XR & Mobile Target</span>
            </p>
            <p className="text-xs text-zinc-400">
              {language === 'en' ? '90 FPS VR & 60 FPS Mobile' : 'وی آر اور موبائل پر ہموار پرفارمنس'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white flex items-baseline gap-1">
              <span>{profile.downloadsReach}</span>
              <span className="text-xs font-sans text-amber-400 font-normal">Store Lifetime</span>
            </p>
            <p className="text-xs text-zinc-400">
              {language === 'en' ? 'Google Play & App Store Reach' : 'پلے اسٹور اور انٹرپرائز یوزرز'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
