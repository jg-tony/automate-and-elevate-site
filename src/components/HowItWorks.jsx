import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProcessCard from './cards/ProcessCard';

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    step: "Step 01: Free Audit",
    title: "Free 20-Minute Audit",
    description: "We review your current workflow together and map out exactly where automation can save you the most time. No pressure. No commitment.",
    bgClass: "bg-[#FFFFFF]",
    animationType: "circles"
  },
  {
    step: "Step 02: Build & Setup",
    title: "I Build It For You",
    description: "I set up your automations using tools like Zapier, HubSpot, and Calendly. You don't need to touch a line of code. I handle everything and show you how it works.",
    bgClass: "bg-section",
    animationType: "laser"
  },
  {
    step: "Step 03: You Save Time",
    title: "You Get Hours Back",
    description: "Your business runs smoother. Follow-ups go out automatically. Reviews roll in. You stop doing $15/hr tasks and focus on what actually grows your business.",
    bgClass: "bg-[#FFFFFF]",
    animationType: "waveform"
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card');
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Don't animate the last card away
        
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
          scale: 0.9,
          filter: "blur(8px)",
          opacity: 0.6,
          ease: "none"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section id="process" ref={containerRef} className="relative w-full">
      {processes.map((process, index) => (
        <ProcessCard
          key={index}
          index={index}
          step={process.step}
          title={process.title}
          description={process.description}
          bgClass={process.bgClass}
          animationType={process.animationType}
        />
      ))}
    </section>
  );
}
