/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 9px 34px rgba(129, 129, 129, 0.25)",
      },
      screens: {
        xs: "320px", // Custom size for 320px
        xsm: "480px", // Custom size for 480px
        xmd: "540px", // Custom size for 520px
      },
    },
  },
  plugins: [], // Move plugins outside the theme object
};
