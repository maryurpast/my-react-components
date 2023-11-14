import React from "react";

export default function TestimonialsPhoto({ image, position }) {
  let style = {
    backgroundImage: image ? `url(${image})` : "url('../../images/photo.jpg')",
    backgroundPosition: position ? position : "50% 35%",
  };
  return <div className="testimonials-photo" style={style}></div>;
}
