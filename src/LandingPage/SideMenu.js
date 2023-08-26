import JadooPlaneWoman from '../Images/JadooPlaneWoman.png';
import DropDownIndicator from '../Images/DropdownIndicator.png';
import HamburgerGO from '../Images/HamburgerGO.png';
import { Link } from 'react-router-dom';
import {useEffect,useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

function SideMenu({isMenuOpen,setMenuOpen,isSignedIn,setSignedIn}) {

    let navigate = useNavigate();

    function closeMenu(){
        setMenuOpen(false);
    }
    
    const logout = async () => {
        window.location.reload();
        try{
          await signOut(auth);
        }
        catch(err){
          console.log(err);
        }
    }

    function offMenuToggle() {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div className = {`SideMenuCover ${isMenuOpen ? 'MenuCoverVisible' : ''}`}>
            <div className = {`SideMenu ${isMenuOpen ? 'SideMenuOpen' : ''}`}>
                <button onClick={offMenuToggle} className = "HeaderButton">Destinations</button>
                <button onClick={offMenuToggle} className = "HeaderButton">Hotels</button>
                <button onClick={offMenuToggle} className = "HeaderButton">Flights</button>
                <Link to = {`${isSignedIn ? '/booking' : '/login'}`} onClick={offMenuToggle} className = "HeaderButton">Bookings</Link>
                {!isSignedIn && <Link to = "/login" onClick={offMenuToggle} className = "HeaderButton">Login</Link>}
                {isSignedIn ? <button onClick={logout}  className = "HeaderButton">Sign Out </button> : <Link to = "/register" className = "HeaderButton HeaderButtonBorder">Sign Up</Link>}
                <button className = "HeaderButton" onClick={offMenuToggle}>EN <img className = "HeaderIcon" height={"6px"} src = {DropDownIndicator}/> </button>
            </div>
            <div onClick={closeMenu} className = {`SideMenuBG ${isMenuOpen ? 'MenuBGVisible' : ''}`}>

            </div>
        </div>
    );
}

export default SideMenu;
