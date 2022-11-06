import { styled } from "..";
import { rem } from "../../helpers/convertPixelToRem";
import { ExtraSmallTextRegular } from "../texts";

export const Container = styled('div', {
  marginLeft: rem(17),
  display: "flex",
  alignItems: 'center',

  svg: {
    marginRight: rem(5),
    color: '$slate500'
  }
})

export const Comments = styled(ExtraSmallTextRegular, {
  color: '$slate500'
})