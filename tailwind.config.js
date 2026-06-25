/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6433A3',
          light: '#7340B4',
          action: '#7F4FBB',
        },
        dark: {
          DEFAULT: '#151515',
          light: '#303030',
          action: '#454545',
        },
      },
      keyframes: {
        'countdown-dot': {
          '0%':   { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0.15', transform: 'scale(0.5)' },
        },
        'pop-in': {
          from: { transform: 'translate(-50%, -50%) scale(0.3)', opacity: '0' },
          to:   { transform: 'translate(-50%, -50%) scale(1)',   opacity: '1' },
        },
        'pulse-win': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.06)' },
        },
        'fade-cell': {
          from: { opacity: '1' },
          to:   { opacity: '0.2' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'modal-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to:   { opacity: '0', transform: 'scale(0.9)' },
        },
      },
      animation: {
        'pop-in':    'pop-in 0.18s cubic-bezier(0.34,1.56,0.64,1)',
        'pulse-win': 'pulse-win 0.6s ease',
        'fade-cell': 'fade-cell 0.28s ease forwards',
        'modal-in':  'modal-in 0.2s ease',
        'modal-out': 'modal-out 0.2s ease',
      },
    },
  },
  plugins: [],
}
