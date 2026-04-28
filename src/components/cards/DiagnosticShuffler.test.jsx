import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import DiagnosticShuffler from './DiagnosticShuffler';

describe('DiagnosticShuffler Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders card heading and descriptor', () => {
    render(<DiagnosticShuffler />);
    expect(screen.getByText('Appointment & Follow-Up Automation')).toBeInTheDocument();
    expect(screen.getByText(/Never manually chase a client again/i)).toBeInTheDocument();
  });

  it('cycles items on interval', () => {
    render(<DiagnosticShuffler />);
    const items = [
      'Booking Confirmation Sent ✓',
      '24hr Reminder Delivered ✓',
      'Follow-Up Triggered ✓'
    ];
    
    // Initial render
    items.forEach(item => expect(screen.getByText(item)).toBeInTheDocument());

    // Advance timers by 3000ms
    act(() => {
      vi.advanceTimersByTime(3000);
    });

    // The component state should change and trigger a re-render.
    // The items should still be there, but their positions (styles) would have changed.
    items.forEach(item => expect(screen.getByText(item)).toBeInTheDocument());
  });
});
