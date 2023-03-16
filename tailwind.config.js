module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    darkMode: false,
    theme: {
      extend: {
        backgroundColor: {
          'primary': '#007bff',
          'gradient': 'linear-gradient(to right, #007bff, #6c757d)',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  