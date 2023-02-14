import React, { useState, useEffect } from "react";
import Orang from "../images/orang.png";

function Pages2() {
  return (
    <div>
      <div className="container-tes">
        <div className="card-team">
          <div className="card-team-item">
            <div className="images-team">
              <img src={Orang} alt="" className="orang-img" width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages2;
