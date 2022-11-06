import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  padding: `${rem(6)} ${rem(10)}`,
  width: 'min-content',
  height: 'min-content',

  p: {
    fontFamily: 'Roboto',
    fontSize: rem(12),
    lineHeight: rem(14),
    color: '$white',
    textTransform: 'capitalize'
  },

  variants: {
    variant: {
      filled: {
        backgroundColor: '$pink600',

        p: {
          color: '$white'
        }
      },
      'non-filled': {
        padding: `${rem(4)} ${rem(6)}`,
        backgroundColor: 'transparent',
        border: '1px solid $pink600',

        p: {
          color: '$pink600',
          lineHeight: rem(16),
        }
      }
    }
  }
})