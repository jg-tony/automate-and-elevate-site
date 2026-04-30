import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CheckCircle, XCircle, ArrowRight, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const before = [
  'Booking calls taken manually by phone',
  'Leads fell through the cracks — no CRM',
  'No-shows were common with no reminders',
  'Google reviews only happened by chance',
  'Every inquiry required a personal response',
];

const after = [
  'AI chatbot handles FAQs and sends clients to book instantly',
  'Every lead captured automatically in HubSpot CRM',
  'Automated reminder emails eliminate no-shows',
  'Google review request fires automatically after each session',
  'Follow-up emails run on their own — zero manual effort',
];

const stats = [
  { value: '8+', unit: 'hrs/week', label: 'saved on admin work' },
  { value: '100%', unit: '', label: 'of leads captured in CRM' },
  { value: '0', unit: '', label: 'manual booking calls needed' },
  { value: 'Auto', unit: '', label: 'Google reviews requested' },
];

const steps = [
  {
    num: '01',
    title: 'Visitor lands on the website',
    desc: 'An AI chatbot greets them instantly, answers questions about services and pricing, and sends them straight to the booking page — 24/7, no phone needed.',
  },
  {
    num: '02',
    title: 'Client books the appointment',
    desc: 'An online booking form captures name, email, phone, and address. The time slot is confirmed on the spot. No back-and-forth calls.',
  },
  {
    num: '03',
    title: 'CRM contact created automatically',
    desc: 'A new contact and deal appear in HubSpot the moment a booking is made. The owner sees every client in one organized dashboard.',
  },
  {
    num: '04',
    title: 'Reminder emails fire automatically',
    desc: 'Automated emails go out before the appointment. No-shows drop significantly because clients are reminded without the owner doing anything.',
  },
  {
    num: '05',
    title: 'Google Review request sent after completion',
    desc: 'Once the appointment is marked complete, a polished review request email is sent automatically. Reviews grow on autopilot.',
  },
  {
    num: '06',
    title: 'Follow-up sequence kicks in',
    desc: 'A follow-up email checks in with the client and encourages re-booking — all without the owner lifting a finger.',
  },
];

export default function CaseStudy() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cs-fade', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
      gsap.from('.cs-step', {
        scrollTrigger: { trigger: '.cs-steps', start: 'top 80%' },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      id="case-study"
      ref={containerRef}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="cs-fade text-center mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] font-semibold">
            Real-World Automation
          </span>
        </div>
        <h2 className="cs-fade font-sans font-bold text-4xl md:text-5xl text-[#1E3A5F] text-center mb-4 leading-tight">
          From Manual Chaos to<br className="hidden sm:block" /> Fully Automated Bookings
        </h2>
        <p className="cs-fade font-sans text-lg text-[#4A5568] text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          How a local mobile service business saved 8+ hours a week, eliminated no-shows,
          and started collecting Google reviews automatically — without hiring anyone.
        </p>

        {/* Before / After */}
        <div className="cs-fade grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Before */}
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="font-sans font-bold text-red-700 text-sm uppercase tracking-wide">Before</span>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span className="font-sans text-[#4A5568] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="font-sans font-bold text-green-700 text-sm uppercase tracking-wide">After</span>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="font-sans text-[#4A5568] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="cs-fade grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#F7FAFC] rounded-2xl p-6 text-center border border-[#E2E8F0]">
              <div className="font-sans font-bold text-3xl text-[#1A56DB] leading-none">
                {s.value}
                {s.unit && <span className="text-lg ml-1">{s.unit}</span>}
              </div>
              <div className="font-sans text-xs text-[#4A5568] mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="cs-fade mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A56DB] font-semibold">
            The Automation Flow
          </span>
        </div>
        <h3 className="cs-fade font-sans font-bold text-3xl text-[#1E3A5F] mb-3">
          How it works, step by step
        </h3>
        <p className="cs-fade font-sans text-[#4A5568] mb-10 max-w-xl leading-relaxed">
          Set it up once. Every step from first website visit to Google review runs automatically.
        </p>

        <div className="cs-steps grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="cs-step flex items-start gap-4 bg-[#F7FAFC] rounded-2xl p-5 border border-[#E2E8F0]"
            >
              <div className="font-mono text-2xl font-bold text-[#1A56DB] leading-none pt-0.5 flex-shrink-0 w-10">
                {step.num}
              </div>
              <div>
                <h4 className="font-sans font-bold text-[#1E3A5F] text-sm mb-1">{step.title}</h4>
                <p className="font-sans text-[#4A5568] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="cs-fade bg-[#EEF4FF] border border-[#C7D9F8] rounded-2xl p-8 mb-20 border-l-4 border-l-[#1A56DB]">
          <p className="font-sans italic text-[#1E3A5F] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            "The goal was simple: set it up once and never have to think about it again.
            The entire system runs itself — from the first chatbot message to the Google review request."
          </p>
          <p className="font-mono text-xs text-[#1A56DB] text-center mt-4 uppercase tracking-widest">
            — Tony, Automate & Elevate LLC
          </p>
        </div>

        {/* CTA */}
        <div className="cs-fade bg-[#1E3A5F] rounded-3xl p-10 text-center">
          <h3 className="font-sans font-bold text-3xl text-white mb-3">
            Want this for your business?
          </h3>
          <p className="font-sans text-[#94A3B8] text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Book a free 20-minute audit. I'll map out exactly which automations would save
            you the most time — specific to your business, your tools, your situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-[#1A56DB] text-white font-sans font-medium px-8 py-4 rounded-full hover:bg-[#1440B3] transition-all duration-300 hover:scale-[1.03]"
            >
              Book Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/case_study.pdf"
              download="Automate_and_Elevate_Case_Study.pdf"
              className="inline-flex items-center gap-2 bg-transparent text-white font-sans font-medium px-8 py-4 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]"
            >
              <Download className="w-4 h-4" />
              Download Case Study
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
