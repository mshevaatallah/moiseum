import React from "react";
import Spline from "@splinetool/react-spline";
import IconTwitter from "../images/icon-twitter.svg";
import IconYouTube from "../images/icon-youtube.svg";
import Navbar from "../components/Navbar";
import Asset_1 from "../images/Asset_1.png";
import "../styles.css";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main-container">
      <span className="background"></span>
      <img
        data-aos="fade-down"
        data-aos-duration="1000"
        className="spline"
        src={Asset_1}
        alt="Logo"
      />

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="social"
      >
        <div className="line" />
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src={IconTwitter} alt="Twitter" />
        </div>
        <div>
          <img src={IconYouTube} alt="YouTube" />
        </div>
      </div>
      <div className="Content">
        <Navbar />
        <h1 data-aos="fade-right" data-aos-duration="1000" id="virtual-museum">
          VIRTUAL MUSEUM
        </h1>
        <h1 id="title-museum">
          <div className="modern" data-aos="fade-left" data-aos-duration="1000">
            Modern
          </div>
          <br />
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="strip">&nbsp;</span>
            <span>Indonesia</span>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            Museum
          </div>
        </h1>
        <p>
          <span className="background2"></span>
        </p>
        <div className="hover-for-button-content">
          {/* <button className="button-content">
            <img className="arrow-icon" src={arrow} alt="" /> Start free trial
          </button> */}

        </div>
      </div>
    </div>
  );
}

export default Home;
