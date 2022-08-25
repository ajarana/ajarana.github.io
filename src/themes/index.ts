import { DefaultTheme } from "styled-components";

interface Shades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface Palette {
  primary: Shades;
  secondary: Shades;
  success: Shades;
  warning: Shades;
  danger: Shades;
  info: Shades;
  neutral: Shades;
}

const palette: Palette = {
  primary: {
    50: "#f1f0fa",
    100: "#dbd9f6",
    200: "#c5c2f4",
    300: "#aeacf2",
    400: "#9796ef",
    500: "#8688ec",
    600: "#6a74e9",
    700: "#4860e5",
    800: "#344fc8",
    900: "#263b9b",
  },
  secondary: {
    50: "#e9f2f7",
    100: "#c3e0ee",
    200: "#8ac9e5",
    300: "#76bcda",
    400: "#68a7c2",
    500: "#5f99b2",
    600: "#52859a",
    700: "#457184",
    800: "#395e6e",
    900: "#2c4b58",
  },
  success: {
    50: "#d3fcc6",
    100: "#4dfb39",
    200: "#2de51d",
    300: "#17ce09",
    400: "#12b707",
    500: "#11a806",
    600: "#0f9c05",
    700: "#097c03",
    800: "#076702",
    900: "#045301",
  },
  warning: {
    50: "#fdefcc",
    100: "#ffd836",
    200: "#efbf01",
    300: "#dda800",
    400: "#cb9200",
    500: "#c18300",
    600: "#ae6e00",
    700: "#9a5a00",
    800: "#854700",
    900: "#6f3600",
  },
  danger: {
    50: "#fceeeb",
    100: "#fcd1c9",
    200: "#fdb3a5",
    300: "#ff9380",
    400: "#ff6e5b",
    500: "#ff4f41",
    600: "#f60022",
    700: "#e0001e",
    800: "#b10015",
    900: "#90000f",
  },
  info: {
    50: "#eef1fb",
    100: "#dce3f9",
    200: "#b4c7f9",
    300: "#94b2f8",
    400: "#719ff6",
    500: "#5492f5",
    600: "#2d7fe6",
    700: "#256cc5",
    800: "#1d5aa5",
    900: "#164886",
  },
  neutral: {
    50: "#f0f1f1",
    100: "#dadcdc",
    200: "#c5c7c7",
    300: "#b1b2b2",
    400: "#9d9e9e",
    500: "#909191",
    600: "#7c7e7e",
    700: "#6a6b6b",
    800: "#585858",
    900: "#0f1010",
  },
};

export const DEFAULT_THEME: DefaultTheme = {
  default: {
    text: palette.neutral[400],
    background: "",
    dividers: "",
    link: palette.info[700],
    linkHover: palette.info[800],
    border: "",
  },
  primary: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
  info: {
    text: "",
    background: "",
    link: palette.danger[500],
    linkHover: palette.danger[600],
    border: "",
  },
  error: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
  success: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
  neutral: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
  heroHeader: {
    text: "",
    background: "",
    link: palette.primary[200],
    linkHover: palette.primary[100],
    border: "",
  },
  header: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
  footer: {
    text: "",
    background: "",
    link: "",
    linkHover: "",
    border: "",
  },
};
