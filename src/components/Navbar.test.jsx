import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('Automate & Elevate')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Navbar />);
    const ctas = screen.getAllByText('Book Free Audit');
    expect(ctas.length).toBeGreaterThan(0);
  });

  it('changes style on scroll (morphing behavior)', () => {
    render(<Navbar />);
    const navElement = screen.getByRole('navigation');
    
    // Initial state should contain transparent bg
    expect(navElement.className).toContain('bg-transparent');

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    // After scroll, it should have the white background class
    expect(navElement.className).toContain('bg-white/80');
  });
});
