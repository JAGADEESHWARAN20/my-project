import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070F2B",
        secondary: "#1B1A55",
        accent: "#535C91",
        background: "#9290C3",
        // Add more custom colors here as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xsm: "200px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        xxl: "1536px",
      },
      cursor: {
        lg: `url('https://freeiconshop.com/wp-content/uploads/edd/cursor-flat.png'), _pointer`,
      },
    },
  },
  plugins: [],
};

export default config;
