import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TelemetryTypewriter from './TelemetryTypewriter';

describe('TelemetryTypewriter Component', () => {
  it('renders card heading and descriptor', () => {
    render(<TelemetryTypewriter />);
    expect(screen.getByText('Lead & CRM Automation')).toBeInTheDocument();
    expect(screen.getByText(/Every new inquiry auto-captured/i)).toBeInTheDocument();
  });

  it('renders the Live Feed label', () => {
    render(<TelemetryTypewriter />);
    expect(screen.getByText('Live Feed')).toBeInTheDocument();
  });

  it('renders typewriter container and cursor', () => {
    render(<TelemetryTypewriter />);
    expect(screen.getByTestId('typewriter-text')).toBeInTheDocument();
    expect(screen.getByTestId('cursor')).toBeInTheDocument();
  });
});
