import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';

const initialItems = [
  { id: 1, text: "Booking Confirmation Sent ✓" },
  { id: 2, text: "24hr Reminder Delivered ✓" },
  { id: 3, text: "Follow-Up Triggered ✓" }
];

export default function DiagnosticShuffler() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const newArray = [...prevItems];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-md p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
          <CalendarCheck size={24} />
        </div>
        <h3 className="font-sans font-bold text-xl text-text-main">
          Appointment & Follow-Up Automation
        </h3>
      </div>
      
      <p className="text-text-secondary font-sans leading-relaxed mb-8 flex-grow">
        Never manually chase a client again. Confirmations, reminders, and follow-ups run on autopilot.
      </p>

      {/* Shuffler Animation Container */}
      <div className="relative h-48 w-full flex justify-center perspective-[1000px] mt-auto">
        {items.map((item, index) => {
          // Calculate offset, scale, and opacity based on position in array
          const yOffset = index * 20;
          const scale = 1 - index * 0.05;
          const zIndex = 10 - index;
          const opacity = 1 - index * 0.2;

          return (
            <div
              key={item.id}
              className="absolute w-full max-w-[280px] bg-section border border-border rounded-xl p-4 flex items-center justify-center shadow-sm"
              style={{
                transform: `translateY(${yOffset}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <span className="font-mono text-sm text-text-main font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
