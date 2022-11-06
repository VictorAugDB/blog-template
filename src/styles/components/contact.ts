import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  padding: `${rem(31)} ${rem(40)}`,

  '@sm': {
    padding: `${rem(31)} ${rem(134)}`
  }
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderTop: '1px solid $slate900',
  padding: `${rem(60)} 0`,

  '@sm': {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export const SocialMedia = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(24),
  maxWidth: rem(370),
  alignSelf: 'center',
  alignItems: 'center',

  '@sm': { 
    paddingRight: rem(8),
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },

  p: {
    textAlign: 'center',

    '@sm': {
      textAlign: 'start'
    }
  },

  div: {
    display: 'flex',
    gap: rem(40)
  }
})

export const Logo = styled('h1', {
  fontFamily: 'Sonsie One',
  fontSize: '$md'
})

export const Info = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: rem(30),
  marginTop: rem(56),

  '@sm': {
    margin: 0
  },

  '> div': {
    margin: '0 auto',

    '@sm': {
      width: rem(170),
      margin: 0
    },

    h6: {
      color: '$slate400',
      marginBottom: rem(15)
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(2),
      justifyContent: 'center',

      '@sm': {
        justifyContent: 'start'
      },
      
      a: {
        alignSelf: 'flex-start',
      },
    }
  }
})