import React, { forwardRef } from "react";
import "./styles.css";

const Container = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="responsive-container">
        <div className="container-stats">
          <div className="stat-item">
            <h1 className="stat-number">14</h1>
            <p className="stat-label">padelbanor</p>
          </div>
          <div className="stat-item">
            <h1 className="stat-number">2</h1>
            <p className="stat-label">barnbanor</p>
          </div>
          <div className="stat-item">
            <h1 className="stat-number">1</h1>
            <p className="stat-label">singelbana</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Container;
