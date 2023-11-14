import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { BannerContext } from "./Banner";

export default function BannerIcon() {
  const status = React.useContext(BannerContext);

  let icon;
  const iconClass = `banner-icon ${status && status}`;
  switch (status) {
    case "info":
      icon = <FaInfoCircle className={iconClass} />;
      break;
    case "success":
      icon = <FaCheckCircle className={iconClass} />;
      break;
    case "warning":
      icon = <FaExclamationTriangle className={iconClass} />;
      break;
    case "error":
      icon = <FaTimesCircle className={iconClass} />;
      break;
    default:
      icon = <FaInfoCircle className={iconClass} />;
  }

  return icon;
}
