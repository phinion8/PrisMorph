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
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shooting-star": "shootingStar 3s ease-in-out infinite",
        "rain": "rain linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shootingStar: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(-45deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(500px) translateY(500px) rotate(-45deg)",
            opacity: "0",
          },
        },
        rain: {
          "0%": {
            transform: "translateY(-20px) translateX(0) rotate(20deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "1",
          },
          "95%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(1000px) translateX(200px) rotate(20deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
