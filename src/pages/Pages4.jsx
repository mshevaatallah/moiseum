import React, { useEffect } from "react";
import Orang from "../images/gallery/ppki/hatta.png";
import Orang2 from "../images/gallery/ppki/abdulwachid.png";
import Orang3 from "../images/gallery/ppki/irsoekarno.png";
import Orang4 from "../images/gallery/ppki/radjiman.png";
import Orang5 from "../images/gallery/ppki/RAAwiranata.png";
import Orang6 from "../images/gallery/ppki/soetarjokartohadikusumo.png";
import About1 from "../images/gallery/ppki/sidang1.jpeg";
import About2 from "../images/gallery/ppki/sidang2.webp";
import About3 from "../images/gallery/ppki/galery2.jpeg";
import About4 from "../images/gallery/ppki/galery3.jpeg";
// import Tugas1 from "../images/gallery/ppki/tugas1.png";
// import Tugas2 from "../images/gallery/ppki/tugas2.png";
// import Tugas3 from "../images/gallery/ppki/tugas3.png";
// import Tugas4 from "../images/gallery/ppki/tugas4.png";
import "../css/bpupki.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import StoryPPKI from "../components/StoryPPKI";
import Footer from "../components/Footer";
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
          <div
            className="title-bpupki"
            data-aos="fade-right"
            style={{ maxWidth: 500 }}
          >
            <h1>
              Apa itu{" "}
              <span style={{ fontSize: 90 }}>
                {" "}
                Pengeboman Hiroshima dan Nagasaki ?
              </span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki desc-bom" data-aos="fade-left">
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

      <div className="container-tokoh-bpupki">
        <div
          className="title-container"
          style={{ position: "relative" }}
          data-aos="fade-right"
        >
          <h1>
            Tokoh Pendiri{" "}
            <span style={{ fontSize: 80 }}>
              <span className="wrap">PP</span>
              <span>KI</span>
            </span>
          </h1>
        </div>
        <div className="card-team" data-aos="fade-right">
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang} alt="" className="orang-img" width={200} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Mohammad Hatta</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang2} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Abdoel Wachid</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang6} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Soetarjo Kartohadikoesumo</span>
              <h4>Ketua BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            {" "}
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang3} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Ir.Soekarno</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang4} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Radjiman Wedyodiningrat</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
          <div className="main-card">
            <div className="card-team-item">
              <div className="images-team">
                <img src={Orang5} alt="" className="orang-img" width={300} />
              </div>
            </div>
            <div className="desc-hero">
              <span>Wiranatakoesomo</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pages4;
