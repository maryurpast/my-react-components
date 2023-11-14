import React from "react";

export default function TestimonialsText({ text, name, workplace }) {
  return (
    <div className="testimonials-text">
      <img
        src="../../images/quotes-icon.svg"
        alt="photo"
        className="testimonials-quotes-icon"
      />
      <p className="testimonials-text-main">{text}</p>
      <p className="testimonials-text-credentials">
        {name} <br /> {workplace}
      </p>
    </div>
  );
}
