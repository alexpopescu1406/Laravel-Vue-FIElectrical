/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
        keyframes: {
            'fade-in-down': {
                "from": {
                    transform: "translateY(-0.75rem)",
                    opacity: '0'
                },
                "to": {
                    transform: "translateY(0rem)",
                    opacity: '1'
                },
            },
        },
        animation: {
            'fade-in-down': "fade-in-down 0.4s ease-in-out both",
        }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('flowbite/plugin')
  ],
}
