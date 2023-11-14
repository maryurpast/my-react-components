import React from "react";
import { BannerContext } from "./Banner";

export default function BannerText({ children }) {
  const status = React.useContext(BannerContext);
  let text;
  switch (status) {
    case "info":
      text =
        "Info message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";
      break;
    case "success":
      text =
        "Success message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";
      break;
    case "warning":
      text =
        "Warning message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";
      break;
    case "error":
      text =
        "Error message: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.";
      break;
  }
  return status ? (
    <p className={`banner-text-message ${status}`}>{text}</p>
  ) : null;
}
