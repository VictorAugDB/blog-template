import { styled } from ".";
import { rem } from "../helpers/convertPixelToRem";

export const H1 = styled('h1', {
  fontSize: rem(48),
  lineHeight: rem(64),

  '@sm': {
    fontSize: rem(96),
    lineHeight: rem(128)
  }
})

export const H2 = styled('h2', {
  fontSize: rem(24),
  lineHeight: rem(34),
  
  '@sm': {
    fontSize: rem(60),
    lineHeight: rem(88)
  }
})

export const H3 = styled('h3', {
  fontSize: rem(40),
  lineHeight: rem(56)
})

export const H4 = styled('h4', {
  fontSize: rem(30),
  lineHeight: rem(44)
})

export const H5 = styled('h5', {
  fontSize: rem(24),
  lineHeight: rem(34)
})

export const H6 = styled('h6', {
  fontSize: rem(20),
  lineHeight: rem(34)
})

export const LargeTextBold = styled('p', {
  fontSize: rem(20),
  lineHeight: rem(34),
  fontWeight: 'bold'
})

export const LargeTextRegular = styled('p', {
  fontSize: rem(22),
  lineHeight: rem(28)
})

export const NormalTextBold = styled('p', {
  fontSize: rem(16),
  lineHeight: rem(28),
  fontWeight: 'bold'
})

export const NormalTextRegular = styled('p', {
  fontSize: rem(18),
  lineHeight: rem(28)
})

export const SmallTextRegular = styled('p', {
  fontSize: rem(14),
  lineHeight: rem(24)
})

export const ExtraSmallTextRegular = styled('p', {
  fontSize: rem(12),
  lineHeight: rem(21)
})

export const ExtraSmallTextBold = styled('p', {
  fontSize: rem(12),
  lineHeight: rem(21),
  fontWeight: 'bold'
})

export const TinyText = styled('p', {
  fontSize: rem(10),
  lineHeight: rem(16)
})
