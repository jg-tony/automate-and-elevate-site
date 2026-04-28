import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Monitor, CheckCircle } from 'lucide-react';

export default function WebsiteDesignCard() {
  const progressRef = useRef(null);
  const checkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // Initial state
    gsap.set(progressRef.current, { width: '0%' });
    gsap.set(checkRef.current, { opacity: 0, scale: 0.5 });

    // Animation sequence
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut'
    })
    .to(progressRef.current, { opacity: 0, duration: 0.2 })
    .to(checkRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.7)'
    })
    .to({}, { duration: 1 }); // Pause at the end

    return () => tl.kill();
  }, []);

  return (
    <div className="bg-white border border-border rounded-2xl p-8 shadow-[0_8px_30px_rgba(26,86,219,0.06)] relative h-full flex flex-col">
      <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        NEW
      </div>
      <div className="text-accent mb-6">
        <Monitor size={32} />
      </div>
      <h3 className="font-sans font-bold text-2xl text-text-main mb-3">
        Website Design & Setup
      </h3>
      <p className="font-sans text-text-secondary leading-relaxed mb-8 flex-grow">
        A clean, professional website built for your business — connected to your automations from day one. No templates that look like everyone else's.
      </p>

      {/* Animation Container */}
      <div className="bg-section rounded-xl p-4 border border-border h-32 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Browser Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[#E2E8F0] flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#CBD5E1]"></div>
          <div className="w-2 h-2 rounded-full bg-[#CBD5E1]"></div>
          <div className="w-2 h-2 rounded-full bg-[#CBD5E1]"></div>
        </div>

        <div className="mt-6 w-full max-w-[180px] relative">
          <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div ref={progressRef} className="h-full bg-accent w-0 rounded-full"></div>
          </div>
          <div className="text-[10px] text-text-secondary text-center mt-2 font-mono uppercase tracking-wider">
            Building your site...
          </div>
        </div>

        <div ref={checkRef} className="absolute inset-0 mt-6 flex flex-col items-center justify-center bg-section opacity-0">
          <CheckCircle className="text-green-500 mb-1" size={24} />
          <div className="text-[10px] font-mono text-green-600 font-bold uppercase tracking-wider">
            Site Live
          </div>
        </div>
      </div>
    </div>
  );
}
