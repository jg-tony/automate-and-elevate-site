import React from 'react';

export default function Footer() {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Free Audit', href: '#booking' },
  ];

  return (
    <footer className="bg-dark rounded-t-3xl pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-white">
            <h3 className="font-sans font-bold text-2xl tracking-tight mb-2">
              Automate & Elevate
            </h3>
            <p className="font-sans text-white/60 text-sm mb-6 max-w-xs">
              Simple automation for Wichita small businesses.
            </p>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-mono text-xs text-white/80 tracking-wide uppercase">Accepting new clients</span>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col text-white">
            <h4 className="font-sans font-bold mb-4 text-white/90">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-sans text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col text-white">
            <h4 className="font-sans font-bold mb-4 text-white/90">Contact</h4>
            <ul className="space-y-3 font-sans text-white/70">
              <li>
                <a href="mailto:tony@automateandelevatebiz.com" className="hover:text-accent transition-colors duration-200 break-all">
                  tony@automateandelevatebiz.com
                </a>
              </li>
              <li>Wichita, KS</li>
              <li>Automate and Elevate LLC</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A5568] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-white/50 text-sm font-sans">
          <p>© 2026 Automate and Elevate LLC. All rights reserved.</p>
          <p>Built in Wichita, KS 🇺🇸</p>
        </div>

      </div>
    </footer>
  );
}
