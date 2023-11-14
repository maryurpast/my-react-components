import React from "react";
import { BannerContext } from "./Banner";

export default function BannerTitle({ children }) {
  const status = React.useContext(BannerContext);
  return (
    <div className={`banner-text-title ${status && status}`}>{children}</div>
  );
}
