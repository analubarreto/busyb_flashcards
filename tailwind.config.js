const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    colors: {
      purple: {
        DEFAULT: '#9B51E0',
        light: '#BB6BD9'
      },
      blue: {
        dark: '#2F80ED',
        DEFAULT: '#2D9CDB',
        light: '#56CCF2'
      },
      green: {
        dark: '#008BA3',
        DEFAULT: '#00ACC1',
        light: '#62EFFF'
      },
      gray: {
        dark: '#333333',
        DEFAULT: '#4F4F4F',
        light: '#F2F2F2'
      },
      red: '#EB5757',
      yellow: '#F2C94C',
      orange: '#F2994A',
      white: '#FFFFFF',
      twitter: '#00ACEE',
      google: '#4285F4',
      facebook: '#3B5998',
      black: '#000000'
    },
    fontSize: {
      // text-xs
      '2xs': '0.5rem', // 8px
      'xs': '0.625rem', // 10px
      'sm': '0.75rem', // 12px
      'base': '1rem', // 16px
      'md': '0.875rem', // 14px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '2.25rem', // 36px
      '4xl': '3rem' // 48px
    },
    fontFamily: {
      // font-body
      body: ['Asap'],
    },
    boxShadow: {
      sm: '1px 1px 1px 0 rgba(0, 0, 0, 0.05)',
      md: '2px 2px 2px 0 rgba(0, 0, 0, 0.05)',
      lg: '4px 4px 4px 0 rgba(0, 0, 0, 0.05)',
    }
  },
    variants: {
    extend: {
      textColor: ['visited']
    }
  },
  extend: {
    borderRadius: {
      'sm': '0.375rem', // 6px
      'md': '0.5rem', // 8px
      'lg': '0.625rem' // 10px
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};