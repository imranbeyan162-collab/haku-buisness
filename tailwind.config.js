/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 12px 36px -8px rgba(13, 110, 253, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 25px -4px rgba(13, 110, 253, 0.35)',
        'pill': '0 8px 30px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(13, 110, 253, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
