/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This ensures Tailwind scans all your Angular templates and TypeScript files
    "./src/index.html"      // Include your main index.html
  ],
  theme: {
    extend: {
      // You can add custom colors, fonts, or other theme extensions here
    }
  },
  plugins: [
    // If you want to add any Tailwind plugins
  ],
  // This is the key part for applying global styles
  presets: [
    {
      // Automatically import your global styles
      get plugins() {
        return [
          require('tailwindcss/plugin')(({ addBase, theme }) => {
            // This will import your global styles
            addBase({
              // You can also add custom base styles here
            });
          })
        ];
      }
    }
  ]
};