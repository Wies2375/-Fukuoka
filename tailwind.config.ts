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
          DEFAULT: "#1a365d",
          light: "#2c5282",
        },
        accent: "#c9a227",
      },
    },
  },
  plugins: [],
};

export default config;
