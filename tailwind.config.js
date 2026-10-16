/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040711',
          900: '#060B18',
          850: '#0A1128',
          800: '#0E1738',
          750: '#132047',
          700: '#1E2C5B',
        },
        brand: {
          50: '#edf5ff',
          100: '#d7e7fe',
          200: '#b8d6fe',
          300: '#85bcfe',
          400: '#4c99fc',
          500: '#2378f7',
          600: '#0d6efd', /* Official Haku Blue */
          700: '#0752d9',
          800: '#0c44b0',
          900: '#103c8b',
          950: '#0a255c',
        },
        accent: {
          cyan: '#38BDF8',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Ethiopic', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'Noto Sans Ethiopic', 'sans-serif'],
      },
      boxShadow: {
        'glow-hero': '0 0 80px -15px rgba(13, 110, 253, 0.5)',
        'glow-blue': '0 0 40px -8px rgba(13, 110, 253, 0.4)',
        'glow-cyan': '0 0 40px -8px rgba(56, 189, 248, 0.35)',
        'card-dark': '0 15px 35px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 45px -10px rgba(13, 110, 253, 0.25), 0 0 0 1px rgba(13, 110, 253, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
