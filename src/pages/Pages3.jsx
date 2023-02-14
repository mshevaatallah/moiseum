import React, { useState, useEffect } from "react";
import "../css/bpupki.css";
function Pages3() {
  const [isLoading, setLoading] = useState(true);
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }
  return (
    <div>
      <div className="first-section">
        <p>
          <span className="ie-3"></span>
        </p>
        <div className="container-lagi" style={{ zIndex: 9999 }}>
          <div className="title-content">
            <h1 className="first">Pembentukan</h1>
            <span className="second">BPU</span>
            <span className="secondd">PKI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages3;
