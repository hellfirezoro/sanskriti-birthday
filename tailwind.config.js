/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe6ec',
          200: '#ffd0dc',
          300: '#fbaebd',
          400: '#f68097',
          500: '#ed5574',
        },
        lavender: {
          50: '#f8f7ff',
          100: '#f0eeff',
          200: '#e3dfff',
          300: '#cdc5ff',
          400: '#b1a1fe',
          500: '#9475f9',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ebe1ce',
        },
        champagne: '#F7E7CE',
      },
      fontFamily: {
        handwriting: ['"Caveat"', '"Marck Script"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Quicksand"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'wax-stamp': 'stamp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'envelope-open': 'envelopeOpen 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        stamp: {
          '0%': { transform: 'scale(3) rotate(-20deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
