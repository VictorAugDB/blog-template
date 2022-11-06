import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: rem(1170),
  aspectRatio: '100/53.58',
  position: 'relatve',

  '@lg': {
    flexDirection: 'row'
  },

  img: {
    objectFit: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: '72.24/100',
    maxWidth: rem(453),
    alignSelf: 'center',

    '@lg': {
      alignSelf: 'auto'
    }
  }
})

export const About = styled('div', { 
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: rem(770),
  padding: rem(40),
  marginTop: 30,

  backgroundColor: '$gray100-08',
  gap: rem(28),
  alignSelf: 'center',

  h2: {
    fontSize: rem(30),
    fontWeight: rem(44)
  },

  '@lg': {
    marginTop: 0,
    alignSelf: 'flex-end',
    marginBottom: rem(54),
    transform: 'translate(-88px)',

    h2: {
      fontSize: rem(60),
      fontWeight: rem(88)
    }
  }
})