import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import DiagnosticShuffler from './cards/DiagnosticShuffler';
import TelemetryTypewriter from './cards/TelemetryTypewriter';
import CursorProtocolScheduler from './cards/CursorProtocolScheduler';
import WebsiteDesignCard from './cards/WebsiteDesignCard';
import AIChatbotCard from './cards/AIChatbotCard';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
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
      
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="section-title font-sans text-4xl md:text-5xl font-bold text-text-main">
            What I Do For You
          </h2>
        </div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <div className="service-card">
            <DiagnosticShuffler />
          </div>
          <div className="service-card">
            <TelemetryTypewriter />
          </div>
          <div className="service-card">
            <CursorProtocolScheduler />
          </div>
        </div>

        {/* Bottom Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mt-8">
          <div className="service-card">
            <WebsiteDesignCard />
          </div>
          <div className="service-card">
            <AIChatbotCard />
          </div>
        </div>

      </div>
    </section>
  );
}
