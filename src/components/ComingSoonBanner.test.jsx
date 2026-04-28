import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ComingSoonBanner from './ComingSoonBanner';

describe('ComingSoonBanner Component', () => {
  it('renders the correct heading and labels', () => {
    render(<ComingSoonBanner />);
    expect(screen.getByText(/AI Voice Agents, SMS Follow-Up & Advanced Chatbots/i)).toBeInTheDocument();
    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
  });

  it('renders the three feature pills', () => {
    render(<ComingSoonBanner />);
    expect(screen.getByText(/AI Voice Calls/i)).toBeInTheDocument();
    expect(screen.getByText(/SMS Sequences/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Advanced Chatbots/i).length).toBeGreaterThan(0);
  });

  it('renders the email input and submit button', () => {
    render(<ComingSoonBanner />);
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Join Waitlist/i })).toBeInTheDocument();
  });
});
