import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About Component', () => {
  it('renders bio text', () => {
    render(<About />);
    expect(screen.getByText("Hi, I'm Tony.")).toBeInTheDocument();
    expect(screen.getByText(/I'm a Wichita-based automation consultant/i)).toBeInTheDocument();
  });

  it('renders location tags', () => {
    render(<About />);
    expect(screen.getByText(/Wichita, KS/)).toBeInTheDocument();
    expect(screen.getByText(/Local \+ Remote/)).toBeInTheDocument();
    expect(screen.getByText(/Plain-English Explanations/)).toBeInTheDocument();
  });
});
