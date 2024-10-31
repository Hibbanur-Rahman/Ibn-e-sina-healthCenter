const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#E5F1FB",
        "primary":'#0e82fd',
        "secondary":'#6B7280'
      }
    },
  },
  plugins: [],
});