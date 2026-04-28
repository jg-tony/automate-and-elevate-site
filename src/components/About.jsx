import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
      
      gsap.from('.decorative-t', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* Decorative Initial */}
          <div className="decorative-t flex-shrink-0 hidden lg:flex w-1/3 justify-center items-start pt-8">
            <span className="font-sans font-bold text-accent text-[20rem] leading-none select-none opacity-90 drop-shadow-2xl">
              T
            </span>
          </div>

          {/* Text Content */}
          <div className="about-content flex-grow lg:w-2/3">
            <p className="font-mono uppercase tracking-widest text-sm text-accent mb-4">
              About
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Hi, I'm Tony.
            </h2>
            
            <div className="font-sans text-lg md:text-xl text-white/80 leading-relaxed space-y-6 max-w-2xl">
              <p>
                I'm a Wichita-based automation consultant helping local small businesses reclaim their time. I specialize in setting up simple, affordable automations using tools like Zapier, HubSpot, and Calendly, and more — so you can focus on running your business, not chasing follow-ups.
              </p>
              <p>
                I work with any service-based business that runs on appointments, follow-ups, and repeat customers — contractors, clinics, salons, gyms, law offices, and more. If you're tired of doing the same repetitive tasks every single day, this is for you.              </p>
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-sans text-sm flex items-center gap-2">
                <span>📍</span> Wichita, KS
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-sans text-sm flex items-center gap-2">
                <span>💻</span> Local + Remote
              </span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full font-sans text-sm flex items-center gap-2">
                <span>🤝</span> Plain-English Explanations
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
