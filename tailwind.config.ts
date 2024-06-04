import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#141414",
        black: {
          100: "#0009"
        },
        gray: {
          100: "#999"
        },
        green: {
          100: "#46d369"
        },
        red: {
          100: "#D81F26"
        },
        "transparent-dark": "rgba(20, 20, 20, 0.00)"
      },
      spacing: {
        33: "132px",
        49.5: "198px",
        100: "400px",
        150: "600px"
      },
      zIndex: {
        2: "2"
      },
      transitionDuration:{
        800: "800ms"
      },
      gradientColorStopPositions: {
        "7.48%": "7.48%"
      }
    },
  },
  plugins: [],
};
export default config;
