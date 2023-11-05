import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'fullScreen': 'calc(100vh - 208px)'
      },
      backdropBlur: {
        "glassBlur": 'blur(8.4px)'
      },
      boxShadow: {
        'navShadow': '0 20px 45px 0 rgba(0,0,0,  0.2)',
        'glassShadow': '0 4px 30px 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.14)',
      },
    },
    plugins: [],
  }
}
export default config
