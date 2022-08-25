import "styled-components";

interface ThemeContext {
  text: string;
  background: string;
  link: string;
  linkHover: string;
  border: string;
  dividers?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    default: ThemeContext;
    primary: ThemeContext;
    info: ThemeContext;
    error: ThemeContext;
    success: ThemeContext;
    neutral: ThemeContext;
    heroHeader: ThemeContext;
    header: ThemeContext;
    footer: ThemeContext;
  }
}
