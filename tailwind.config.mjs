import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          light: '#2c4a3e', // Elegant forest green
          dark: '#629e7a',
        },
        accent: {
          light: '#b34d2b', // Warm Terracotta / Rust
          dark: '#e07a5f',
        },
        paper: {
          light: '#f5f2eb', // Warm physical paper
          dark: '#0f1310',  // Deep forest charcoal
        },
        ink: {
          light: '#1c1c1c', // Fountain pen black ink
          dark: '#e3e1da',  // Faded white paper ink
        },
        crimson: {
          light: '#8b1e1e', // Editorial corrections red ink
          dark: '#e84545',
        }
      }
    },
  },
  plugins: [typography],
}
