import React, { useState } from "react";
import { RiInboxLine } from "react-icons/ri";
import "./index.css";

export default function Tooltip({ style, titleText, messageText, children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip ${style}`}>
          <RiInboxLine className={`tooltip-icon ${style}`} />
          <div className="tooltip-info">
            <p className={`tooltip-title ${style}`}>{titleText}</p>
            <p className={`tooltip-text ${style}`}>{messageText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
