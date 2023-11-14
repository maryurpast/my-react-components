import React from "react";

export default function TestimonialsPhoto({ image, position }) {
  let style = {
    backgroundImage: image
      ? `url(${image})`
      : "url(https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRvZyUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D)",
    backgroundPosition: position ? position : "50% 35%",
  };
  return <div className="testimonials-photo" style={style}></div>;
}
