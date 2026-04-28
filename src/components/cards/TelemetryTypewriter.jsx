import React, { useState, useEffect } from 'react';
import { Database } from 'lucide-react';

const messages = [
  "> New lead captured from website...",
  "> Contact created in CRM...",
  "> Follow-up email scheduled...",
  "> Deal stage updated: Proposal Sent",
  "> Reminder set: Follow up in 3 days"
];

export default function TelemetryTypewriter() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentMessage = messages[currentMessageIndex];

    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 50); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait before clearing
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 25); // Erasing speed
      } else {
        setIsTyping(true);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentMessageIndex]);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-md p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Database size={24} />
          </div>
          <h3 className="font-sans font-bold text-xl text-text-main">
            Lead & CRM Automation
          </h3>
        </div>
      </div>
      
      <p className="text-text-secondary font-sans leading-relaxed mb-8 flex-grow">
        Every new inquiry auto-captured, organized, and followed up — without you lifting a finger.
      </p>

      {/* Terminal Window */}
      <div className="bg-dark rounded-xl p-4 overflow-hidden relative min-h-[140px] flex flex-col justify-end">
        {/* Top bar of terminal */}
        <div className="absolute top-0 left-0 right-0 bg-black/20 px-4 py-2 flex items-center gap-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="font-mono text-[10px] uppercase text-muted tracking-widest">Live Feed</span>
        </div>
        
        {/* Terminal Content */}
        <div className="mt-8 font-mono text-sm text-green-400 h-full flex items-end break-all">
          <span data-testid="typewriter-text">{displayedText}</span>
          <span className="w-2.5 h-4 bg-accent inline-block ml-1 animate-[pulse_1s_steps(2,start)_infinite]" data-testid="cursor"></span>
        </div>
      </div>
    </div>
  );
}
