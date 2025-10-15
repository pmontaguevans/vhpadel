import React from "react";

const Box = ({ title, content, imageUrl, reverse, link }) => {
  return (
    <div className={`box-container ${reverse ? "reverse" : ""}`}>
      <div className="box-text">
        <h2>{title}</h2>
        <p>
          {content}
          <div>
            {link ? (
              <a style={{color: '#ea8717', textDecoration: 'none'}} href="https://www.matchi.se/facilities/vhpadel?date=2025-10-15&sport=" rel="noreferrer" target="_blank">
                <br />
                Klicka här för att boka
              </a>
            ) : null}
          </div>
        </p>
      </div>
      <div className="box-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Box;
