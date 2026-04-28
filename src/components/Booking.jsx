import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Booking() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.booking-content > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="booking" ref={containerRef} className="py-24 md:py-32 bg-accent w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center booking-content">
        
        <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Book Your Free 20-Minute Audit
        </h2>
        
        <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
          No commitment. Just a conversation about where automation can save you time. I'll review your workflow and give you a clear picture of what's possible.
        </p>

        {/* HubSpot Embed Container */}
        <div 
          className="bg-white rounded-3xl shadow-2xl p-0 md:p-4 mx-auto w-full max-w-3xl min-h-[600px] mb-8 relative border border-white/20 flex flex-col items-center justify-center overflow-hidden"
          style={{ maxWidth: '100%', overflow: 'hidden' }}
        >
          {/* Iframe approach is more robust for React than external scripts */}
          <iframe 
            src="https://meetings-na2.hubspot.com/tony4?embed=true"
            className="h-[700px] md:h-[650px] border-0 bg-white rounded-2xl"
            style={{ width: '100%', minWidth: '100%', maxWidth: '100%' }}
            title="Book a meeting with Tony"
            data-testid="hubspot-iframe"
          ></iframe>
          
          {/* Fallback Text in case iframe doesn't load/is blocked */}
          <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none opacity-50 text-xs">
            Or email me directly: <a href="mailto:tony@automateandelevatebiz.com" className="pointer-events-auto underline">tony@automateandelevatebiz.com</a>
          </div>
        </div>

        <p className="font-mono text-sm text-white/70">
          🔒 No spam. No pressure. I respond within 24 hours.
        </p>

      </div>
    </section>
  );
}
