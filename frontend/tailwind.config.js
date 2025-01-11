/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./index.html",       // Include index.html (if needed)
  ],
  theme: {
    extend: {}, // Extend Tailwind styles if necessary
  },
  plugins: [],
};
