/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'autumn',
      'cupcake',
      'dark',
      'wireframe',
      {
        mytheme: {
          primary: '#073e72', // dark blue
          'primary-focus': '#0b3954', // navy blue
          'primary-content': '#ffffff', // white text on primary

          secondary: '#f8872b', // orange
          'secondary-focus': '#ffb128', // yellow
          'secondary-content': '#ffffff', // white text on secondary

          accent: '#174b69', // medium blue
          'accent-focus': '#0b3954', // navy blue
          'accent-content': '#ffffff', // white text on accent

          'base-100': '#ffffff', // white background
          'base-200': '#f8f9fa', // light background
          'base-300': '#cccccc', // border color
          'base-content': '#073e72', // main text color

          info: '#174b69', // info color
          success: '#0b3954', // success color
          warning: '#ffb128', // warning color
          error: '#f8872b', // error color

          '--rounded-box': '2rem',
          '--rounded-btn': '3rem',
          '--rounded-badge': '0.5rem',
          '--animation-btn': '0.3s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
      {
        furniture: {
          primary: '#073e72',
          'primary-content': '#ffffff',

          secondary: '#f8872b',
          'secondary-content': '#ffffff',

          accent: '#ffb128',
          'accent-content': '#ffffff',

          neutral: '#0b3954',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f7f7f7',
          'base-300': '#eaeff3',
          'base-content': '#073e72',

          info: '#174b69',
          success: '#4CAF50',
          warning: '#ffb128',
          error: '#FF5252',

          '--rounded-box': '2rem',
          '--rounded-btn': '3rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.3s',
          '--animation-input': '0.2s',
          '--border-color': '#e9edf1',
          '--border-width': '1px',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
