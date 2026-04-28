import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Automate and Elevate LLC/i)).toBeInTheDocument();
  });

  it('renders email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /tony@automateandelevatebiz\.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:tony@automateandelevatebiz.com');
  });

  it('renders all nav links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services');
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'Book Free Audit' })).toHaveAttribute('href', '#booking');
  });
});
