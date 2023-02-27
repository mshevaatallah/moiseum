import React ,{useState, useRef}from 'react'
import {FaBars} from 'react-icons/fa';

function Navbar() {
  const [click,setClick] = useState(" ")


  const Toggle = () =>{
    if(click == ""){
      setClick("open")
    } else setClick("")
  }



  return (
    <nav>
    <div className="navbar">
      <div className="olog"><a href="">M</a></div>
      <ul className='links'>
        <li><a href="">Virtual Moiseum</a></li>
        <li><a href="">Exposition</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Audio Guide</a></li>
      </ul>

      <div className='toogle_btn' onClick={Toggle}>
      <i class="fa-solid fa-bars"></i>
      </div>
   

    </div>
    <div className={`dropdown_menu ${click}` } >
    <li><a href="">Virtual Moiseum</a></li>
        <li><a href="https://laravel.com/docs/9.x/authorization#gates">Exposition</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Audio Guide</a></li>

    </div>
    </nav>
  );
}

export default Navbar;
