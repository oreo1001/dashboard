import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light':
          '0 1px 1px rgba(49, 49, 49, 0.1), 0 2px 2px rgba(49, 49, 49, 0.2), 0 2px 2px rgba(49, 49, 49, 0.2), 0 3px 4px #e1e1e1',
      },
      colors: {
        dark: {
          bg: '#000000',
          text: '#FFFFFF',
          primary: '#27B5E2',
          secondary: '#1A97BF',
        },
        light: {
          bg: '#E6E6E6',
          text: '#000000',
          primary: '#D56C6C',
          secondary: '#EE1B1B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // important: '#dark',
  darkMode: 'class',
  plugins: [],
}
export default config
