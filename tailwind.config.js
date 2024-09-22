/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6fff",
        'lightgreen': '#90EE90',
      },gridTemplateColumns:{
        'auto':'repeat(auto-fill,min,ax(200px,1r))'
      }
    },
  },
  plugins: [],
}