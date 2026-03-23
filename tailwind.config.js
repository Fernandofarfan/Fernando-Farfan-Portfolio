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
        cardBg: "rgba(30, 41, 59, 0.5)",
        cardBorder: "rgba(100, 116, 139, 0.3)",
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.4)' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
