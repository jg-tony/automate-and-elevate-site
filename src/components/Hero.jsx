import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
      
      gsap.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center pt-20 pb-24 md:pb-32 px-4 md:px-12 lg:px-24"
    >
      {/* Background Image & Gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.95)] via-[rgba(255,255,255,0.9)] md:via-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.4)] md:to-transparent"></div>
      </div>

      {/* Content Container (Bottom-Left Third) */}
      <div className="relative z-10 w-[85%] md:w-full max-w-2xl flex flex-col items-start">
        <p className="hero-text font-mono text-[#1A56DB] uppercase tracking-widest text-sm mb-4 font-medium">
          Wichita, KS Automation Consulting
        </p>
        
        <h1 className="hero-text font-sans font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-[#1E3A5F] mb-2">
          Save 5–10 Hours a Week
          <span className="block text-[#1E3A5F]">with Simple Automation.</span>
        </h1>
        
        <p className="hero-text font-sans text-[#4A5568] text-[clamp(1.1rem,2vw,1.4rem)] mt-6 max-w-xl leading-relaxed">
          I help small Wichita businesses automate their most repetitive tasks — using affordable tools they can actually manage themselves.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-8">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-sans font-medium text-white bg-[#1A56DB] rounded-full group transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1440B3] rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="relative">Book Your Free Audit</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-sans font-medium text-[#1A56DB] bg-transparent border border-[#1A56DB] rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] hover:border-transparent hover:-translate-y-[1px]"
          >
            See How It Works
          </button>
        </div>
      </div>

      {/* Floating Badge (Bottom-Right) */}
      <div className="hero-badge absolute bottom-8 right-4 md:right-12 bg-white/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="font-mono text-xs text-text-secondary">Available for new clients in Wichita</span>
      </div>
    </section>
  );
}
