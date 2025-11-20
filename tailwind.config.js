/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ini biar font Cinzel tadi bisa dipanggil pakai class 'font-serif'
        serif: ['var(--font-cinzel)'], 
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};