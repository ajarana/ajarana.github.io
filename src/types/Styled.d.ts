import "styled-components";

interface Link {
  default: string;
  hover: string;
}

interface ThemeContext {
  text?: string;
  background?: string;
  link: Link;
  border?: string;
  divider?: string;
}

interface Variants {
  primary?: any;
  secondary?: any;
  neutral?: any;
}

declare module "styled-components" {
  export interface DefaultTheme {
    default: ThemeContext;
    heroHeader: ThemeContext;
    header: ThemeContext;
    alert: ThemeContext;
  }
}
