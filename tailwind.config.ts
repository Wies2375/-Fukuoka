// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        autumn: {
          bg: "#FBF7F0",      // 奶油白背景
          card: "#FFFFFF",    // 卡片白
          ink: "#1E1A16",     // 深咖黑文字
          muted: "#6B6158",   // 次要文字
          line: "#E9DED3",    // 分隔線
          accent: "#C46A2B",  // 枫葉橘（主按鈕）
          accent2: "#8E3B2F", // 陶土紅（次按鈕/標籤）
          pine: "#2E4A3B",    // 深松綠（點綴）
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(30, 26, 22, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
