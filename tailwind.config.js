/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "[data-framer-theme='dark']"],
  theme: {
    extend: {
      height: {
        7.5: "1.875rem",
      },
      width: {
        7.5: "1.875rem",
      },
      spacing: {
        7.5: "1.875rem",
      },
      gap: {
        7.5: "1.875rem",
      },
    },
  },
  plugins: [],
};
