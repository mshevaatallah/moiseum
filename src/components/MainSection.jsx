import React from "react";
import Image from "../images/image-main.png";
import "../css/MainSection.css";
function MainSection() {
  return (
    <div className="main-section-container">
      <div className="background-circle-main">
        <span></span>
      </div>
      <div className="main-container-section">
        <div className="right-section">
          <div className="main-image-content">
            <img src={Image} alt="" style={{ position: "relative" }} />
          </div>
        </div>
        <div className="left-section">
          <div className="virtual-text" style={{ position: "relative" }}>
            VIRTUAL MUSEUM
          </div>
          <div className="title-main-section" style={{ position: "relative" }}>
            <h1>Modern &</h1>
            <h1>Indoensian</h1>
            <h1>& Museum</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
