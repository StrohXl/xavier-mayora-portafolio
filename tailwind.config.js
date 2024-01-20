/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00c16a",
        primaryDark: "#00a662",
      },
      fontFamily: {
        custom: ["CustomFont", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        86: "22rem",
        102: "26rem",
        103: "26.5rem",
        104: "27rem",
        108: "30rem",
        116: "39rem",

      },
      fontSize:{
        '10xl': '10rem',
        '12xl': '12rem',
        '14xl': '14rem',
        '16xl': '16rem',
        '18xl': '18rem',
        '20xl': '20rem',
        '22xl': '22rem',
        '24xl': '24rem',
        '26xl': '26rem',
        '28xl': '28rem',


      },
      maxWidth:{
        "5xl": "64rem",
        "6xl": "75rem"
      }
    },
  },
  plugins: [],
};
