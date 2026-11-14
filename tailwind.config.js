/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04060d",
        navy: { 900: "#070b17", 800: "#0b1224", 700: "#111a33" },
        electric: "#4f8cff",
        violet: { DEFAULT: "#8b5cf6", 200: "#ddd6fe" },
        cyan: "#22d3ee",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(79,140,255,0.45)",
        "glow-violet": "0 0 40px -10px rgba(139,92,246,0.45)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spinSlow 40s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
