import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f4f2ee",
        ink: "#2f2f2f",
        accent: "#c8b8ac",
        line: "#dfd4ca",
        card: "#ebe5de",
        brand: {
          v: "#B3BDA4",
          o: "#F5E4DA",
          i: "#978672",
          d: "#EBDFCF",
        },
      },
      fontFamily: {
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        logo: ["'Tenor Sans'", "sans-serif"],
        nav: ["'Montserrat'", "sans-serif"],
      },
      letterSpacing: {
        calm: "0.12em",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(30, 30, 30, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
