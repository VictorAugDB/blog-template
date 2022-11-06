import { darkTheme, styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";
import { darken } from 'polished'

export const Button = styled('button', {
  backgroundColor: '$cyan600',
  color: '#FFFFFF',
  lineHeight: rem(28),
  transition: 'background-color 0.2s', 

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:hover:not([disabled])': {
    backgroundColor: darken(0.025, '#00E6CA'),

    [`.${darkTheme} &`]: {
      backgroundColor: darken(0.025, '#004940')
    },
  },

  variants: {
    variant: {
      small: {
        padding: `${rem(4)} ${rem(28)}`,
        maxWidth: rem(157),
        fontWeight: 600,
        fontSize: rem(16)
      },
      medium: {
        padding: `${rem(8)} ${rem(44)}`,
        maxWidth: rem(179),
        fontWeight: 400,
        fontSize: rem(20)
      }
    }
  }
})

