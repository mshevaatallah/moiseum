import React from "react";
import "../css/footer.css";
import Logo from '../assets/coeg.png';

function Footer() {
  return <div>
        <footer>
            <div className="row">
                <div className="col col1">
                <img src={Logo}/>
                    <h1>...</h1>
                    <p>ENJOY THE ARTS AND GREECE HISTORY</p>
                </div>
                <div className="col col2">
                    <ul>
                        <li><a href="#">Museum</a></li>
                        <li><a href="#">Exposition</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Audio</a></li>
                    </ul>
                    <div className="social">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-behance"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="col col3">
                    <h3>BE THE FIRST TO HEAR VIRTUAL SMART-MUSEUM NEWS</h3>
                    <input type="text" />       
                    <span>E-MAIL</span>
                    <button>SUBSRIBE</button>
                </div>
            </div>
                <div className="footer-wrap">
                   <p><i class="fa-sharp fa-solid fa-heart"></i><span> Like & Follow</span> From You. New Free TO Use Projects From US.</p>
                </div>
        </footer>
  </div>;
}

export default Footer;
