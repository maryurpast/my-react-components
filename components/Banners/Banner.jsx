import React from "react";
import BannerIcon from "./BannerIcon";
import "./index.css";
const BannerContext = React.createContext();
export { BannerContext };

export default function Banner({ children, status }) {
  return (
    <BannerContext.Provider value={status}>
      <div className={`banner ${status && status}`}>
        <BannerIcon />
        <div className="banner-text"> {children}</div>
      </div>
    </BannerContext.Provider>
  );
}
