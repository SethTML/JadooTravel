import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingApp from './LandingPage/LandingApp.js';
import NotFound from './NotFound.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import Booking from './Booking/Booking.js';
import { useState } from "react";

function App() {

  const [isMenuOpen,setMenuOpen] = useState(false);
  const [isSignedIn,setSignedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingApp isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} isSignedIn = {isSignedIn} setSignedIn = {setSignedIn}/>} />
        <Route path = "/login" element = {<Login isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} isSignedIn = {isSignedIn} setSignedIn = {setSignedIn} />} />
        <Route path = "/register" element = {<Register isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} isSignedIn = {isSignedIn} setSignedIn = {setSignedIn} />} />
        <Route path = "/booking" element = {<Booking isMenuOpen = {isMenuOpen} setMenuOpen = {setMenuOpen} isSignedIn = {isSignedIn} setSignedIn = {setSignedIn} />} />
        <Route path = "*" element = {<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
