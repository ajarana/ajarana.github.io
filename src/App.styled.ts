import { createGlobalStyle } from "styled-components";
import { ANIMATIONS } from "./constants";

export const GlobalStyles = createGlobalStyle`
  html.expanded-mobile-menu {
    overflow-y: scroll !important;
  }

  .expanded-mobile-menu,
  .expanded-mobile-menu body {
    height: 100%;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    transition: color ${ANIMATIONS.duration} linear;
    cursor: pointer;
    color: ${({ theme }) => theme.default.link.default};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.default.link.hover};
    }

    svg {
      margin-left: 4px;
    }
  }
`;
