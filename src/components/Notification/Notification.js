import React from "react";

import bem from "../../bem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import "./Notification.scss";


type Props = {
  text: string,
  icon: any,
  colorBar: "success" | "info" | "loading" | "warning" | "error",
};

const displayIcon = (icon) => {
  let iconToDisplay = <FontAwesomeIcon icon={faCheckCircle} />;
  if (icon === "success") {
    iconToDisplay = (
      <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} />
    );
  }
  if (icon === "info") {
    iconToDisplay = (
      <FontAwesomeIcon style={{ color: "blue" }} icon={faInfoCircle} />
    );
  }
  if (icon === "loading") {
    iconToDisplay = (
      <FontAwesomeIcon style={{ color: "grey" }} icon={faSpinner} />
    );
  }
  if (icon === "warning") {
    iconToDisplay = (
      <FontAwesomeIcon style={{ color: "salmon" }} icon={faExclamationCircle} />
    );
  }
  if (icon === "error") {
    iconToDisplay = (
      <FontAwesomeIcon style={{ color: "red" }} icon={faExclamationTriangle} />
    );
  }
  return iconToDisplay;
};

const baseClass = "c-notification-bar";

const NotificationBar = ({ text, icon, colorBar }: Props) => {
  return (
    <div className={bem(baseClass)}>
      <div className={bem(baseClass, "color-bar", { colorBar: colorBar })} />
      <div className={bem(baseClass, "icon")}>{displayIcon(icon)}</div>
      <div className={bem(baseClass, "text")}>{text}</div>
    </div>
  );
};

export default NotificationBar;
