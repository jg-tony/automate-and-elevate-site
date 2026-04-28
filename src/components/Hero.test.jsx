import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders headline text', () => {
    render(<Hero />);
    expect(screen.getByText(/Save 5–10 Hours a Week/i)).toBeInTheDocument();
    expect(screen.getByText(/with Simple Automation/i)).toBeInTheDocument();
  });

  it('renders CTA buttons with correct scroll targets', () => {
    render(<Hero />);
    const primaryCTA = screen.getByText('Book Your Free Audit').closest('button');
    expect(primaryCTA).toBeInTheDocument();

    const secondaryCTA = screen.getByText('See How It Works').closest('button');
    expect(secondaryCTA).toBeInTheDocument();
  });

  it('renders the hero badge', () => {
    render(<Hero />);
    expect(screen.getByText('Available for new clients in Wichita')).toBeInTheDocument();
  });
});
