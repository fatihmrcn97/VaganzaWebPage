import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050404",
        night: "#120f0e",
        earth: "#201918",
        ember: "#8d6448",
        stone: "#d8cec3",
        bone: "#f3efe8",
        mist: "#b8aea2",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Baskerville", "Times New Roman", "serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(28px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slowZoom: {
          "0%": {
            transform: "scale(1.02)",
          },
          "100%": {
            transform: "scale(1.08)",
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "slow-zoom": "slowZoom 18s ease-in-out infinite alternate",
      },
      boxShadow: {
        editorial: "0 36px 80px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
