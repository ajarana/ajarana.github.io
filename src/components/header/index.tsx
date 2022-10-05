import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { ANIMATIONS, BREAKPOINTS } from "../../constants";
import { TYPOGRAPHY } from "../../styled-partials";
import ExternalLink from "../external-link";
import "./index.scss";

const createLinkDecoration = (length: number) => {
  return css`
    width: ${length}%;
    left: calc((100% - ${length}%) / 2);
  `;
};

const LogoLink = styled(NavLink)`
  ${TYPOGRAPHY.text500}

  color: ${({ theme }) => theme.header.link.default};

  font-family: "Source Code Pro", monospace;

  &:hover {
    text-decoration: none;
  }
`;

const HeaderLink = styled.a<{
  $animated?: boolean;
  $external?: boolean;
}>`
  ${TYPOGRAPHY.text500}

  color: ${({ theme, $external }) =>
    $external ? theme.header.link.default : theme.header.link.hover};

  padding: 20px 0;
  width: 100%;
  text-align: center;

  &:hover {
    text-decoration: none;
  }

  &.active {
    color: ${({ theme }) => theme.header.link.default};
  }

  svg {
    margin-left: 8px;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    ${TYPOGRAPHY.text100}

    svg {
      margin-left: 4px;
    }

    ${({ $animated }) =>
      $animated &&
      css`
        color: ${({ theme }) => theme.header.link.hover};
        position: relative;
        padding: 4px;

        &:after {
          ${createLinkDecoration(0)}
          content: "";
          display: inline-block;
          height: 1px;
          background: ${({ theme }) => theme.header.link.default};
          position: absolute;
          bottom: 0;
          transition: all ${ANIMATIONS.duration} ease-in-out;
          border-radius: 3px;
        }

        &:hover {
          color: ${({ theme }) => theme.header.link.default};
        }

        &.active {
          color: ${({ theme }) => theme.header.link.default};

          &:hover {
            color: ${({ theme }) => theme.header.link.default};
          }

          &:after {
            ${createLinkDecoration(100)}
          }
        }
      `}
  }
`;

const Header = () => {
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const [mobileMenuPreviouslyCollapsed, setMobileMenuPreviouslyCollapsed] =
    useState(false);

  const html: HTMLElement = document.getElementsByTagName("html")[0];

  const setCollapsedState = () => {
    if (showMobileMenu && !mobileMenuPreviouslyCollapsed) {
      setMobileMenuPreviouslyCollapsed(true);
    }
  };

  const hamburgerMenuClickHandler = () => {
    setCollapsedState();

    toggleMobileMenu(!showMobileMenu);

    html.classList.toggle("expanded-mobile-menu");
  };

  const mobileMenuItemClickHandler = () => {
    setCollapsedState();

    toggleMobileMenu(false);

    html.classList.remove("expanded-mobile-menu");
  };

  useEffect(() => {
    const html: HTMLElement = document.getElementsByTagName("html")[0];

    const breakpoint = Number.parseInt(BREAKPOINTS.lg, 10);

    const resizeHandler = () => {
      if (window.innerWidth >= breakpoint) {
        setMobileMenuPreviouslyCollapsed(false);

        if (showMobileMenu) {
          toggleMobileMenu(false);

          html.classList.remove("expanded-mobile-menu");
        }
      }
    };

    window.addEventListener("resize", resizeHandler, false);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [showMobileMenu]);

  const headerClasses = classNames("app-header", {
    expanded: showMobileMenu,
    collapsed: !showMobileMenu && mobileMenuPreviouslyCollapsed,
  });

  return (
    <>
      <header className={headerClasses}>
        <div className="mainContainer">
          <div className="logoContainer">
            <LogoLink to="/">Andres</LogoLink>
          </div>

          <nav className="portfolioLinks">
            <ul>
              <li
                className="menuItems"
                onClick={() => mobileMenuItemClickHandler()}
              >
                <HeaderLink
                  as={NavLink}
                  to="/"
                  exact={true}
                  $animated
                >
                  Home
                </HeaderLink>
              </li>

              <li
                className="menuItems"
                onClick={() => mobileMenuItemClickHandler()}
              >
                <HeaderLink
                  as={NavLink}
                  to="/resume/"
                  $animated
                >
                  Resume
                </HeaderLink>
              </li>

              <li
                className="menuItems"
                onClick={() => mobileMenuItemClickHandler()}
              >
                <HeaderLink
                  as={NavLink}
                  to="/blog/"
                  $animated
                >
                  Blog
                </HeaderLink>
              </li>

              <li
                className="menuItems"
                onClick={() => mobileMenuItemClickHandler()}
              >
                <HeaderLink
                  as={ExternalLink}
                  href="https://github.com/ajarana/"
                  $external
                >
                  GitHub
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </HeaderLink>
              </li>

              <li
                className="menuItems"
                onClick={() => mobileMenuItemClickHandler()}
              >
                <HeaderLink
                  as={ExternalLink}
                  href="https://codepen.io/ajarana/"
                  $external
                >
                  CodePen
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </HeaderLink>
              </li>
            </ul>
          </nav>

          <div className="invis-aligner"></div>

          <div id="buttonWrapper">
            <button
              id="mobileButton"
              onClick={() => hamburgerMenuClickHandler()}
            >
              <span>
                <span id="hamburgerWrapper">
                  <span className="hamburgerIcon"></span>
                  <span className="hamburgerIcon"></span>
                  <span className="hamburgerIcon"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
