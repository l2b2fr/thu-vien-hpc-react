/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgr-down-light": "#f3f3f8",
        "bgr-up-light": "#ffffff",
        "color-text-light": "#6685FF",
      },
    },
  },
  plugins: [],
};
