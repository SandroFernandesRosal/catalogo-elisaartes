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
      },
      colors: {
        primarypink: '#F691B1',
        secondarypink: '#FF66C4',
        primaryblue: '#5CE1E6',
        bgcream: '#F6F0E0',
        bgdark: '#09090B',
        bgdarksecondary: '#18181B',
        textdark: '#EEEEEE',
        bglight: '#F4F4F5',
        bglightsecondary: '#E4E4E7',
        textlight: '#262626',
      },
    },
  },
  plugins: [],
}
export default config
