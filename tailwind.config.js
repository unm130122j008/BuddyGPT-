/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1.4s infinite ease-in-out both',
        'scrollbar-glow': 'scrollbar-glow 3s ease-in-out infinite alternate',
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#1f1f1f', // Updated to your requested color
          950: '#0f0f0f',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      keyframes: {
        'scrollbar-glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(245, 158, 11, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 15px rgba(139, 92, 246, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 10px rgba(239, 68, 68, 0.4)',
          },
        },
      },
    },
  },
  plugins: [],
};