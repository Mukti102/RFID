/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(0 , 166,251)",
        primaryHalf: "#057dcd",
        secondary: "#1e3d58",
        accent: "#e8eef1",
        txtcolor: "#1E1E1E",

        // primary: "rgb(var(--color-primary))",
        // primaryHalf: "rgba(var(--color-primary-half))",
        // secondary: "rgb(var(--color-secondary))",
        // accent: "rgb(var(--color-accent)",
        // chocolate: "rgb(var(--color-chocolate))",
        // balado: "rgb(var(--color-balado))",
        // baladoHalf: "rgb(var(--color-balado-half))",
        // txtcolor: "rgb(var(--color-txtcolor))",
        // bkg: "rgb(var(--color-bkg))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gsub: ["gsub", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sl: "930px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}