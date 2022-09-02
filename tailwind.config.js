/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: '#01959F',
      secondary: '#FA9810',
      danger: '#E11428',
      success: '#43936C',
      neutral: '#FFFFFF',
      neutral20: '#FAFAFA',
      neutral30: '#EDEDED',
      neutral40: '#E0E0E0',
      neutral70: '#757575',
      neutral90: '#404040',

      primarySurface: '#F7FEFF',
      secondarySurface: '#FFFCF5',
      dangerSurface: '#FFFAFA',
      successSurface: '#F8FBF9',

      secondaryBorder: '#FEEABC',
      dangerBorder: '#F5B1B7',
      successBorder: '#B8DBCA',

    },
    borderRadius: {
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '8px',
      'full': '9999px',
    },
    extend: {
      colors: {
        'primaryBorder': '#01959F',
        'secondaryBorder': '#FEEABC',
        'dangerBorder': '#F5B1B7',
        'successBorder': '#B8DBCA',
        'neutralBorder20': '#FAFAFA',
        'neutralBorder40': '##E0E0E0',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
