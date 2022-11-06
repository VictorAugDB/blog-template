import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  maxWidth: rem(250),
  height: 'auto',

  position: 'relative',
  padding: `${rem(15)} 0  0 ${rem(15)}`,

  'div:first-child': {
    position: 'absolute',
    width: '100%',
    maxWidth: `${235 * 100 / 250}%`,
    aspectRatio: '1/1',
    height: 'auto',
    backgroundColor: '$cyan600',
    left: 0,
    top: 0,
    zIndex: -1
  },

  img: {
    objectFit: 'cover',
    width: '100%',
    aspectRatio: '1/1',
    maxWidth: rem(235),
    height: 'auto'
  }
})
