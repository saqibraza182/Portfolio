import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, ArrowUpRight, Gamepad2 } from 'lucide-react';
import { ProfileData, ContactMessage } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
  language: 'en' | 'ur';
}

export const Contact: React.FC<ContactProps> = ({ profile, language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior Unity Developer Role',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);
  const [inquiries, setInquiries] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('saqib_portfolio_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newInquiry: ContactMessage = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      try {
        localStorage.setItem('saqib_portfolio_inquiries', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }

      setSubmittedMessage(newInquiry);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Senior Unity Developer Role',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
            <Gamepad2 className="w-4 h-4 text-blue-400" />
            <span>{language === 'en' ? 'Studio & Commercial Inquiries' : 'براہ راست رابطہ'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {language === 'en' ? 'Let’s Build the Next Hit Title' : 'نئے گیم پروجیکٹس اور ملازمت کے لیے رابطہ'}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {language === 'en'
              ? 'Looking for a Senior Unity Developer, Lead Game Architect, or custom Playable Ads specialist? Reach out directly via email, phone, or the transmission form.'
              : 'اگر آپ اپنی اسٹوڈیو کے لیے سینئر یونٹی ڈویلپر تلاش کر رہے ہیں یا پلے اسٹور گیم بنوانا چاہتے ہیں تو بلا جھجھک رابطہ کریں۔'}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Direct Channels & Phone/Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Direct Contact Channels
              </span>

              {/* Phone Channel */}
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 font-medium">Direct Phone & WhatsApp</p>
                  <a href={`tel:${profile.phone}`} className="text-sm font-semibold text-white hover:text-blue-400 truncate block">
                    {profile.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Channel */}
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500 font-medium">Official Email</p>
                  <p className="text-sm font-semibold text-white truncate">{profile.email}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Direct Link */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Status details */}
              <div className="pt-2 border-t border-zinc-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Current Status</span>
                  <span className="text-emerald-400 font-semibold">{profile.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Base Location</span>
                  <span className="text-zinc-200">{profile.location} (Remote / Hybrid)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Education</span>
                  <span className="text-zinc-300">MS Games Dev, Air University</span>
                </div>
              </div>
            </div>

            {/* Inquiries history */}
            {inquiries.length > 0 && (
              <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                    <span>Inquiries Dispatched ({inquiries.length})</span>
                  </span>
                  <button
                    onClick={() => {
                      setInquiries([]);
                      localStorage.removeItem('saqib_portfolio_inquiries');
                    }}
                    className="text-[11px] text-zinc-500 hover:text-zinc-400 underline"
                  >
                    Clear history
                  </button>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="p-3 rounded-lg bg-zinc-950/80 border border-zinc-800/60 text-xs space-y-1">
                      <div className="flex items-center justify-between font-medium text-zinc-300">
                        <span className="truncate">{inq.name} ({inq.email})</span>
                        <span className="font-mono text-[10px] text-zinc-500 shrink-0">{inq.date.split(',')[0]}</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] line-clamp-1">{inq.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-6">
              {submittedMessage ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Transmission Received</h3>
                    <p className="text-xs text-zinc-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{submittedMessage.name}</span>. Your inquiry regarding <span className="text-blue-400 font-semibold">{submittedMessage.subject}</span> has been logged. Muhammad Saqib Raza will respond shortly to <span className="text-blue-300">{submittedMessage.email}</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmittedMessage(null)}
                    className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">
                        Your Name / Studio <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Studio Lead / Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-300">
                        Official Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@studio.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Senior Unity Developer Role">Senior Unity Developer Role (Full-Time / Hybrid)</option>
                      <option value="Commercial Game Development Contract">Commercial Game Development (Play Store / App Store)</option>
                      <option value="Playable Ads & Luna SDK Integration">Playable Ads & Sub-5MB Luna Pipeline</option>
                      <option value="Mobile Profiling & 60 FPS Optimization">Mobile Profiling & 60 FPS Optimization</option>
                      <option value="PGDC 2025 / Academic Collaboration">PGDC 2025 / Academic Collaboration</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-zinc-300">
                        Project Scope or Role Overview <span className="text-blue-400">*</span>
                      </label>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your target platform, game genre, timeline, or position requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-zinc-500">
                      Direct transmission to Muhammad Saqib Raza.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Transmit Message' : 'پیغام بھیجیں'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
