import React from "react";
import { IconContext } from "react-icons";

export default function CardIcon({ icon, color = "#3F75FE", size = 50 }) {
  return icon ? (
    <IconContext.Provider
      value={{ className: "card-icon", size: size, color: color }}
    >
      {icon}
    </IconContext.Provider>
  ) : (
    <img
      src={"./components/Cards/images/icon.svg"}
      alt="Icon"
      className="card-icon"
    />
  );
}
