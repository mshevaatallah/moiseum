import React, { useEffect } from "react";
import Person from "../images/person2.png";
import "../css/tes.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Teams() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="ourteam-title-container">
        <div className="container-title">
          <h1>
            Our{" "}
            <span style={{ fontFamily: "Fraunces" }}>
              <span style={{ color: "#3595e9" }}>M</span>oiseum
            </span>{" "}
            Team
          </h1>
        </div>
      </div>

      <div className="container-testing">
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>M Sheva</h1>
            <span> Developer</span>
          </div>
        </div>
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Umar F</h1>
            <span>Graphic Designer</span>
          </div>
        </div>
      </div>
      <div className="container-testing-2">
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Sahl Harits</h1>
            <span>Developer</span>
          </div>
        </div>
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Rasya Rui</h1>
            <span>Developer</span>
          </div>
        </div>
        <div className="card-pembungkus" data-aos="zoom-in">
          <div className="card-item">
            <img src={Person} alt="" />
          </div>
          <div className="nama-container">
            <h1>Ilham M</h1>
            <span>Story Writer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
