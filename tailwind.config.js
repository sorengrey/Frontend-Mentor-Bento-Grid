/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "376px",
        md: "769px",
        lg: "1439px",
      },
    },
  },
  plugins: [],
};
