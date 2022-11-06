import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  padding: `0 ${rem(20)}`,
  marginTop: 0,
  height: rem(77),

  '@lg': {
    padding: `0 ${rem(235)}`,
    marginTop: rem(40),
    height: rem(88)
  }
})

export const Logo = styled('h1', {
  fontFamily: 'Sonsie One',
  fontSize: '$md',

  a: {
    border: 0,
    cursor: 'pointer'
  }
})

export const Topics = styled('div', {
  display: 'none',

  '@sm': {
    fontFamily: 'League Spartan',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    gap: rem(20),
  },

  '@lg': {
    gap: rem(40),
  }
})

export const IconsContainer = styled('div', {
  display: 'flex',
  gap: rem(45),


  '@sm': {
    display: 'none'
  }
})

export const ToggleTheme = styled("button", {
  width: '100%',
  maxWidth: rem(64),
  height: rem(28),
  backgroundColor: '$blue400',
  border: '1px solid $gray300',
  borderRadius: 14,
  transition: 'padding 0.2s',
  padding: `${rem(2)} ${rem(4)}`,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  

  div: {
    width: rem(28),
    height: rem(28),
    backgroundColor: 'transparent',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      width: rem(20),
      height: rem(20)
    }
  },

  variants: {
    variant: {
      dark: {
        paddingLeft: rem(64 - 28),
      },
      light: {
        paddingRight: rem(64 - 28),

        svg: {
          color: "#F8BE2E"
        }
      }
    }
  }
})