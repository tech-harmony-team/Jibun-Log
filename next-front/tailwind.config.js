/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        600: "600px",
      },
      colors: {
        "green-button": "#60D11A",
        "red-button": "#F82323",
      },
    },
  },
  plugins: [],
};
