module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.2s ease-out",
        bounceOnce: "bounceOnce 1s ease-out",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        bounceOnce: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "60%, 100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
