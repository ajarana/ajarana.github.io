import styles from "./index.module.scss";
import lightStyles from "./light-link.module.scss";
import darkStyles from "./dark-link.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkType = "LightLink" | "DarkLink";

interface Link {
  url: string;
  children: ReactNode;
  linkType?: LinkType;
  icon?: IconDefinition;
}

export default function PortfolioExternalLink({
  linkType,
  url,
  children,
  icon,
}: Link) {
  let linkClasses;

  switch (linkType) {
    case "LightLink":
      linkClasses = classNames({
        [lightStyles.lightLink]: true,
      });
      break;

    case "DarkLink":
      linkClasses = classNames({
        [darkStyles.darkLink]: true,
      });
      break;

    default:
      linkClasses = classNames({
        [styles.link]: true,
      });
  }

  return (
    <a
      href={url}
      className={linkClasses}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}

      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}
