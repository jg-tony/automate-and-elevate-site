import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star } from 'lucide-react';

export default function CursorProtocolScheduler() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Initial state
      gsap.set('.animated-cursor', { x: 150, y: 150, opacity: 0 });
      gsap.set('.day-target', { backgroundColor: 'transparent', color: '#4A5568' });
      gsap.set('.request-btn', { scale: 1 });

      // Cursor enters and moves to Thursday (index 4)
      tl.to('.animated-cursor', { opacity: 1, duration: 0.3 })
        .to('.animated-cursor', { x: 120, y: 35, duration: 1, ease: 'power2.inOut' })
        
        // Click on Thursday
        .to('.animated-cursor', { scale: 0.8, duration: 0.1 }) // press
        .to('.day-target', { backgroundColor: '#1A56DB', color: '#FFFFFF', duration: 0.1 }, '<')
        .to('.animated-cursor', { scale: 1, duration: 0.1 }) // release
        
        // Wait a beat
        .to({}, { duration: 0.3 })
        
        // Move to Request Review button
        .to('.animated-cursor', { x: 90, y: 100, duration: 0.8, ease: 'power2.inOut' })
        
        // Click button
        .to('.animated-cursor', { scale: 0.8, duration: 0.1 })
        .to('.request-btn', { scale: 0.95, duration: 0.1 }, '<')
        .to('.animated-cursor', { scale: 1, duration: 0.1 })
        .to('.request-btn', { scale: 1, duration: 0.1 }, '<')
        .to('.request-btn', { backgroundColor: '#1A56DB', color: '#FFFFFF', duration: 0.2 }, '<')
        
        // Fade out
        .to('.animated-cursor', { opacity: 0, duration: 0.3, delay: 0.5 })
        
        // Reset visually for loop
        .to('.day-target', { backgroundColor: 'transparent', color: '#4A5568', duration: 0.2 })
        .to('.request-btn', { backgroundColor: '#F7FAFC', color: '#1E3A5F', duration: 0.2 }, '<');

    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={containerRef} className="bg-white rounded-2xl border border-border shadow-md p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] transition-shadow duration-300 overflow-hidden relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Star size={24} />
          </div>
          <h3 className="font-sans font-bold text-xl text-text-main">
            Review & Reputation
          </h3>
        </div>
      </div>
      
      <p className="text-text-secondary font-sans leading-relaxed mb-8 flex-grow">
        Automatically request Google reviews after every appointment. Build your reputation on autopilot.
      </p>

      {/* Animation Area */}
      <div className="relative bg-section border border-border rounded-xl p-6 flex flex-col items-center justify-center h-48 mt-auto">
        {/* Weekly Grid */}
        <div className="flex gap-2 mb-6 relative">
          {days.map((day, index) => (
            <div 
              key={index} 
              className={`w-8 h-8 rounded-md flex items-center justify-center font-mono text-sm font-medium border border-border/50
                ${index === 4 ? 'day-target text-text-secondary' : 'text-text-secondary bg-white'}
              `}
              data-testid={`day-${index}`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="request-btn bg-white border border-border rounded-lg px-4 py-2 font-mono text-xs font-semibold text-text-main">
          Request Review
        </div>

        {/* Custom SVG Cursor */}
        <svg 
          className="animated-cursor absolute top-0 left-0 w-6 h-6 drop-shadow-md z-10 pointer-events-none" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 3.21V20.8C5.5 21.46 6.3 21.79 6.77 21.32L11.5 16.5H18.5C19.05 16.5 19.5 16.05 19.5 15.5V3.21C19.5 2.66 19.05 2.21 18.5 2.21H6.5C5.95 2.21 5.5 2.66 5.5 3.21Z" fill="#1E3A5F" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
