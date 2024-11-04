import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      blur: {
        full: '160px',
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
        Pacifico: ['var(--font-pacifico)'],
        Bad: ['var(--font-bad)'],
      },
      colors: {
        primarypink: '#F691B1',
        secondarypink: '#FF66C4',
        primaryblue: '#5CE1E6',
        bgcream: '#F6F0E0',
        bgdark: '#f9d8e1',
        bgdarksecondary: '#fef2e2',
        textdark: '#ef326c',
        bglight: '#F4F4F5',
        bglightsecondary: '#E4E4E7',
        textlight: '#262626',
      },
    },
  },
  plugins: [],
}
export default config
