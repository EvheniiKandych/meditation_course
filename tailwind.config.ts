import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        ink: "#000",
        accent: "#c8b8ac",
        line: "#dfd4ca",
        card: "#ebe5de",
        brand: {
          //logotype word from Hero
          v: "#B3BDA4",
          o: "#F5E4DA",
          i: "#978672",
          d: "#EBDFCF",
          //gap word from Hero
          g: "#B3BDA4",
          a: "#F8D2BB",
          p: "#978672",
        },
        nav: "#483B2B",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"], 
        tenor: ["'Tenor Sans'", "sans-serif"],
      },
      letterSpacing: {
        calm: "0.12em",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(30, 30, 30, 0.06)",
      },
      animation: {
        'border-spin': 'border-spin 3s linear infinite',
        'bg-pan-left': 'bg-pan-left 4s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        'bg-pan-left': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '0% center' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
