import React, { useEffect } from "react";
import Orang from "../images/radjiman2.png";
import Orang2 from "../images/soekarno.png";
import Orang3 from "../images/hatta.png";
import Orang4 from "../images/soeroso.png";
import Orang5 from "../images/kihajar.png";
import About1 from "../images/gallery/bpupki/sidang1.jpeg";
import About2 from "../images/gallery/bpupki/sidang2.jpeg";
import About3 from "../images/gallery/bpupki/sidang3.png";
import About4 from "../images/gallery/bpupki/sidang4.jpeg";
import "../css/bpupki.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Pages6() {
  useEffect(() => {
    AOS.init();
  }, []);
  // const [isLoading, setLoading] = useState(true);
  // function someRequest() {
  //   //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  //   return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  // }

  // useEffect(() => {
  //   someRequest().then(() => {
  //     const loaderElement = document.querySelector(".loader-container");
  //     if (loaderElement) {
  //       loaderElement.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // });

  // if (isLoading) {
  //   //
  //   return null;
  // }
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
              Apa itu <span style={{ fontSize: 90 }}>BPUPKI ?</span>{" "}
            </h1>
          </div>
          <div className="desc-bpupki" data-aos="fade-left">
            <p>
              Badan Usaha Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi
              Cosakai adalah badan yang didirikan untuk mempersiapkan komponen –
              komponen kemerdekaan Indonesia. BPUPKI dibentuk pada tanggal 1
              Maret 1945 dan baru diresmikan pada tanggal 29 Maret 1945
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
              <span className="wrap">BPU</span>
              <span>PKI</span>
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
              <span>Dr.Radjiman Widiyoningrat</span>
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
              <span>Ir.Soekarno</span>
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
              <span>Moh Hatta</span>
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
              <span>Raden Pandji Soeroso</span>
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
              <span>Ki Hajar Dewantara</span>
              <h4>Anggota BPUPKI</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages6;
