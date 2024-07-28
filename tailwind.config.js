/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2b24ad" ,
      },
      keyframes : {
        "fade": {
              "0%": {
                  height : '0',
              },
              "100%": {
                  height : '208px',
              },
          },
          "fadenn": {
              "0%": {
                  height : '208px',
              },
              "100%": {
                  height : '0',
              },
          },
        "fade-in": {
              "0%": {
                  opacity: 0
              },
              "100%": {
                  opacity: 1
              },
          },
          "fade-out" : {
              "0%": {
                  opacity: 1
              },
              "100%": {
                  opacity: 0
              },
          }
          
      },
      animation : {
        "fade" : "fade 1s linear ",
        "fadenn" : "fadenn 1s linear ",
        "fadein": 'fade-in 1.5s linear ',
        "fadeout": 'fade-out 1.5s linear ',
      }
    },
  },
  plugins: [],
};
