import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-element', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, { scope: containerRef });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mbdqvowa', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-section relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 contact-element">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-text-main mb-4">
            Prefer to Send a Message?
          </h2>
          <p className="font-sans text-xl text-text-secondary">
            I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-border p-8 md:p-12 contact-element">
          {status === 'success' ? (
            <div className="text-center py-12" data-testid="success-message">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-sans font-bold text-2xl text-text-main mb-2">Message received!</h3>
              <p className="font-sans text-text-secondary">I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus('')}
                className="mt-8 font-sans text-accent hover:text-accent-hover font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {/* Honeypot field for spam */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-sm font-medium text-text-main mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-sm font-medium text-text-main mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block font-sans text-sm font-medium text-text-main mb-2">
                  Business Name <span className="text-text-secondary font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  placeholder="Jane's Bakery"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm font-medium text-text-main mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-main focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl font-sans text-sm border border-red-100" data-testid="error-message">
                  Something went wrong. Please email me directly at tony@automateandelevatebiz.com
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-sans font-medium text-white bg-accent transition-all duration-300 hover:bg-accent-hover hover:scale-[1.03] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
