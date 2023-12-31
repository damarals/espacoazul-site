import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--blue-dark)',
        },
        blue: {
          DEFAULT: 'var(--blue)',
          dark: 'var(--blue-dark)',
          light: 'var(--blue-light)',
          lighter: 'var(--blue-lighter)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
        },
        white: {
          DEFAULT: 'var(--white)',
          bis: 'var(--white-bis)',
        },
        grey: {
          light: 'var(--grey-light)',
          lighter: 'var(--grey-lighter)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
