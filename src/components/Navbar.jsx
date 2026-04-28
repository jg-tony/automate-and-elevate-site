import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Morph when scrolling past 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl text-text-main border border-border shadow-sm'
            : 'bg-transparent text-text-main border border-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="text-accent font-sans font-bold text-lg tracking-tight">
          Automate & Elevate
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans font-medium transition-colors duration-300 hover:-translate-y-[1px] hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-sans font-medium text-white bg-accent rounded-full group transition-all duration-300 hover:scale-[1.03]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent-hover rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Book Free Audit</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-border p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-main font-sans font-medium p-2 hover:bg-section rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center w-full px-6 py-3 font-sans font-medium text-white bg-accent rounded-full transition-all duration-300 hover:scale-[1.03]"
          >
            Book Free Audit
          </a>
        </div>
      )}
    </header>
  );
}
