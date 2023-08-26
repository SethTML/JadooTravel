import Hero from './Hero.js';
import Footer from './Footer.js';
import SideMenu from '../LandingPage/SideMenu.js';

function App({isMenuOpen,setMenuOpen,isSignedIn,setSignedIn}) {
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
    </div>
  );
}

export default App;
