import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CursorProtocolScheduler from './CursorProtocolScheduler';

describe('CursorProtocolScheduler Component', () => {
  it('renders card heading and descriptor', () => {
    render(<CursorProtocolScheduler />);
    expect(screen.getByText('Review & Reputation')).toBeInTheDocument();
    expect(screen.getByText(/Automatically request Google reviews/i)).toBeInTheDocument();
  });

  it('renders weekly grid with all 7 days', () => {
    render(<CursorProtocolScheduler />);
    
    // Check that there are 7 day elements
    for (let i = 0; i < 7; i++) {
      expect(screen.getByTestId(`day-${i}`)).toBeInTheDocument();
    }

    // Check specific text content
    const daysText = screen.getAllByTestId(/day-/).map(el => el.textContent);
    expect(daysText).toEqual(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
  });

  it('renders the Request Review button', () => {
    render(<CursorProtocolScheduler />);
    expect(screen.getByText('Request Review')).toBeInTheDocument();
  });
});
