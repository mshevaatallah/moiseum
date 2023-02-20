import React, { useEffect } from "react";
import Patung from "../images/patunghatta.png";
import Patung2 from "../images/patung2.png";
import Patung3 from "../images/patung3.png";
import Plastic from "../images/plastic.jpeg";
import "../css/storry.css";
import AOS from "aos";
import "aos/dist/aos.css";
function StoryBPUPKI() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ paddingTop: 200 }}>
      <div className="background-circle-story">
        <span></span>
      </div>
      <div
        className="title-bpupki-story"
        style={{ position: "relative" }}
        data-aos="fade-down"
      >
        <h1>Cerita Sejarah BPUPKI</h1>
      </div>
      <section className="materi" style={{}}>
        <div className="contents">
          {/* <img className="plastic" src={Plastic} alt="" /> */}
          <div className="satu">
            <img src={Patung2} />
          </div>
          <div
            className="text"
            style={{ position: "relative" }}
            data-aos="fade-right"
          >
            <h1>We Take Care Of Our Clients</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              ut veniam nesciunt est consequuntur culpa. Omnis, eius ex ducimus
              veritatis fugiat explicabo enim blanditiis cupiditate nobis
              quidem, officia eveniet laudantium dignissimos vel eos placeat sit
              quisquam provident id obcaecati a. Cumque modi earum autem
              voluptatibus eos doloribus minus ex enim.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung3} style={{ position: "relative" }} />
          </div>
          <div className="text" data-aos="fade-left">
            <h1>We Take Care Of Our Clients</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              ut veniam nesciunt est consequuntur culpa. Omnis, eius ex ducimus
              veritatis fugiat explicabo enim blanditiis cupiditate nobis
              quidem, officia eveniet laudantium dignissimos vel eos placeat sit
              quisquam provident id obcaecati a. Cumque modi earum autem
              voluptatibus eos doloribus minus ex enim.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
        <div className="contents">
          <div className="satu">
            <img src={Patung} />
          </div>
          <div className="text" data-aos="fade-right">
            <h1>We Take Care Of Our Clients</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              ut veniam nesciunt est consequuntur culpa. Omnis, eius ex ducimus
              veritatis fugiat explicabo enim blanditiis cupiditate nobis
              quidem, officia eveniet laudantium dignissimos vel eos placeat sit
              quisquam provident id obcaecati a. Cumque modi earum autem
              voluptatibus eos doloribus minus ex enim.
            </p>
            <button type="button">Hire Me</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryBPUPKI;
