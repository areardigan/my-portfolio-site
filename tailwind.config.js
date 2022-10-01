module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sortof-black": "#0E0816",
        "maybe-purple": "#A239CA",
        "kinda-blue": "#4717F6",
        "gray-ish": "#E7DFDD",
      },
      fontFamily: {
        "u-mono": ["UbuntuMono", "monospace"],
      },
    },
  },
  plugins: [],
};

// colors: {
//   black: "#0E0816",
//   purple: "#A239CA",
//   blue: "#4717F6",
//   gray: "#E7DFDD",
// },
