/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary:"#101828",
        secondary:"#667085",
        basic: {
          DEFAULT: "#ed1d24",
          hover:"#dd242a",
        },
        body:"#f8f8f8"
      },
    },
  },
  plugins: [],
};
