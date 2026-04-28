import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorks from './HowItWorks';

describe('HowItWorks Component', () => {
  it('renders all 3 process cards with correct titles', () => {
    render(<HowItWorks />);
    
    // Check titles
    expect(screen.getByText('Free 20-Minute Audit')).toBeInTheDocument();
    expect(screen.getByText('I Build It For You')).toBeInTheDocument();
    expect(screen.getByText('You Get Hours Back')).toBeInTheDocument();
  });

  it('renders the correct step numbers', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Step 01: Free Audit')).toBeInTheDocument();
    expect(screen.getByText('Step 02: Build & Setup')).toBeInTheDocument();
    expect(screen.getByText('Step 03: You Save Time')).toBeInTheDocument();
  });
});
