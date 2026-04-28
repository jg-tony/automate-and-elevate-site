import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Booking from './Booking';

describe('Booking Component', () => {
  it('renders heading and subtext', () => {
    render(<Booking />);
    expect(screen.getByText('Book Your Free 20-Minute Audit')).toBeInTheDocument();
    expect(screen.getByText(/No commitment. Just a conversation/i)).toBeInTheDocument();
  });

  it('renders the HubSpot iframe with correct src', () => {
    render(<Booking />);
    const iframe = screen.getByTestId('hubspot-iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('meetings-na2.hubspot.com/tony4'));
  });

  it('renders the trust line', () => {
    render(<Booking />);
    expect(screen.getByText(/No spam. No pressure. I respond within 24 hours./i)).toBeInTheDocument();
  });
});
