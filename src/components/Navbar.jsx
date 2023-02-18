import "../styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  /* Usestate for toogle navbar ama navbar */
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav className="nav">
      <img
        className="logo-title"
        src={Logo}
        alt="title"
        data-aos="fade-down"
        data-aos-duration="2000"
      />
      <div data-aos="fade-down" data-aos-duration="2000">
        <div className="Menu">
          <ul className={active}>
            <li className="nav-elements hover1">
              <NavLink to="/">VIRTUAL MUSEUM</NavLink>
            </li>
            <li className="nav-elements hover1">
              <NavLink to="/">EXPOSITION</NavLink>
            </li>
            <li className="nav-elements hover1">
              <NavLink to="/">ABOUT</NavLink>
            </li>
            <li className="nav-elements hover1">
              <NavLink to="/">AUDIO GUIDE</NavLink>
            </li>
            <li className="nav-elements hover2">
              <NavLink to="/">
                <button className="button-navbar2">LOGIN</button>
              </NavLink>
            </li>
            <li className="nav-elements hover2">
              <NavLink to="/">
                <button className="button-navbar">SIGN UP</button>
              </NavLink>
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
