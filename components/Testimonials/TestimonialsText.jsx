import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialsText({ text, name, workplace }) {
  return (
    <div className="testimonials-text">
      <ImQuotesLeft className="testimonials-quotes-icon" />
      <p className="testimonials-text-main">{text}</p>
      <p className="testimonials-text-credentials">
        {name} <br /> {workplace}
      </p>
    </div>
  );
}
