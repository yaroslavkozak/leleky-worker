/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FF6584",
        accent: "#FFE066",
        neutral: "#F7F7FA",
        background: "#FFFFFF",
        text: "#2D2E32",
        muted: "#A0A3BD",
        border: "#E5E7EB",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontFamily: {
        sans: ["'Manrope'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.06)",
        button: "0 2px 6px rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        section: "6rem",
        content: "3rem",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

