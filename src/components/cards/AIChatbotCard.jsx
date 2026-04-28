import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MessageSquare } from 'lucide-react';

export default function AIChatbotCard() {
  const containerRef = useRef(null);
  const aiTextRef = useRef(null);
  const btnRef = useRef(null);
  const userBubbleRef = useRef(null);
  const aiBubbleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const fullText = "We're open Mon–Sat 9am–6pm. Want to book now? 👉";
    
    // Initial State
    gsap.set([userBubbleRef.current, aiBubbleRef.current, btnRef.current], { opacity: 0, y: 10 });
    gsap.set(aiTextRef.current, { textContent: "" });

    // Sequence
    tl.to(userBubbleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.5 })
      .to(aiBubbleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.6 })
      // Typewriter effect
      .to(aiTextRef.current, {
        textContent: fullText,
        duration: 2,
        ease: 'none',
        onUpdate: function() {
          // Add blinking cursor effect during typing
          const progress = this.progress();
          const charCount = Math.floor(progress * fullText.length);
          aiTextRef.current.textContent = fullText.substring(0, charCount) + (progress < 1 ? "|" : "");
        }
      })
      .to(btnRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.2 })
      .to({}, { duration: 1.5 }); // Pause before repeat

    return () => tl.kill();
  }, []);

  return (
    <div className="bg-white border border-border rounded-2xl p-8 shadow-[0_8px_30px_rgba(26,86,219,0.06)] relative h-full flex flex-col">
      <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        NEW
      </div>
      <div className="text-accent mb-6">
        <MessageSquare size={32} />
      </div>
      <h3 className="font-sans font-bold text-2xl text-text-main mb-3">
        AI Chatbot for Your Website
      </h3>
      <p className="font-sans text-text-secondary leading-relaxed mb-8 flex-grow">
        A 24/7 AI assistant trained on your business. Answers questions, captures leads, and books appointments — even while you sleep.
      </p>

      {/* Animation Container */}
      <div ref={containerRef} className="bg-[#F8FAFC] rounded-xl p-4 border border-border h-48 flex flex-col relative overflow-hidden font-sans text-[11px]">
        {/* User Question */}
        <div ref={userBubbleRef} className="self-end bg-[#E2E8F0] text-text-main py-2 px-3 rounded-2xl rounded-tr-sm max-w-[80%] mb-3">
          What are your hours?
        </div>
        
        {/* AI Answer */}
        <div ref={aiBubbleRef} className="self-start bg-accent text-white py-2 px-3 rounded-2xl rounded-tl-sm max-w-[85%] mb-3 leading-relaxed">
          <span ref={aiTextRef}></span>
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="self-start mt-1">
          <div className="bg-white text-accent border border-accent/30 py-1.5 px-4 rounded-full font-bold shadow-sm inline-block">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
}
