import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#101010",
          800: "#151515",
          700: "#202020",
        },
        signal: {
          red: "#ff3b30",
          lime: "#d7ff3f",
          cyan: "#68e8ff",
          amber: "#f4ad45",
          paper: "#f5efe2",
          blue: "#1f63d8"
        },
      },
      borderRadius: {
        brand: "6px",
      },
      fontFamily: {
        display: ["Arial Black", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        corporate: ["Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        "image-edge": "0 22px 70px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
