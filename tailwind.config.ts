import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: {
          DEFAULT: "#FAF9F5",
          subtle: "#F4F2EC",
          muted: "#ECE9E0",
        },
        olive: {
          50: "#F4F6F4",
          100: "#E5EBE5",
          200: "#CBD7CB",
          300: "#A6BDA6",
          400: "#7C9C7B",
          500: "#577756",
          600: "#445E43",
          700: "#364A35",
          800: "#2B3A2A",
          900: "#222D22",
          950: "#131A13",
        },
        charcoal: {
          50: "#F7F8F7",
          100: "#EEF0EE",
          200: "#D9DED9",
          300: "#B8C1B8",
          400: "#8F9A8F",
          500: "#6B776B",
          600: "#4D574D",
          700: "#363E36",
          800: "#242A24",
          900: "#161A16",
          950: "#0D100D",
        },
        border: {
          subtle: "#E5E2D8",
          DEFAULT: "#D8D4C7",
          strong: "#B8B3A3",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(22, 26, 22, 0.05), 0 1px 4px -1px rgba(22, 26, 22, 0.03)',
        'soft': '0 8px 24px -4px rgba(22, 26, 22, 0.06), 0 4px 12px -2px rgba(22, 26, 22, 0.03)',
        'soft-lg': '0 16px 36px -6px rgba(22, 26, 22, 0.08), 0 8px 16px -4px rgba(22, 26, 22, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(43, 58, 42, 0.12), 0 8px 16px -4px rgba(43, 58, 42, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
