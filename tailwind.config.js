


module.exports = {
  darkMode: 'class', // Enables dark mode via a class on the <html> element
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          light: '#0077B5', // LinkedIn Blue for Light Mode
          dark: '#003F6C',  // Darker Blue for Dark Mode
          textLight: '#FFFFFF', // Light text color for LinkedIn
          textDark: '#E1E9EE'   // Darker text color for LinkedIn Dark Mode
        },
        backgroundLight: '#F3F6F9', // Background color for light mode
        backgroundDark: '#1C1C1C', // Background color for dark mode
      },
    },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
      fontFamily: {
        // Define custom font families
        heading: ['Poppins', 'sans-serif'], // For headings
        body: ['Roboto', 'sans-serif'], // For body text
        accent: ['Montserrat', 'sans-serif'], // For accent text
        code: ['Courier New', 'monospace'], // For code or monospaced text
        special: ['Dancing Script', 'cursive'], // For special sections
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      screens: {
        'xsm': '450px',   // Extra Small screen size
        'sm': '640px',    // Small screen size (default)
        'md': '768px',    // Medium screen size (default)
        'lg': '1024px',   // Large screen size (default)
        'xl': '1280px',   // Extra Large screen size (default)
        'xxl': '1536px',  // Extra Extra Large screen size
      },
    },
  },
  plugins: [],
}