import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#9a3d00",
          light: "#d97706",
        },
        accent: {
          DEFAULT: "#b45309",
          light: "#f59e0b",
        },
        autumn: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          500: "#fb923c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
