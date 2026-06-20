/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FFF8EE',
          100: '#FDE8C4',
          200: '#FAC96E',
          300: '#F5A623',
          400: '#E08810',
          500: '#C8860A',
          600: '#A06C08',
          700: '#7A5206',
          800: '#523604',
          900: '#2A1A02',
        },
        cream: {
          50:  '#FEFCF8',
          100: '#FFF8EE',
          200: '#FFF0D8',
          300: '#FFE4B8',
        },
        temple: {
          dark:   '#1A0A04',
          brown:  '#2C1A0E',
          medium: '#6B4F3A',
          border: '#E8D5B7',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
