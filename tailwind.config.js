/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#063B35',
          deep: '#032824',
        },
        ivory: '#F5F3EA',
        lime: '#D9F43A',
        apricot: '#E8A15A',
        ink: '#18332F',
      },
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 24px 48px -16px rgba(3, 40, 36, 0.55)',
      },
    },
  },
  plugins: [],
}
