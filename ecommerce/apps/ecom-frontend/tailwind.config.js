const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontfamily: {
      sans: 'Inter var, ui-sans-serif, system-ui',
      serif: 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.875rem', // 14px,
      base: '1.3rem', // 20px
      xl: '1.55rem', // 24px
      '2xl': '1.563rem', // 30px
      '3xl': '1.953rem', // 32px
      '4xl': '2.441rem', // 38px
      '5xl': '3.052rem', // 48px
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: '#0000ff',
          'primary-content': '#ffffff',
          secondary: '#f6f6f6',
          neutral: '#e8e8e8',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
