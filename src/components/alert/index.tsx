import classNames from "classnames/bind";
import { ReactNode } from "react";

const styles = require("./index.module.scss").default;

type AlertType = "Error" | "Warning" | "Informational";

interface AlertProps {
  alertType: AlertType;
  children: ReactNode;
  heading?: string;
}

const cx = classNames.bind(styles);

const Alert = ({ alertType, children, heading }: AlertProps) => {
  const alertContainerClassName = cx("alert", {
    informational: alertType === "Informational",
  });

  return (
    <div className={alertContainerClassName}>
      {heading && <p className={styles.heading}>{heading}</p>}
      {children}
    </div>
  );
};

export default Alert;
