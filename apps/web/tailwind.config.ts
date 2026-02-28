import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "athens-gray": {
          50: "#f4f7fa",
          100: "#e9eef4",
          200: "#d3deea",
          300: "#b5c8db",
          400: "#92abc8",
          500: "#7893b9",
          600: "#657dab",
          700: "#5a6d9b",
          800: "#4d5a80",
          900: "#414c67",
          950: "#2b3140",
        },
        roman: {
          50: "#fdf4f3",
          100: "#fce6e4",
          200: "#fbd1cd",
          300: "#f7b1aa",
          400: "#f18278",
          500: "#e65c4f",
          600: "#d23e30",
          700: "#b13024",
          800: "#922c22",
          900: "#7a2a22",
          950: "#42120d",
        },
        nepal: {
          50: "#f3f9fb",
          100: "#e4eef5",
          200: "#d0e3ed",
          300: "#b0d0e0",
          400: "#89b7d1",
          500: "#78a6c8",
          600: "#5a89b6",
          700: "#4f77a6",
          800: "#456288",
          900: "#3b526d",
          950: "#273444",
        },
        "bahama-blue": {
          50: "#f4f8fb",
          100: "#e8eff6",
          200: "#ccdeeb",
          300: "#9ec4db",
          400: "#6aa5c6",
          500: "#488aaf",
          600: "#326789",
          700: "#2c5978",
          800: "#284c64",
          900: "#264154",
          950: "#192a38",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};

export default config;
