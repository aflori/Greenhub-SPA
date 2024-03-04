/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
      themes: [
        {
            test: {
                "default": "#ffa500",
                "primary": "red",
                "secondary": "#ffa500",
                "accent": "red",
                "neutral": "#ff00ff",
                "base-100": "#ff00ff",
                "info": "#0000ff",
                "success": "#00ff00",
                "warning": "#0f766e",
                "error": "#ff0000",
            },
        },
      ],
    },
}

