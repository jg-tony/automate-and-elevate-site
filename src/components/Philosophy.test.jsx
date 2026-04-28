import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Philosophy from './Philosophy';

describe('Philosophy Component', () => {
  it('renders both manifesto lines', () => {
    render(<Philosophy />);
    expect(screen.getByText(/Most automation consultants focus on/i)).toBeInTheDocument();
    expect(screen.getByText(/We focus on/i)).toBeInTheDocument();
    expect(screen.getByText(/results you'll feel by Friday/i)).toBeInTheDocument();
  });

  it('renders the supporting line', () => {
    render(<Philosophy />);
    expect(screen.getByText('Simple. Affordable. Wichita-built.')).toBeInTheDocument();
  });
});
