/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF2F3',
          100: '#FCE6E8',
          200: '#F7C2C7',
          300: '#E88B95',
          400: '#CF4F5E',
          500: '#B02636',
          600: '#8C1625',
          700: '#6B0F1A', // Primary Deep Maroon
          800: '#540C15',
          900: '#3D090F',
          950: '#230408'
        },
        gold: {
          50: '#FDFBF4',
          100: '#FAF5E3',
          200: '#F3E7B9',
          300: '#EBD488',
          400: '#E0BD4E',
          500: '#D4A017', // Secondary Golden Mustard
          600: '#B3810F',
          700: '#8A5F0C',
          800: '#68450E',
          900: '#4D330E',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FDF8EE', // Primary Cream
          200: '#FAF3E0',
          300: '#F5EACD',
          400: '#EEDCB2',
          500: '#E5CB91',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA59',
          dark: '#128C7E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'traditional': '0 4px 20px -2px rgba(107, 15, 26, 0.08), 0 2px 6px -1px rgba(107, 15, 26, 0.04)',
        'warm': '0 10px 30px -4px rgba(212, 160, 23, 0.15)',
      }
    },
  },
  plugins: [],
}
