import React, { useState, useEffect } from "react";
import People1 from '../images/people1.png';
import People2 from '../images/people2.png';
import People3 from '../images/people3.png';

function Test() {
  return (

    <div className="cards-profile">
        <div className="titles">
            <h1>Moiseum <span className="team">Team</span> </h1>
        </div>

<main className="baris1">
    <div className="row">
<div class="cards">
  <img src={People1}/>
  <div class="containers">
    <h3><b>Rasya Rui Costa</b></h3> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="cards">
  <img src={People1}/>
  <div class="containers">
    <h3><b>Ilham</b></h3> 
    <p>Architect & Engineer</p> 
  </div>
</div>
</div>
  <div className="row">
  <div class="cards">
  <img src={People1}/>
  <div class="containers">
    <h3><b>Sheva</b></h3> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  <div class="cards">
  <img src={People1}/>
  <div class="containers">
    <h3><b>Umar</b></h3> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  <div class="cards">
  <img src={People1}/>
  <div class="containers">
    <h3><b>Sahl</b></h3> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  </div>
  
  
</main>

        
{/* <main>
  <div class='cards'>
    <div class='info'>
        <img src={People2}/>
      <h1 class='title'>Rasya Rui Costa</h1>
      <p className="description">Developer</p>
    </div>
  </div>
  <div class='cards'>
    <div class='info'>
        <img src={People2}/>
      <h1 class='title'>Muhammad Sheva Athala</h1>
      <p className="description">Developer</p>
    </div>
  </div>
  <div class='cards'>
    <div class='info'>
        <img src={People2}/>
      <h1 class='title'>Umar</h1>
      <p className="description">Developer</p>
    </div>
  </div>
  <div class='cards'>
    <div class='info'>
        <img src={People2}/>
      <h1 class='title'>Sahl</h1>
      <p className="description">Developer</p>
    </div>
  </div>
  <div class='cards'>
    <div class='info'>
        <img src={People2}/>
      <h1 class='title'>Ilham</h1>
      <p className="description">Developer</p>
    </div>
  </div>
</main> */}

    </div>

  );
}

export default Test;
