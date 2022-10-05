import { css } from "styled-components";

export const TYPOGRAPHY = {
  text50: css`
    font-size: 12px;
    line-height: 16px;
  `,
  text100: css`
    font-size: 14px;
    line-height: 20px;
  `,
  text200: css`
    font-size: 16px;
    line-height: 24px;
  `,
  text300: css`
    font-size: 18px;
    line-height: 28px;
  `,
  text400: css`
    font-size: 20px;
    line-height: 28px;
  `,
  text500: css`
    font-size: 24px;
    line-height: 32px;
  `,
  text600: css`
    font-size: 30px;
    line-height: 36px;
  `,
  text700: css`
    font-size: 35px;
    line-height: 40px;
  `,
  text800: css`
    font-size: 45px;
    line-height: 1;
  `,
  text900: css`
    font-size: 60px;
    line-height: 1;
  `,
  text1000: css`
    font-size: 72px;
    line-height: 1;
  `,
} as const;
