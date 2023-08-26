import Hero from './Hero.js';
import Services from './Services.js';
import Destinations from './Destinations.js';
import BookTrip from './BookTrip.js';
import Testimonials from "./Testimonials.js";
import Brands from "./Brands.js";
import Subscribe from "./Subscribe.js";
import Footer from "./Footer.js";
import SideMenu from './SideMenu.js';
import { useState,useEffect,useRef } from 'react';

function App({isMenuOpen,setMenuOpen,isSignedIn,setSignedIn}) {

  function Reveal(){
    let reveals = document.querySelectorAll(".reveal");
  
    for(let i = 0 ; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 400;
  
      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{

      }
    }
  
  
  }

  window.addEventListener("scroll",Reveal);

  return (
    <div className = "App">
        <SideMenu
          isMenuOpen = {isMenuOpen}
          setMenuOpen = {setMenuOpen}
          isSignedIn = {isSignedIn}
          setSignedIn = {setSignedIn}
        />
        <Hero 
          isMenuOpen = {isMenuOpen}
          setMenuOpen = {setMenuOpen}
          isSignedIn = {isSignedIn}
          setSignedIn = {setSignedIn}
        />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Brands />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
