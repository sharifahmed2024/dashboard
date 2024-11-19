/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif',],
      'Prompt': ['Prompt', 'sans-serif',],
  
    },
    extend: {
      colors: {
        'text-color': '#273240',
      },
    },
  },
  plugins: [],
}