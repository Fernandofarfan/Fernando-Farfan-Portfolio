/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: "#0a192f",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
}
