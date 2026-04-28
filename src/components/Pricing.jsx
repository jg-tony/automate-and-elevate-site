import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Free Audit",
    price: "$0",
    badge: "Start Here",
    features: [
      "20-minute workflow review",
      "Identify top automation opportunities",
      "No commitment required",
      "Local or video call"
    ],
    cta: "Book Free Audit",
    href: "#booking",
    featured: false
  },
  {
    title: "Starter Setup",
    price: "$500–$800",
    badge: "Most Popular for New Clients",
    features: [
      "1–2 automations fully set up",
      "Appointment reminders OR lead follow-up",
      "Training so you can manage it",
      "30-day email support"
    ],
    cta: "Get Started",
    href: "#booking",
    featured: false
  },
  {
    title: "Growth Bundle",
    price: "$1,500–$2,500",
    badge: "⭐ Most Popular",
    features: [
      "Full automation stack",
      "CRM setup + pipeline",
      "Appointment + reminder system",
      "Google review automation",
      "Lead capture + follow-up",
      "Website contact form automation",
      "AI chatbot for your website",
      "Website available as separate add-on",
      "60-day support included"
    ],
    cta: "Book Free Audit",
    href: "#booking",
    featured: true
  },
  {
    title: "Monthly Retainer",
    price: "$300–$600/mo",
    badge: "Ongoing Partnership",
   features: [
  "1–2 new automations added monthly",
  "Ongoing support & troubleshooting",
  "Monthly performance check-in call",
  "Priority response within 24 hours",
  "Cancel anytime — no contracts"
],
    cta: "Let's Talk",
    href: "#contact",
    featured: false
  }
];

export default function Pricing() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="pricing" ref={containerRef} className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-text-main mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-sans text-xl text-text-secondary">
            No hidden fees. No confusing contracts. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card relative flex flex-col bg-white rounded-3xl p-8 transition-transform duration-300
                ${plan.featured 
                  ? 'border-2 border-accent shadow-[0_20px_50px_rgba(26,86,219,0.15)] scale-100 lg:scale-105 z-10' 
                  : 'border border-border shadow-md hover:shadow-lg'
                }
              `}
            >
              <div className="mb-6">
                <span className={`inline-block font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4
                  ${plan.featured ? 'bg-accent text-white' : 'bg-section text-text-secondary border border-border'}
                `}>
                  {plan.badge}
                </span>
                <h3 className="font-sans font-bold text-2xl text-text-main mb-2">
                  {plan.title}{plan.featured && ' ⭐'}
                </h3>
                <div className="font-sans font-bold text-3xl text-accent">
                  {plan.price}
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={plan.href}
                className={`w-full py-3 px-6 rounded-full font-sans font-medium text-center transition-all duration-300 hover:scale-[1.03]
                  ${plan.featured 
                    ? 'bg-accent text-white hover:bg-accent-hover' 
                    : 'bg-white text-text-main border border-border hover:border-accent hover:text-accent'
                  }
                `}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-sans text-text-secondary">
            Not sure which plan? Start with the free audit — it's 20 minutes and completely free.
          </p>
        </div>

        {/* Website & Chatbot Add-Ons Box */}
        <div className="max-w-4xl mx-auto mt-16 bg-[#F8FAFC] rounded-2xl border-2 border-accent p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold font-sans text-text-main mb-8">Also need a website or chatbot?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-sans font-bold text-lg text-text-main">Starter Presence</h4>
                <span className="font-sans font-bold text-accent">$600–$900</span>
              </div>
              <p className="font-sans text-text-secondary text-sm">1-page professional site + booking automation + welcome email</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-sans font-bold text-lg text-text-main">Full Business Site</h4>
                <span className="font-sans font-bold text-accent">$1,200–$1,800</span>
              </div>
              <p className="font-sans text-text-secondary text-sm">Multi-page site + contact form + full automation stack</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-sans font-bold text-lg text-text-main">Website + Growth Bundle</h4>
                <span className="font-sans font-bold text-accent">$1,500–$2,500</span>
              </div>
              <p className="font-sans text-text-secondary text-sm">Everything in Growth Bundle + a complete custom website</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-sans font-bold text-lg text-text-main">AI Chatbot Add-On</h4>
                <span className="font-sans font-bold text-accent">$400–$800</span>
              </div>
              <p className="font-sans text-text-secondary text-sm">GPT-powered chat widget trained on your business. Answers questions, captures leads, books appointments 24/7.</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-text-secondary font-sans italic border-t border-border pt-6">All websites are mobile-first, fast-loading, and connected to your automations from day one.</p>
        </div>

      </div>
    </section>
  );
}
