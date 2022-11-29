/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        lred: "#f03e3e",
      },
    },
  },
  plugins: [],
};
