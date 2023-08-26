import JadooPlaneWoman from '../Images/JadooPlaneWoman.png';
import DropDownIndicator from '../Images/DropdownIndicator.png';
import HamburgerGO from '../Images/HamburgerGO.png';
import TextDecore from '../Images/TextDecore.png';
import { Link } from 'react-router-dom';
import {useEffect,useState,useRef} from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

function Hero({isMenuOpen,setMenuOpen,isSignedIn,setSignedIn}) {

  const logout = async () => {
    window.location.reload();
    try{
      await signOut(auth);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth,(data) => {
      if (data === null) {
        setSignedIn(false);
      }
      else{
        setSignedIn(true);
        console.log("Logged in");
      }
    })
  },[])

  function handleHamburger(){
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className = "Hero">
        <div className = "Header">
          <button className = "HeaderLogo"></button>

          <button onClick={handleHamburger} className = 'HeaderHamburger'></button>

          <div className = "HeaderButtons">
            <button className = "HeaderButton">Destinations</button>
            <button className = "HeaderButton">Hotels</button>
            <button className = "HeaderButton">Flights</button>
            <Link to = {`${isSignedIn ? '/booking' : '/login'}`} className = "HeaderButton">Bookings</Link>
            {!isSignedIn && <Link to = "/login" className = "HeaderButton">Login</Link>}
            {isSignedIn ? <button onClick={logout} className = "HeaderButton">Sign Out </button> : <Link to = "/register" className = "HeaderButton HeaderButtonBorder">Sign Up</Link>}
            <button className = "HeaderButton">EN <img className = "HeaderIcon" height={"6px"} src = {DropDownIndicator}/> </button>
          </div>
        </div>
        <div className = "HeroContent">
          <div className = "HeroContentDesc">
            <span className = "HeroContentFont1">BEST DESTINATIONS AROUND THE WORLD</span>
            <span className = "HeroContentFont2">Travel, enjoy and live a new and full life</span>
            <span className = "HeroContentFont3">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</span>
            <div className = "HeroContentButtons">
              <button className = "HeroContentButton1">Find Out More</button>
              <button className = "HeroContentButton2">
                <div className = "HeroContentPlay"></div>
                <span className = "HeroContentButtonFont">Play Demo</span>
              </button>
            </div>
          </div>
          <div className = "HeroContentImg">
            <img src = {JadooPlaneWoman} className = "HeroContentImage" />
          </div>
        </div>
    </div>
  );
}

export default Hero;
