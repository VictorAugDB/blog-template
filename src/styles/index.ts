import { createStitches } from "@stitches/react";
import { rem } from "../helpers/convertPixelToRem";
import type * as Stitches from '@stitches/react';
import { rgba } from "polished";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',

      blue400: '#0069FF',
      blue500: '#2820FC',
      blue600: '#0000D3',

      slate400: '#BDBDBD',
      slate500: '#7B7485',
      slate900: '#161B3D',

      gray400: '#E7E7E7',
      gray300: '#EFEFEF',
      gray100: '#F7F7F7',
      "gray100-08": rgba(231, 231, 231, 0.8),

      cyan400: '#C4FCEF',
      cyan600: '#00E6CA',
      cyan800: '#00C5C1',

      pink400: '#E38FFF',
      pink600: '#F551FF',
      pink800: '#8E36A8',

      warning: '#DE350B',

      green300: '#66EBB5',
      green500: '#2CF04B',
      green800: '#28BE40',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 1024px)',
    lg: '(min-width: 1280px)',
  }
})


export const darkTheme = createTheme({
  colors: {
    white: '#000',
    black: '#FFF',

    blue400: '#000090',
    blue500: '#00006F',
    blue600: '#000054',

    slate400: '#F1F1F1',
    slate500: '#EDEDED',
    slate900: '#FAFAFA',

    gray400: '#141414',
    gray300: '#1C1C1C',
    gray100: '#3B3B3B',
    "gray100-08": rgba(59, 59, 59, 0.8),

    cyan400: '#007E6D',
    cyan600: '#004940',
    cyan800: '#003B33',

    pink400: '#E38FFF',
    pink600: '#F551FF',
    pink800: '#8E36A8',

    warning: '#DE350B',

    green300: '#66EBB5',
    green500: '#2CF04B',
    green800: '#28BE40',
  },
});

export type CSS = Stitches.CSS<typeof config>;



