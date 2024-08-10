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
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      lg: "18px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "11xl": "30px",
      "4xl": "23px",
      "77xl": "96px",
      "29xl": "48px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq2325: {
        raw: "screen and (max-width: 2325px)",
      },
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
