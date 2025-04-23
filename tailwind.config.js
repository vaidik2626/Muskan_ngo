module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          bayon: ['var(--font-bayon)', 'sans-serif'],
          baumans: ['var(--font-baumans)', 'cursive'],
          baloo: ['var(--font-baloo-bhai)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  