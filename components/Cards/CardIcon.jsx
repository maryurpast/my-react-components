import React from "react";
import { IconContext } from "react-icons";
import { RiFileUploadFill } from "react-icons/ri";

export default function CardIcon({ icon, color = "#3F75FE", size = 50 }) {
  return icon ? (
    <IconContext.Provider
      value={{ className: "card-icon", size: size, color: color }}
    >
      {icon}
    </IconContext.Provider>
  ) : (
    <RiFileUploadFill className="card-icon" />
  );
}
