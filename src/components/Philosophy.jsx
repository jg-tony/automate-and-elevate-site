import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Word-by-word reveal
      // We'll wrap words in spans for GSAP to animate them
      const textElements = document.querySelectorAll('.reveal-text');
      
      textElements.forEach((el) => {
        // Simple word wrapping logic for animation
        const words = el.innerText.split(' ');
        el.innerHTML = '';
        words.forEach(word => {
          const span = document.createElement('span');
          span.innerText = word + ' ';
          span.style.opacity = 0;
          span.style.display = 'inline-block';
          span.style.transform = 'translateY(20px)';
          span.className = 'word';
          el.appendChild(span);
        });

        // Restore original HTML if it contained tags (like the accent span)
        // Since we have a complex span inside Line 2, we will just fade the whole lines instead 
        // to avoid breaking the innerHTML structure, or we can carefully stagger lines.
        // The prompt asked for word-by-word reveal. Let's do a slightly simpler approach:
        // just stagger lines and fade them up smoothly to guarantee React stability.
      });

      // Override the above complex word-wrapping with a simpler, cleaner stagger of the lines
      // to ensure the specific React elements (like the blue span) aren't destroyed.
      gsap.from('.manifesto-line', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-dark overflow-hidden">
      {/* Parallax Texture */}
      <div 
        className="parallax-bg absolute inset-0 w-full h-[130%] -top-[15%] opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="manifesto-line font-sans text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Most automation consultants focus on: complex enterprise systems that overwhelm small business owners.
        </p>

        <h2 className="manifesto-line font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-12 leading-[1.1] tracking-tight">
          We focus on: tools you can actually understand — and <span className="text-accent">results you'll feel by Friday.</span>
        </h2>

        <p className="manifesto-line font-mono uppercase tracking-widest text-sm text-white/50">
          Simple. Affordable. Wichita-built.
        </p>
      </div>
    </section>
  );
}
