/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}',
      './node_modules/daisyui/**/*.js',
    ],
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
  };