/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 0px) { ... }

      xxsm: "320px",
      // => @media (min-width: 320px) { ... }

      xsm: "440px",
      // => @media (min-width: 440px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      mxl: "1380px",
      // => @media (min-width: 1380px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1750px",
      // => @media (min-width: 1750px) { ... }
    },
    extend: {
      colors: {},
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.4rem",
      },
    },
  },
  plugins: [],
};
