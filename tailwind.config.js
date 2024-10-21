/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
    gridTemplateColumns: {
      'custom': '1fr 4fr 1fr',
      'customSobreNos': '0.1fr 1fr 0.1fr',
      'faleConosco': '1fr 1fr'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      '3d': '#3d3d3d',
      'white': '#ffffff',
      'hover': '#52525b',
      'bd': '#f3f4f6',
      'borda': '#0c0a09',
      'primaryColor': '#01D87D',
      'bg-footer': '#0E1D1B',
      'gray-300': '#ededed',
      'tr': '#c9c9c9',
      'hover-check': '#00ab63',
      'blue-600': '#2563eb', // Ajuste conforme necessário
      'blue-100': '#dbf0ff', // Ajuste conforme necessário
      'green-500': '#22c55e', // Ajuste conforme necessário
      'green-400': '#4ade80', // Ajuste conforme necessário
    },

    screens: {
      'mini': '320px',
      // => @media (min-width: 320px) {...}
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
    },
  },
  plugins: [],
}