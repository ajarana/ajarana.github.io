import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./index.module.scss";
import lightStyles from "./light-link.module.scss";
import plainStyles from "./plain-link.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type LinkType = "LightLink" | "PlainLink";

interface Link {
  children: ReactNode;
  navLinkProps: NavLinkProps;
  icon?: IconDefinition;
  linkType?: LinkType;
}

export default function PortfolioInternalLink({
  linkType,
  icon,
  children,
  navLinkProps,
}: Link) {
  let linkClasses;

  switch (linkType) {
    case "LightLink":
      linkClasses = classNames({
        [lightStyles.lightLink]: true,
      });
      break;

    case "PlainLink":
      linkClasses = classNames({
        [plainStyles.plainLink]: true,
      });
      break;

    default:
      linkClasses = classNames({
        [styles.link]: true,
      });
  }

  return (
    <NavLink
      {...navLinkProps}
      className={linkClasses}
    >
      {children}

      {icon && <FontAwesomeIcon icon={icon} />}
    </NavLink>
  );
}
