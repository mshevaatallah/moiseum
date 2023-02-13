import React, { useEffect } from "react";
import "../css/footer.css";
import Logo from "../images/coeg.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="footers">
      <footer>
        <div className="row">
          <div className="col col1" data-aos="fade-right">
            <img src={Logo} />
            <h1>...</h1>
            <p>ENJOY THE ARTS AND GREECE HISTORY</p>
          </div>
          <div className="col col2" data-aos="fade-right">
            <ul>
              <li>
                <a href="#">Museum</a>
              </li>
              <li>
                <a href="#">Exposition</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Audio</a>
              </li>
            </ul>
            <div className="social">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-behance"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="col col3" data-aos="fade-right">
            <h3>BE THE FIRST TO HEAR VIRTUAL SMART-MUSEUM NEWS</h3>
            <input type="text" />
            <span>E-MAIL</span>
            <button>SUBSRIBE</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
