module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F5F5F3",
          navy: "#1B2A4A",
          "navy-light": "#243656",
          "navy-dark": "#141E33",
          charcoal: "#2E2E2E",
          yellow: "#FFD700",
          "yellow-hover": "#F0C800",
        },
        customTeal: {
          50: "#F5F5F3",
          100: "#E8E8E5",
          200: "#D1D1CC",
          300: "#9BA3B5",
          400: "#5C6B8A",
          500: "#3D4F6F",
          600: "#2E3F5C",
          700: "#243656",
          800: "#1F3050",
          900: "#1B2A4A",
          950: "#1B2A4A",
        },
        customGreen: {
          50: "#FFFEF5",
          100: "#FFF9CC",
          200: "#FFF099",
          300: "#FFE566",
          400: "#FFDB33",
          500: "#FFD700",
          600: "#F0C800",
          700: "#FFD700",
          800: "#C9A800",
          900: "#997F00",
          950: "#665500",
        },
      },
    },
  },
};
