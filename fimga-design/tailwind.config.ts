import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#F98585",
        myColor: "#21243D",
        recentBackground: "#F4E2E2",
        footerBackground: "#FAF5F5",
        background: "#CFA6A61C",
        heroElipse: "#AA9F9F4F",
      },
    },
  },
  plugins: [],
} satisfies Config;
