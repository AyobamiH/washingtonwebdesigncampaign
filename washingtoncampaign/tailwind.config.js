/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'light-gray': '#d5d8db',
        'accent-blue': '#4a7dab',
        'soft-white': '#f7f8fa',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(90deg, #353763, #b8aa84, #716170, #5b6669)',
        'hero-pattern': "url('/images/background.jpg')",
      },
      boxShadow: {
        'left': '0px 0 0px -5px rgba(0, 0, 0, 0.5)', // Custom shadow for the left side
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      
      screens: {
        'xs': '320px',   // Custom breakpoint for very small devices
        'sm': '640px',   // Default small breakpoint (mobile)
        'md': '768px',   // Default medium breakpoint (tablet)
        'lg': '1024px',  // Default large breakpoint (laptop)
        'xl': '1280px',  // Extra large breakpoint (desktop)
        '2xl': '1536px', // 2X large breakpoint for very large screens
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 5s ease infinite',
      },
      gradientColorStops: {
        'custom-start': '#ff6f61',
        'custom-end': '#ff6f61',
      },
      // animation: {
      //   'gradient-move': 'gradient-move 3s linear infinite',
      // },
      // keyframes: {
      //   'gradient-move': {
      //     '0%': { backgroundPosition: '0% 0%' },
      //     '100%': { backgroundPosition: '100% 100%' },
      //   },
      // },
    },
  },
  plugins: [],
}

