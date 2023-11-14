import React from "react";
import { BannerContext } from "./Banner";

export default function BannerIcon() {
  const status = React.useContext(BannerContext);

  let icon;
  const iconClass = `banner-icon ${status && status}`;
  switch (status) {
    case "info":
      icon = "info";
      break;
    case "success":
      icon = "check_circle";
      break;
    case "warning":
      icon = "warning";
      break;
    case "error":
      icon = "error";
      break;
  }

  return (
    <span className={"material-symbols-outlined" + " " + iconClass}>
      {icon}
    </span>
  );
}
