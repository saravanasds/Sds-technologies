/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          50: 'rgba(255, 255, 255, 0.1)',
          100: 'rgba(255, 255, 255, 0.2)',
          200: 'rgba(255, 255, 255, 0.3)',
          300: 'rgba(255, 255, 255, 0.4)',
          400: 'rgba(255, 255, 255, 0.5)',
          500: 'rgba(255, 255, 255, 0.6)',
          600: 'rgba(255, 255, 255, 0.7)',
          700: 'rgba(255, 255, 255, 0.8)',
          800: 'rgba(255, 255, 255, 0.9)',
          900: 'rgba(255, 255, 255, 1)',
        }
      },
      boxShadow: {
        'neomorphism': '1px 1px 2px #ffffff, -1px -1px 2px #ffffff',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
        bounceMedium: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
        spinBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bounceSlow: 'bounceSlow 4s ease-in-out infinite',
        bounceMedium: 'bounceSlow 2s ease-in-out infinite',
        spinBorder: 'spinBorder 6s linear infinite',
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
