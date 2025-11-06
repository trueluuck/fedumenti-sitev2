/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // usa as variáveis do next/font (evita CLS)
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        fgmuted: 'hsl(var(--fg-muted))',
        surface: 'hsl(var(--surface))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))',
        accentfg: 'hsl(var(--accent-fg))',
        muted: 'hsl(var(--muted))',
        success: 'hsl(var(--success))',
        warn: 'hsl(var(--warn))',
        danger: 'hsl(var(--danger))',
        brand: {
          blue: '#1d4ed8',
          light: '#3b82f6',
          dark: '#1e40af',
        },
      },
      spacing: { section: '6rem' },
      borderRadius: { xl: '1rem' },
      boxShadow: { smooth: '0 4px 24px rgba(0,0,0,.08)' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
      },
      transitionDuration: { DEFAULT: '300ms' },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
