import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ProcessCard({ step, title, description, bgClass, animationType, index }) {
  const canvasRef = useRef(null);
  const waveformRef = useRef(null);

  useEffect(() => {
    // Handle Canvas animations for 'circles' and 'laser'
    if (animationType === 'circles' || animationType === 'laser') {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      window.addEventListener('resize', resize);
      resize();

      if (animationType === 'circles') {
        let angle = 0;
        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(26, 86, 219, 0.15)'; // #1A56DB with opacity
          ctx.lineWidth = 1.5;
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;

          for (let i = 1; i <= 8; i++) {
            ctx.beginPath();
            ctx.setLineDash([10 + i * 2, 10 + i * 2]);
            ctx.lineDashOffset = -angle * i;
            ctx.arc(centerX, centerY, i * 40, 0, Math.PI * 2);
            ctx.stroke();
          }
          angle += 0.5;
          animationFrameId = requestAnimationFrame(render);
        };
        render();
      } 
      else if (animationType === 'laser') {
        let yPos = 0;
        const render = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Draw dot grid
          ctx.fillStyle = 'rgba(26, 86, 219, 0.05)';
          for (let x = 0; x < canvas.width; x += 30) {
            for (let y = 0; y < canvas.height; y += 30) {
              ctx.beginPath();
              ctx.arc(x, y, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }

          // Draw laser
          ctx.fillStyle = 'rgba(26, 86, 219, 0.4)';
          ctx.fillRect(0, yPos, canvas.width, 2);
          
          yPos += 2;
          if (yPos > canvas.height) yPos = 0;

          animationFrameId = requestAnimationFrame(render);
        };
        render();
      }

      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
      };
    }

    // Handle SVG animation for 'waveform'
    if (animationType === 'waveform') {
      gsap.to(waveformRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'none'
      });
    }
  }, [animationType]);

  return (
    <div className={`process-card sticky top-0 w-full min-h-[100dvh] flex items-center justify-center overflow-hidden ${bgClass} z-[${index}] border-b border-border`} data-testid={`process-card-${index}`}>
      {/* Background Animations */}
      {(animationType === 'circles' || animationType === 'laser') && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      )}
      
      {animationType === 'waveform' && (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-20">
          <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
              ref={waveformRef}
              d="M0 100 Q 125 100 125 50 T 250 100 T 375 150 T 500 100 T 625 50 T 750 100 T 875 150 T 1000 100" 
              fill="none" 
              stroke="#1A56DB" 
              strokeWidth="4"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full px-6 py-20 bg-white/80 backdrop-blur-md rounded-3xl border border-border shadow-[0_8px_30px_rgba(26,86,219,0.05)] mx-4 md:mx-auto text-center">
        <span className="font-mono text-accent text-sm md:text-base font-bold uppercase tracking-widest mb-4 block">
          {step}
        </span>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-text-main mb-6">
          {title}
        </h2>
        <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
