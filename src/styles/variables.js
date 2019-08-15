// import { lighten } from 'polished'

const colors = {
  backgroundColor: '#f8f8f8',
  info: '#5bc0de',
  primary: '#18CEA0',
  secondary: '#9DA7B9',
  success: '#5cb85c',
  warning: '#f0ad4e',
  danger: '#d9534f',
  light: '#bbbbbb',
  medium: '#919191',
  lightGrey: '#f0f0f0',
  grey: '#464646',
  dark: '#000000',
  text: {
    default: '#333333',
    success: '#79C562',
    warning: '#ff0000',
    error: '#D42222',
    info: '#5583AD',
  },
}

const dimensions = {
  radius: 3,
  spacing: {
    small: 15,
    default: 30,
    large: 50,
    xLarge: 80,
    huge: 100,
  },
}

const typography = {
  baseFont: 'Montserrat, Roboto, Arial, sans-serif',
  baseFontSize: '1.5rem',
  baseLineHeight: 1.5,
  proximityFactor: 0.85,
  baseFontScale: [3, 2.5, 2, 1.5, 1.25, 1],
  fontScales: {
    majorSecond: [1.802, 1.602, 1.424, 1.266, 1.125, 1],
    minorThird: [2.488, 2.074, 1.728, 1.44, 1.2, 1],
    majorThird: [3.052, 2.441, 1.953, 1.563, 1.25, 1],
    perfectFourth: [4.209, 3.157, 2.369, 1.777, 1.333, 1],
    augmentedFourth: [5.653, 3.998, 2.827, 1.999, 1.414, 1],
  },
}

const shadows = {
  outer: '0 2px 4px 0 rgba(0,0,0,0.50)',
}

const easing = {
  bezierCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
}

const composeMediaQuery = width => `@media (min-width: ${width}px)`

const breakpoints = {
  xSmall: 320,
  small: 768,
  medium: 1024,
  large: 1250,
  xLarge: 1920,
  nav: 640,
}

const mediaQueries = {
  xSmall: composeMediaQuery(breakpoints.xSmall),
  small: composeMediaQuery(breakpoints.small),
  medium: composeMediaQuery(breakpoints.medium),
  large: composeMediaQuery(breakpoints.large),
  xLarge: composeMediaQuery(breakpoints.xLarge),
  nav: composeMediaQuery(breakpoints.nav),
}

const variables = {
  breakpoints,
  colors,
  dimensions,
  easing,
  mediaQueries,
  shadows,
  typography,
}

export default variables
