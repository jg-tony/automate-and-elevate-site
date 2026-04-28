import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactForm from './ContactForm';

// Mock global fetch
global.fetch = vi.fn();

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form fields and submit button', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Business Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('shows success message after successful submission', async () => {
    // Mock successful fetch
    global.fetch.mockResolvedValueOnce({ ok: true });

    render(<ContactForm />);
    
    // Fill out required fields to satisfy HTML validation before submit
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
      expect(screen.getByText(/Message received!/i)).toBeInTheDocument();
    });
  });

  it('shows error state when submission fails', async () => {
    // Mock failed fetch
    global.fetch.mockResolvedValueOnce({ ok: false });

    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Test Name' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toBeInTheDocument();
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });
});
