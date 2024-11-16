import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <LazyLoadImage
            src={image}
            alt={`Gallery image ${index + 1}`}
            effect="blur"
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
