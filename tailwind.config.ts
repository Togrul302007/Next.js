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
            brand: '#1d4ed8',     // Accent rəngin
            darkText: '#0f172a',  // Near-black text
            bgLight: '#f8fafc',   // Near-white background
        }
    },
  },
  plugins: [],
};
export default config;