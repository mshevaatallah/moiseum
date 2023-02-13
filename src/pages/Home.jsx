import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
function Home() {
  return (
    <div className="background">
      <div className="container-main">
        <p>hai</p>
      </div>
      <div className="explore">
        <div className="ie">
          <span></span>
        </div>

        <div className="title-container">
          {" "}
          <h1>Our story chapters</h1>
        </div>
        <div className="card-container">
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
              <div className="circle">
                <BsFillPlayFill color="#0c0d36" />
              </div>
            </div>
          </div>
          <div className="card">
            {" "}
            <div className="new-badge">NEW</div>
            <div className="title-card">
              <h2>Pembentukan PPKI</h2>
            </div>
            <div className="desc-card">
              Panitia Persiapan Kemerdekaan Indonesia atau Dokuritsu Junbi Inkai
              adalah badan yang dibentuk Jepang untuk mempersiapkan kemerdekaan
              Indonesia ...
            </div>
            <div className="play-button">
              <div className="circle">
                <BsFillPlayFill color="#0c0d36" />
              </div>
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
              <div className="circle">
                <BsFillPlayFill color="#0c0d36" />
              </div>
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
              Menyerahnya Jepang kepada Sekutu menimbulkan tekanan Golongan Muda
              agar Golongan Tua segera mempercepat proklamasi kemerdekaan. Namun
              kedua tokoh Golongan Tua ...
            </div>
            <div className="play-button">
              <div className="circle">
                <BsFillPlayFill color="#0c0d36" />
              </div>
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
              <div className="circle">
                <BsFillPlayFill color="#0c0d36" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
