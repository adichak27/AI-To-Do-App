/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: {
          DEFAULT: '#5468FF',
          hover: '#4355E8',
          light: '#7B86FF',
        },
        success: {
          DEFAULT: '#18C964',
          light: '#18C96430',
        },
        neutral: {
          50: '#F8F9FF',
          100: '#F4F6FA',
          200: '#F9FAFC',
          300: '#5F6580',
          900: '#1A1D2F',
        },
        danger: '#FF3B3B',
      },
      keyframes: {
        checkmark: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        checkmark: 'checkmark 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
} 