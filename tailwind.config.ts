import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0B1D33', deep: '#0B1D33' },
        ocean: '#123A63',
        ice:   '#F6F8FA',
        sand:  '#E6E1D6',
        gold:  { DEFAULT: '#C9A768', hover: '#b8954f' },
        aqua:  '#38B7C6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.14em',
        'wider-3': '0.22em',
      },
      boxShadow: {
        soft:  '0 12px 30px -10px rgba(11,29,51,0.25)',
        press: '0 2px 0 0 rgba(11,29,51,0.18)',
      },
      borderRadius: {
        ds: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
