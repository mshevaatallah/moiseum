import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Patung from "../images/grouping2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Teams from "../components/Test";
import MainSection from "../components/MainSection";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <MainSection />
      <hr className="hr" />
      <div className="about-container">
        <div className="ie" data-aos="fade-right">
          <span></span>
        </div>
        <div className="about-border" data-aos="fade-up">
          <div className="about-title fade-right" data-aos="fade-up">
            <h1 style={{ fontFamily: "Darker Grotesque", fontWeight: 900 }}>
              About{" "}
              <span style={{ fontWeight: 900 }}>
                <span style={{ color: "#4aa9f7", fontFamily: "MuseoModerno" }}>
                  M
                </span>
                oiseum
              </span>{" "}
              Exhibition
            </h1>
          </div>
          <div className="about-imagess">
            <img src={Patung} alt="" className="images-patung" />
          </div>

          <div className="about-desc" data-aos="fade-up">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              eius mollitia cumque culpa qui similique magni, atque id. Et, ea.
              Tempora magni earum, doloribus doloremque at a ipsam accusantium.
              Nobis porro, debitis consequuntur inventore consequatur nam ut
              atque? Unde, ducimus!
            </p>
            <div className="button-readmore">READ MORE</div>
          </div>
        </div>
      </div>
      {/* // ini adalah bagian about// */}
      <hr className="hr" />
      <div className="explore">
        <div className="ie-2" data-aos="fade-right">
          <span></span>
        </div>
        <div className="container-flex" data-aos="fade-right">
          <div className="title-container">
            {" "}
            <h1>
              Our Story <span style={{ color: "#4aa9f7" }}>Chapters</span>
            </h1>
          </div>
          <div className="card-container" data-aos="fade-right">
            <div className="card">
              <div className="new-badge">NEW</div>
              <div className="title-card">
                <h2>Pembentukan BPUPKI</h2>
              </div>
              <div className="desc-card">
                Badan Usaha Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi
                Cosakai adalah badan yang didirikan untuk mempersiapkan komponen
                ...
              </div>
              <div className="play-button">
                <Link className="circle" to="/sejarah-pembentukan-bpupki">
                  <BsFillPlayFill color="#0c0d36" />
                </Link>
              </div>
            </div>
            <div className="card">
              {" "}
              <div className="new-badge">NEW</div>
              <div className="title-card">
                <h2>Pembentukan PPKI</h2>
              </div>
              <div className="desc-card">
                Panitia Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi
                Inkai adalah badan yang dibentuk Jepang untuk mempersiapkan
                kemerdekaan Indonesia ...
              </div>
              <div className="play-button">
                <Link className="circle" to="/sejarah-pembentukan-ppki">
                  <BsFillPlayFill color="#0c0d36" />
                </Link>
              </div>
            </div>
            <div className="card">
              {" "}
              <div className="new-badge">NEW</div>
              <div className="title-card">
                <h2 style={{ fontSize: 34, lineHeight: 1 }}>
                  Pengeboman Hiroshima dan Nagasaki
                </h2>
              </div>
              <div className="desc-card">
                Peristiwa pengeboman Hiroshima dan Nagasaki oleh sekutu menjadi
                faktor eksternal yang memengaruhi peristiwa Proklamasi
                Kemerdekaan. ...
              </div>
              <div className="play-button">
                <Link
                  className="circle"
                  to="sejarah-pengeboman-hiroshimadannagasaki"
                >
                  <BsFillPlayFill color="#0c0d36" />
                </Link>
              </div>
            </div>
            <div className="card">
              {" "}
              <div className="new-badge">NEW</div>
              <div className="title-card">
                <h2 style={{ fontSize: 40, lineHeight: 1 }}>
                  Peristiwa Rengasdengklok
                </h2>
              </div>
              <div className="desc-card">
                Menyerahnya Jepang kepada Sekutu menimbulkan tekanan Golongan
                Muda agar Golongan Tua segera mempercepat proklamasi
                kemerdekaan. Namun kedua tokoh Golongan Tua ...
              </div>
              <div className="play-button">
                <Link className="circle" to="/sejarah-peristiwa-rengasdengklok">
                  <BsFillPlayFill color="#0c0d36" />
                </Link>
              </div>
            </div>
            <div className="card">
              {" "}
              <div className="new-badge">NEW</div>
              <div className="title-card">
                <h2 style={{ fontSize: 33, lineHeight: 1 }}>
                  Penyusunan Naskah Proklamasi
                </h2>
              </div>
              <div className="desc-card">
                Badan Usaha Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi
                Cosakai adalah badan yang didirikan untuk mempersiapkan komponen
                ...
              </div>
              <div className="play-button">
                <Link
                  className="circle"
                  to="/sejarah-penyusunan-naskahproklamasi"
                >
                  <BsFillPlayFill color="#0c0d36" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-hatta">
          <img src={Patung} alt="" width={240} />
        </div> */}
      </div>
      <hr className="hr" />

      <Teams />
      <Footer />
    </div>
  );
}

export default Home;
