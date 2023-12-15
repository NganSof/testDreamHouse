/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        wiggle: "wiggle 1s linear",
        spin_text: "spin_text 6s linear infinite",
        infinite_scroll: "infinite_scroll 5s linear infinite",
        imgTrans: "image_trans 3s linear",
        bounDelay: "boun_delay 4s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spin_text: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        infinite_scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        image_trans: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        boun_delay: {
          from: { transform: "translateY(-15%)" },
          to: { transform: "translateY(20%)" },
        },
      },
    },
  },
  plugins: [],
};
