import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pricing from './Pricing';

describe('Pricing Component', () => {
  it('renders all 4 pricing cards with titles', () => {
    render(<Pricing />);
    expect(screen.getByText('Free Audit')).toBeInTheDocument();
    expect(screen.getByText('Starter Setup')).toBeInTheDocument();
    expect(screen.getByText('Growth Bundle ⭐')).toBeInTheDocument();
    expect(screen.getByText('Monthly Retainer')).toBeInTheDocument();
  });

  it('renders Growth Bundle with Most Popular badge', () => {
    render(<Pricing />);
    expect(screen.getByText('⭐ Most Popular')).toBeInTheDocument();
  });

  it('renders all CTA buttons', () => {
    render(<Pricing />);
    const bookAudits = screen.getAllByText('Book Free Audit');
    expect(bookAudits.length).toBe(2); // Two cards have this exact CTA
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText("Let's Talk")).toBeInTheDocument();
  });
});
