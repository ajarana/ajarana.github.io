import classNames from "classnames/bind";
import { ReactNode } from "react";

const styles = require("./index.module.scss").default;

type AlertType = "Error" | "Warning" | "Informational";

interface AlertProps {
	alertType: AlertType;
	children: ReactNode;
}

const cx = classNames.bind(styles);

const Alert = ({ alertType, children }: AlertProps) => {
	const alertContainerClassName = cx("alert", {
		informational: alertType === "Informational",
	});

	return <div className={alertContainerClassName}>{children}</div>;
};

export default Alert;
