import React, { useState } from "react";
import "./index.css";

export default function Toast({ variant }) {
  const [open, setOpen] = useState(true);

  const {
    title,
    message,
    icon,
    mainColor,
    secondaryColor,
    backgroundColor,
    iconColor,
  } = variant;

  return (
    open && (
      <div
        className="toast-container"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="toast-icon-container">
          <span
            className="material-symbols-outlined"
            style={{ color: iconColor }}
          >
            {icon}
          </span>
        </div>
        <div className="toast-descr-container">
          <p className="toast-descr-title" style={{ color: mainColor }}>
            {title}
          </p>
          <p className="toast-descr-text" style={{ color: secondaryColor }}>
            {message}
          </p>
        </div>
        <button
          className="toast-close-btn"
          style={{ color: secondaryColor }}
          onClick={() => setOpen(false)}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    )
  );
}
