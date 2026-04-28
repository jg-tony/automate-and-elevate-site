import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StatsBar from './StatsBar';

describe('StatsBar Component', () => {
  it('renders all 4 stats with correct labels', () => {
    render(<StatsBar />);
    
    // Check values
    expect(screen.getByText('5-10')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('Wichita, KS')).toBeInTheDocument();

    // Check labels
    expect(screen.getByText('Saved Per Week')).toBeInTheDocument();
    expect(screen.getByText('Transparent Pricing')).toBeInTheDocument();
    expect(screen.getByText('Free Audit')).toBeInTheDocument();
    expect(screen.getByText('Local & Remote')).toBeInTheDocument();
  });
});
