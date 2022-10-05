import { DefaultTheme } from "styled-components";
import { PALETTE } from "./Palette";

export const DEFAULT_THEME: DefaultTheme = {
  default: {
    text: PALETTE.neutral[400],
    link: {
      default: PALETTE.primary[800],
      hover: PALETTE.primary[900],
    },
  },
  heroHeader: {
    link: {
      default: PALETTE.primary[100],
      hover: PALETTE.primary[50],
    },
  },
  header: {
    link: {
      default: PALETTE.neutral[0],
      hover: PALETTE.neutral[400],
    },
  },
  alert: {
    background: PALETTE.secondary[50],
    border: PALETTE.secondary[200],
    link: {
      default: PALETTE.primary[800],
      hover: PALETTE.primary[900],
    },
  },
};
