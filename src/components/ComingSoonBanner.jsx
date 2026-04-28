import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ComingSoonBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mbdqvowa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'waitlist' })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto w-full">
      <div className="bg-[#1E3A5F] rounded-3xl p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(30,58,95,0.15)]">
        
        <div className="mb-6">
          <span className="inline-block bg-[#1A56DB] text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>

        <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-6">
          AI Voice Agents, SMS Follow-Up & Advanced Chatbots
        </h2>
        
        <p className="font-sans text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
          Automated phone calls, two-way text sequences, and intelligent chatbots that qualify leads and book appointments — while you sleep. Join the waitlist to be first.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full font-sans font-medium text-white/90 border border-white/20 flex items-center gap-2">
            <span>📞</span> AI Voice Calls
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full font-sans font-medium text-white/90 border border-white/20 flex items-center gap-2">
            <span>💬</span> SMS Sequences
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full font-sans font-medium text-white/90 border border-white/20 flex items-center gap-2">
            <span>🤖</span> Advanced Chatbots
          </div>
        </div>

        <div className="max-w-md mx-auto relative">
          {status === 'success' ? (
            <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-xl flex items-center justify-center gap-3">
              <CheckCircle size={20} className="text-green-400" />
              <span className="font-medium font-sans">You're on the list! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-white text-[#1E3A5F] px-6 py-4 rounded-full outline-none font-sans placeholder:text-gray-400 border-2 border-transparent focus:border-[#1A56DB] transition-colors pr-40"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1A56DB] text-white px-6 rounded-full font-sans font-medium hover:bg-[#1440B3] transition-colors flex items-center gap-2 disabled:opacity-70"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'} 
                {status !== 'loading' && <ArrowRight size={18} />}
              </button>
            </form>
          )}
          {status === 'error' && (
            <div className="absolute -bottom-8 left-0 w-full text-center text-red-300 text-sm font-sans mt-2">
              Something went wrong. Please try again.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
