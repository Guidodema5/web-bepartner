/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#753D94',
          'violet-hover': '#5e3177',
          'violet-light': 'rgba(117,61,148,0.1)',
          'violet-dark': '#291b47',
        },
        surface: {
          warm: '#f8f7f5',
          card: '#FFFFFF',
          dark: '#1a1a2e',
        },
        text: {
          heading: '#000000',
          primary: '#1f2937',
          secondary: '#6b7280',
        },
        status: {
          positive: '#10b981',
          negative: '#ef4444',
          warning: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
