import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        page: "76rem"
      }
    }
  },
  plugins: []
};

export default config;
