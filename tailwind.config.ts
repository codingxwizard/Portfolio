import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald', "sans-serif"],
        Archivo: ["Archivo Black", "sans-serif"],
        Imbue: ["Imbue", "serif"],
        Inter: ["Inter", "sans-serif"],
        Alice: ["Alice", "sans-serif"],
        Bitter: ["Bitter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
