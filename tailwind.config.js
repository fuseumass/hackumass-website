/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-secondary": "#183149",
        "accent-blue": "#009dd9",
        "lightest-grey": "#eff8fa",
        black: "#000",
        darkblue: "#2832c1",
      },
      spacing: {},
      fontFamily: {
        body: "Inter",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        heading: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "63xl": "82px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
