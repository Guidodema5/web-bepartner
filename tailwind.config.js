/** @type {import('tailwindcss').Config} */
// Colores, tipografía y formas iguales a la app de anuncios (sistema "Noche" y su modo día), para que la web y la app
// sean la misma marca (Guido, 24/10/2026). Los nombres viejos (brand, surface, text, status) se mantienen.
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#753D94',
          'violet-hover': '#8247a3',
          'violet-light': 'rgba(117,61,148,0.08)',
          'violet-dark': '#16121b',
        },
        violeta: {
          200: '#e6cdf5',
          300: '#d6a8f0',
          400: '#b57bd6',
          500: '#8e55b0',
          600: '#753d94',
          700: '#5e2f78',
        },
        // Lo oscuro de la app: un solo negro violáceo y sus superficies.
        noche: {
          fondo: '#0d0a10',
          superficie: '#16121b',
          'superficie-2': '#1e1824',
          'superficie-3': '#272030',
          linea: 'rgba(255,255,255,0.07)',
          'linea-fuerte': 'rgba(255,255,255,0.13)',
          texto: '#f4f0f7',
          suave: '#a99fb2',
          tenue: '#6f6676',
        },
        surface: {
          warm: '#f6f3f8',
          card: '#FFFFFF',
          'card-2': '#f1ecf5',
          dark: '#0d0a10',
        },
        linea: {
          DEFAULT: 'rgba(40,20,55,0.10)',
          fuerte: 'rgba(40,20,55,0.18)',
        },
        text: {
          heading: '#1d1424',
          primary: '#2b2133',
          secondary: '#5c5166',
          tenue: '#8a7f93',
        },
        status: {
          positive: '#1c8a57',
          negative: '#c24a38',
          warning: '#b8800f',
          'positive-noche': '#4cc38a',
          'negative-noche': '#f08a7a',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        tarjeta: '20px',
      },
      boxShadow: {
        brillo: '0 0 0 1px rgb(255 255 255 / 0.12) inset, 0 10px 30px -10px #a46bc6',
      },
      transitionTimingFunction: {
        suave: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
