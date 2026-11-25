/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0C1623',
          800: '#101C2C',
          700: '#17263B',
          600: '#1E3147',
          500: '#283E59',
        },
        gold: {
          50: '#FBF3E4',
          100: '#F6E8CC',
          200: '#EDD199',
          300: '#E0B064',
          400: '#D49A4A',
          500: '#C2853A',
          600: '#A66E2E',
        },
        ivory: '#F8F7F4',
        mist: '#C5CAD2',
        card: '#182537',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
