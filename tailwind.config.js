/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      '3d': '#3d3d3d',
      'white': '#ffffff',
      'hover': '#52525b',
      'bd': '#f3f4f6',
      'borda': '#0c0a09',
      'primaryColor': '#01D87D' ,
      'bg-footer': '#0E1D1B',
      'gray-300': '#00160c',
      'hover-check': '#005632' ,
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } ,
  },
  plugins: [],
}