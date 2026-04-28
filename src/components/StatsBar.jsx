import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '5-10', suffix: ' hrs', label: 'Saved Per Week' },
  { prefix: 'From', currency: '$', value: '500', label: 'Transparent Pricing' },
  { value: '20', suffix: ' Min', label: 'Free Audit' },
  { stringValue: 'Wichita, KS', label: 'Local & Remote' } // Non-numeric
];

export default function StatsBar() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Count up effect for numeric values
      const numericElements = document.querySelectorAll('.stat-number-value');
      numericElements.forEach((el) => {
        const targetValue = el.getAttribute('data-value');
        if (targetValue && !isNaN(Number(targetValue.split('-')[0]))) {
          if (!targetValue.includes('-')) {
             const endVal = parseInt(targetValue, 10);
             gsap.fromTo(el, { innerText: 0 }, {
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 90%',
                },
                innerText: endVal,
                duration: 1.5,
                snap: { innerText: 1 },
                ease: 'power2.out',
             });
          }
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="bg-section border-y border-border py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item flex flex-col items-center justify-center text-center px-4">
              <div className="text-accent font-sans font-bold text-4xl md:text-5xl mb-2 flex flex-wrap justify-center items-baseline">
                {stat.prefix && <span className="mr-1.5 md:mr-2 text-2xl md:text-3xl font-medium text-accent/80">{stat.prefix}</span>}
                {stat.currency && <span>{stat.currency}</span>}
                {stat.stringValue ? (
                  <span>{stat.stringValue}</span>
                ) : (
                  <span className="stat-number-value" data-value={stat.value}>{stat.value}</span>
                )}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="font-mono text-text-secondary uppercase text-xs tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
