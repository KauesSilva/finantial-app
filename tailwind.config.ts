/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '767px' },
        md: { max: '1023px' },
        lg: { max: '1279px' },
        xl: { max: '1535px' },
        '2xl': { max: '1536px' }
      }
    },
  },
  plugins: [],
}