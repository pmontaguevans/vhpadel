import React from "react";
import "./gallery.css"; // valfri CSS-fil för layout

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
