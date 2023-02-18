/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "!**/{bin,obj,node_modules}/**",
    "**/*.razor", "**/*.razor.css", "**/*.cshtml", "**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
