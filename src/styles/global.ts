import { globalCss } from ".";
import { rem } from "../helpers/convertPixelToRem";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray300',
    color: '$slate900',
    '-webkit-font-smoothing': 'antialiased',
  },
  
  'h1, h2, h3, h4, h5, h6, p': {
    color: "$slate900"
  },
  
  a: {
    textDecoration: 'none',
    color: '$slate900',
    borderBottom: '2px solid transparent',

    transition: 'color border ease-in-out',
    transitionDuration: '0.2s',

    '&:hover': {
      color: '$cyan600',
      
      borderBottom: '2px solid $cyan600',
    },

    '&:active': {
      color: 'black'
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Mulish',
    fontWeight: '$normal',
    outline: 'none',
  },

  'input, textarea': {
    border: 0,
    color: '$slate900',
    fontSize: rem(14),
    lineHeight: rem(24),

    '&::placeholder': {
      color: '$slate500',
      fontSize: rem(14),
      lineHeight: rem(24)
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'League Spartan',
    fontWeight: '$bold'
  },

  button: {
    outline: 'none',
    border: 0,
    cursor: 'pointer'
  }
})