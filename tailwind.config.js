/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "night",
     
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#f59e0b",
          accent: "#10b981",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#60a5fa",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
  },
};
