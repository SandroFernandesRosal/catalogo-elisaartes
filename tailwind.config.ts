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
        bgpink: '#f9d8e1',
        textlight: '#262626',
      },
    },
  },
  plugins: [],
}
export default config
