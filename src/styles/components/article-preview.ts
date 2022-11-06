import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";
import { ExtraSmallTextRegular } from "../texts";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: rem(570),
  height: 'auto',

  '@sm': {
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
})

export const InfoContainer = styled('div', {
  '@sm': {
    width: '50%',
    marginLeft: rem(40),
  }
})

export const MainInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(15),
})

export const SecondaryInfo = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export const PublishedAt = styled(ExtraSmallTextRegular, {
  color: '$slate500'
})

export const AuthorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: rem(10),

  img: {
    borderRadius: '50%'
  },

  p: {
    color: '$slate400',
    fontWeight: 600,
    marginLeft: rem(8)
  }
})