import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  padding: `${rem(50)} ${rem(24)} 0`,
  display: 'flex',
  flexDirection: 'column',

  '@lg': {
    padding: `${rem(70)} ${rem(100)} 0`,
  }
})

export const LatestArticle = styled('div', {
  alignSelf: 'center',

  a: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    border: 0,

    "&:hover": {
      'h2': {
        color: "$cyan6000"
      },
    },

    '> div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(30),
      width: 'auto',
      marginRight: rem(32),

      'h2, p': {
        display: 'inline-block',
        width: 'fit-content',
      },
    },
  
    '@lg': {
      alignItems: 'start',
      flexDirection: 'row',
      padding: `0 ${rem(35)}`,
    }
  } 
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: rem(300),
  height: 'auto',

  position: 'relative',
  padding: `${rem(15)} 0  0 ${rem(15)}`,

  '@sm': { 
    maxWidth: rem(648),
    height: 'auto',
    aspectRatio: '100/67',
    padding: `${rem(42)} 0  0 ${rem(80)}`,
  },

  'div:first-child': {
    position: 'absolute',
    width: '100%',
    maxWidth: `${285 * 100 / 300}%`,
    aspectRatio: '100/67',
    height: 'auto',
    backgroundColor: '$cyan600',
    left: 0,
    top: 0,
    zIndex: -1,

    '@sm': {   
      maxWidth: `${662 * 100 / 812}%`,
      height: 'auto'
    },
  },

  img: {
    objectFit: 'cover',
    width: '100%',
    aspectRatio: '100/67',
    maxWidth: rem(285),
    height: 'auto',
    
    '@sm': {
      maxWidth: '100%',
      height: 'auto',
    }
  }
})

export const MainContent = styled('div', {
  marginTop: rem(88),

  '@lg': {
    padding: `0 ${rem(135)}`
  }
})

export const LatestArticlesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  h3: {
    textAlign: 'center',
    marginBottom: rem(20),
  }
})

export const LatestArticles = styled('div', {
  display: 'grid',
  a: {
    border: 0,

    transition: 'scale 0.2s',

    "&:hover": {
      h5: {
        color: "$cyan600"
      },

      scale: 1.05
  
    }
  },
  
  gap: rem(50),

  '@md': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  }
})

export const PresentationContainer = styled('div', {
  width: 'fit-content',
  margin: '0 auto',
  marginTop: rem(39)
})

export const NewsletterContainer = styled('form', {
  backgroundColor: '$blue500',
  padding: `${rem(45)} ${rem(60)}`,
  marginTop: rem(64),
  "p, h3" : {
    color: '#FFFFFF',
  }
})

export const NewsletterContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: rem(15),
  color: '#FFFFFF',
})

export const Input = styled('input', {
  maxWidth: rem(240),
  padding: rem(10),
  backgroundColor: 'rgba(255, 255, 255, 0.11)',
  color: '#FFFFFF',
  borderBottom: '1px solid transparent',
  cursor: 'pointer',

  '&:focus, &:hover, &:not(:placeholder-shown)': {
    borderColor: '#FFFFFF',
  },

  '&::placeholder': {
    color: '$slate400'
  },
})