import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary:{
      900: '#3D0804',
      800: '#7D1107',
      700: '#eb220e',
      600: '#FC230F'
    },
    secondary:{
      700: '#222831'
    },
    terciary:{
      700: '#393E46'
    },

    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },

    black: '#000000',
    white: '#FFFFFF',
    snow: '#EEEEEE',
    
    danger: '#FF3636',
    sucess: '#18CE0F',
    warning: '#FFB236'
  },

  letterSpacings: {
    'xs': '-0.05em',
    'sm': '-0.025em',
    'md': 0,
    'lg': '0.025em',
    'xl': '0.05em',
    '2xl': '0.1em',
  },
  lineHeights: {
    '2xs': '1em',
    'xs': '1.125em',
    'sm': '1.25em',
    'md': '1.375em',
    'lg': '1.5em',
    'xl': '1.75em',
    '2xl': '2em',
    '3xl': '2.5em',
    '4xl': '3em',
    '5xl': '4em',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 950,
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular'
  },
  fontSizes: {
    '2xs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
});