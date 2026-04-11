/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { sm: { max: "640px" } },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        sans: [
          '"Space Grotesk"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        brutal: {
          black: "#1A1A1A",
          white: "#FAFAFA",
          cream: "#F5F0E8",
          blue: "#2563EB",
          red: "#EF4444",
          yellow: "#FACC15",
          green: "#16A34A",
          pink: "#EC4899",
          teal: "#14B8A6",
          orange: "#F97316",
          purple: "#8B5CF6",
          gray: "#6B7280",
        },
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #1A1A1A",
        "brutal-sm": "2px 2px 0px 0px #1A1A1A",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
