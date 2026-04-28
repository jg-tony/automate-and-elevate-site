/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        section: '#F7FAFC',
        dark: '#1E3A5F',
        'text-main': '#1E3A5F',
        'text-secondary': '#4A5568',
        accent: '#1A56DB',
        'accent-hover': '#1440B3',
        border: '#E2E8F0',
        muted: '#A0AEC0',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
