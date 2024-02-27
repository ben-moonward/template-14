/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#FFF',
        grey: '#AAA',
      },
      borderRadius: {},
      gridTemplateColumns: {},
      fontSize: {},
    },
    colors: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
