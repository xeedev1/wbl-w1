/**
 * Tailwind CSS Configuration File
 * This file customizes the default Tailwind CSS framework to match our design needs
 * @type {import('tailwindcss').Config}
 */
module.exports = {
    // Specify which files Tailwind should scan for class names
    content: ["./**/*.{html,js}"],
    
    // Customize the default theme
    theme: {
        extend: {
            // Custom color palette for our black and yellow theme
            colors: {
                'custom-yellow': '#FFD700', // Gold color for primary accents
                'custom-orange': '#FFA500', // Orange color for hover states
            },
            
            // Custom font family configuration
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'], // Modern, clean font for better readability
            },
            
            // Custom animations for enhanced interactivity
            animation: {
                'gradient': 'gradient 15s ease infinite', // Smooth gradient animation for hero section
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Subtle pulse effect for profile image
            },
            
            // Keyframes for our custom animations
            keyframes: {
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' }, // Start position
                    '50%': { backgroundPosition: '100% 50%' }, // Middle position
                    '100%': { backgroundPosition: '0% 50%' }, // End position (back to start)
                },
            },
            
            // Custom background gradients for visual elements
            backgroundImage: {
                'gradient-text': 'linear-gradient(45deg, #FFD700, #FFA500)', // Gold to orange gradient for text
                'gradient-animated': 'linear-gradient(-45deg, #000000, #1a1a1a, #FFD700, #000000)', // Animated background gradient
            },
        },
    },
    
    // Add any Tailwind plugins here if needed
    plugins: [],
} 