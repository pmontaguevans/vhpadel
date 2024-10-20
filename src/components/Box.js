import React from "react";

const Box = ({ title, content, imageUrl, reverse }) => {
  return (
    <div className={`box-container ${reverse ? "reverse" : ""}`}>
      <div className="box-text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="box-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Box;
