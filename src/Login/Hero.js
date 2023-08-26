import JadooPlaneWoman from '../Images/JadooPlaneWoman.png';
import DropDownIndicator from '../Images/DropdownIndicator.png';
import { Link,useNavigate } from 'react-router-dom';
import {useEffect,useState,useRef} from 'react';
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

function Hero({isMenuOpen,setMenuOpen,isSignedIn,setSignedIn}) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordVisible,setPasswordVisible] = useState(false);
  let navigate = useNavigate();

  async function logIn(e){
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
    }
    catch (err){
      alert("Incorrect Password");
    }
  }

  const logout = async () => {
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
        navigate("/");
        console.log("Logged in");
      }
    })
  },[])

  function togglePasswordVisible(){
    setPasswordVisible(!passwordVisible);
  }

  function handleHamburger(){
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className = "Hero">
        <div className = "Header">
          <Link to = "/" className = "HeaderLogo"></Link>

          <button onClick={handleHamburger} className = 'HeaderHamburger'></button>

          <div className = "HeaderButtons">
            <button className = "LoginHeaderButton">EN <img className = "HeaderIcon" height={"6px"} src = {DropDownIndicator}/> </button>
            {isSignedIn && <button onClick={logout} className = "HeaderButton">Sign Out </button>}
          </div>
        </div>
        <div className = "HeroContent">
            <div className = 'LoginHeroContent'>
                <span className = 'LoginHeroContentTitle'>Sign In</span>
                <form className = 'LoginForm'>
                    <label className = 'LoginFormLabel' htmlFor='LoginFormInputWrapper'>email</label>
                    <div id = "LoginFormInputWrapper" className = 'LoginFormInputWrapper'> 
                        <input className = 'LoginFormInput' type = "email" onChange = {(e) => {setEmail(e.target.value)}} />
                    </div>

                    <label className = 'LoginFormLabel' htmlFor='PasswordFormInputWrapper'>password</label>
                    <div id = "PasswordFormInputWrapper" className = 'LoginFormInputWrapper'> 
                        <input className = 'LoginFormInput' type = {passwordVisible ? 'text' : "password"} onChange = {(e) => {setPassword(e.target.value)}} />
                        <svg onClick={togglePasswordVisible} tabIndex= "0" class="LoginFormLogo" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="VisibilityOutlinedIcon"><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg>
                    </div>

                    <input onClick={logIn} className = 'LoginSignIn' type = "submit" value = "SIGN IN" />
                </form>
                <span className = 'LoginHeroContentText' >OR</span>
                <Link to = "/register" className = 'LoginRegister'>SIGN UP</Link>
            </div>
        </div>
    </div>
  );
}

export default Hero;
