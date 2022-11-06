import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: rem(12),
  flexWrap: 'wrap',

  img: {
    width: rem(24),
    height: rem(24),

    '@sm': {
      width: rem(38),
      height: rem(38)
    }
  },

  a: {
    border: 0,
    transition: 'scale 0.2s',

    '&:hover': {
      scale: 1.2
    }
  },

  '@sm': {
    gap: rem(21),
  }
})