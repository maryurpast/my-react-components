import React from "react";
import "./index.css";
import classNames from "classnames";

export default function Badge({ children, color, shape }) {
  let colorClass = color && `color-${color}`;
  let shapeClass = shape && `shape-${shape}`;
  const allClasses = classNames("badge", colorClass, shapeClass);

  return <span className={allClasses}>{children}</span>;
}
