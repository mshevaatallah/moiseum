import React, { useEffect } from "react";
import Orang from "../images/gallery/pengeboman/mayorjendralcharles.png";
import Orang2 from "../images/gallery/pengeboman/paulwarfield.png";

import About1 from "../images/gallery/pengeboman/galeri1.jpeg";
import About2 from "../images/gallery/pengeboman/galeri2.jpeg";
import About3 from "../images/gallery/pengeboman/galeri3.jpeg";
import About4 from "../images/gallery/pengeboman/galeri4.jpeg";
import Tugas1 from "../images/gallery/pengeboman/gallery1.png";
import Tugas2 from "../images/gallery/pengeboman/gallery2.png";
import Tugas3 from "../images/gallery/pengeboman/gallery3.png";
import Tugas4 from "../images/gallery/pengeboman/gallery4.png";
import "../css/ppki.css";
import AOS from "aos";
import "aos/dist/aos.css";
import StoryPPKI from "../components/StoryPPKI";
import Footer from "../components/Footer";
import StoryJapan from "../components/StoryJapan";
function Pages4() {
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
              Apa itu{" "}
              <span style={{ fontSize: 70 }}>
                {" "}
                Pengeboman Hiroshima dan Nagasaki ?
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Amerika Serikat menjatuhkan bom atom di kota Hiroshima dan
              Nagasaki, Jepang, pada bulan Agustus 1945, tahap akhir Perang
              Dunia Kedua. Amerika Serikat menjatuhkan bom dengan persetujuan
              dari Britania Raya sebagaimana tertuang dalam Perjanjian Quebec.
              Dua operasi pengeboman yang menewaskan sedikitnya 129.000 jiwa ini
              merupakan penggunaan senjata nuklir masa perang untuk pertama kali
              dan satu-satunya dalam sejarah.
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
            Tokoh Pengeboman <span style={{ fontSize: 80 }}></span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Mayor Jendral Charles</span>
              <h4>Perwira Pasukan</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-itemm">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Paul Warfield</span>
              <h4>Pilot Pesawat</h4>
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
            <h1>Gallery Sejarah</h1>
          </div>
          <div className="list-tugas" data-aos="fade-up">
            <hr />
            <div className="list-tugas-content" data-aos="fade-up">
              <div className="image-container-bpupki">
                <img src={Tugas1} alt="" />
              </div>

              <h3>Tentara yang sedang bertugas</h3>
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
                Ledakan hasil pengeboman yang terjadi di kota Hiroshima dan
                Nagasaki
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
                Wujud dari bom atom yang terjadi di kota Hiroshima dan Nagasaki
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
                <img src={Tugas3} alt="" />
              </div>

              <h3>
                Ledakan besar yang difoto dari atas langit di kota Hiroshima dan
                Nagasaki{" "}
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
            <hr style={{ marginTop: 60 }} />
          </div>
        </div>
        <StoryJapan color="#5fa8e8" />
        <Footer />
      </div>
    </div>
  );
}

export default Pages4;
