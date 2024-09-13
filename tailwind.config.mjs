/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-in-out forwards'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          '1': "hsl(var(--chart-1))",
          '2': "hsl(var(--chart-2))",
          '3': "hsl(var(--chart-3))",
          '4': "hsl(var(--chart-4))",
          '5': "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            hr: {
              borderColor: theme('colors.gray.200'),
              marginTop: '2em',
              marginBottom: '2em',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.gray.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              fontWeight: 400,
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              fontWeight: 400,
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              fontWeight: 400,
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            ul: {
              listStyleType: 'disc',
            },
            'ul, ol': {
              paddingLeft: '1.25rem',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '0.25rem',
            },
            'ul > li::marker': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              position: 'absolute',
              marginLeft: '-1rem',
              marginRight: '0.5rem',
              display: 'inline-block',
            },
            'ol > li::marker': {
              color: theme('colors.gray.500'),
              fontWeight: 400,
            },
            'ul > li p, ol > li p': {
              marginTop: 0,
              marginBottom: 0,
            },
            a: {
              color: theme('colors.cyan.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.cyan.300'),
              transition: 'color 150ms ease',
              '&:hover': {
                color: theme('colors.cyan.600'),
                textDecorationColor: 'currentColor',
              },
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none',
            },
            pre: {
              color: theme('colors.gray.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.700'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.cyan.400'),
              textDecorationColor: theme('colors.cyan.400'),
              '&:hover': {
                color: theme('colors.cyan.300'),
                textDecorationColor: 'currentColor',
              },
            },
            code: {
              color: theme('colors.gray.100'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            'thead th': {
              color: theme('colors.gray.100'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.cyan.500'),
        },
      })
    },
  ],
}