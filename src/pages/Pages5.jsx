import React, { useEffect } from "react";
import Orang from "../images/gallery/rengasdengklok/Wikana.png";
import Orang2 from "../images/gallery/rengasdengklok/soekarni.png";
import Orang3 from "../images/gallery/rengasdengklok/chaerulshaleh.png";
import Orang4 from "../images/gallery/rengasdengklok/Aidit.png";

import About1 from "../images/gallery/rengasdengklok/galeri1.jpeg";
import About2 from "../images/gallery/rengasdengklok/galeri2.jpeg";
import About3 from "../images/gallery/rengasdengklok/galeri3.jpg";
import About4 from "../images/gallery/rengasdengklok/galeri4.jpeg";
import Tugas1 from "../images/gallery/rengasdengklok/tugas1.png";
import Tugas2 from "../images/gallery/rengasdengklok/tugas2.png";

import Tugas4 from "../images/gallery/rengasdengklok/tugas34.png";
import "../css/ppki.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../components/Footer";
import StoryRengas from "../components/StoryRengas";
function Pages5() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container-about-bpupki">
        <div className="background-circle">
          <span></span>
        </div>
        <div className="image-about-container" data-aos="fade-up">
          <div className="image1" data-aos="fade-left">
            <img src={About1} alt="" />
          </div>
          <div className="image2" data-aos="fade-up">
            <img src={About2} alt="" />
          </div>
          <div className="image3" data-aos="fade-up">
            <img src={About3} alt="" />
          </div>
          <div className="image4" data-aos="fade-right">
            <img src={About4} alt="" />
          </div>
        </div>
        <div
          className="about-bpupki-container"
          style={{ position: "relative" }}
        >
          <div className="title-bpupki" data-aos="fade-right">
            <h1>
              Pengertian
              <span style={{ fontSize: 60 }}>
                {" "}
                Peristiwa Rengasdengklok
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Peristiwa Rengasdengklok adalah peristiwa penculikan yang
              dilakukan oleh sejumlah pemuda antara lain Soekarni, Wikana, Aidit
              dan Chaerul Saleh dari perkumpulan "Menteng 31" terhadap Soekarno
              dan Hatta.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="container-tokoh-bpupki">
        <div
          className="title-container"
          style={{ position: "relative" }}
          data-aos="fade-right"
        >
          <h1>
            Tokoh Peristiwa{" "}
            <span style={{ fontSize: 50 }}>
              <span>Rengasdengklok</span>
            </span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={200} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Wikana</span>
              <h4>Anggota Golongan Muda</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Soekarni</span>
              <h4>Anggota Golongan Muda</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang4} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>DN Aidit</span>
              <h4>Anggota Golongan Muda</h4>
            </div>
          </div>
          <div className="main-card">
            {" "}
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang3} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Chaerul Shaleh</span>
              <h4>Anggota Golongan Muda</h4>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />

      <div className="container-tugas-bpupki">
        <div className="background-circle-2">
          <span></span>
        </div>
        <div className="tugas-bpupki-main">
          <div className="title-tugas" data-aos="fade-right">
            <h1>
              Tugas Peristiwa <span className="wrap">Ren</span>gasdengklok
            </h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>
                Untuk mendesak Soekarno dan Hatta agar segera memproklamasikan
                kemerdekaan
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  illo at enim autem illum doloremque beatae sequi quisquam
                  veniam ducimus distinctio quibusdam ipsum itaque, quam officia
                  vero! Animi obcaecati assumenda ullam velit quidem laborum
                  nesciunt neque quibusdam cum consequatur earum a, unde natus
                  tempore aliquam asperiores, est cupiditate aliquid. Veritatis?
                </p>
              </div>
            </div>
          </div>
          <div className="list-tugas" style={{ marginTop: 70 }}>
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas4} alt="" />
              </div>

              <h3>
                Untuk menjauhkan Soekarno dan Hatta dari pengaruh pihak Jepang.
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  illo at enim autem illum doloremque beatae sequi quisquam
                  veniam ducimus distinctio quibusdam ipsum itaque, quam officia
                  vero! Animi obcaecati assumenda ullam velit quidem laborum
                  nesciunt neque quibusdam cum consequatur earum a, unde natus
                  tempore aliquam asperiores, est cupiditate aliquid. Veritatis?
                </p>
              </div>
            </div>
          </div>
          <div className="list-tugas" style={{ marginTop: 70 }}>
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas2} alt="" />
              </div>

              <h3>
                Menjadikan Proklamasi sebagai bukti perjuangan bangsa Indonesia
              </h3>
              <div className="deskripsi-tugas">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  illo at enim autem illum doloremque beatae sequi quisquam
                  veniam ducimus distinctio quibusdam ipsum itaque, quam officia
                  vero! Animi obcaecati assumenda ullam velit quidem laborum
                  nesciunt neque quibusdam cum consequatur earum a, unde natus
                  tempore aliquam asperiores, est cupiditate aliquid. Veritatis?
                </p>
              </div>
            </div>
          </div>
        </div>
        <StoryRengas color="#5fa8e8" />
        <Footer />
      </div>
    </div>
  );
}

export default Pages5;
