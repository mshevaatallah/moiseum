import React, { useState, useEffect } from "react";

function Pages2() {
  const [isLoading, setLoading] = useState(true);
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
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
      <div className="container-tes">
        <div className="card-team">
          <div className="card-team-item"></div>
        </div>
      </div>
    </div>
  );
}

export default Pages2;
