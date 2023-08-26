import JadooGO from '../Images/JadooGO.png';
import FacebookGO from '../Images/FacebookGO.png';
import InstagramGO from '../Images/InstagramGO.png';
import TwitterGO from '../Images/TwitterGO.png';
import GetGoogleGO from '../Images/GetGoogleGO.png';
import GetAppleGO from '../Images/GetAppleGO.png';

function Footer() {
  return (
    <div className = "Footer">
      <div className = "FooterContent">
        <div className = "FooterContentBox1">
          <img tabIndex = "0" className = 'FooterLogo' height= "40px" src = {JadooGO} />
          <span className = 'FCB1Text'>Book your trip in minute, get full Control for much longer.</span>
        </div>
        <div className = 'FooterContentBox2'>
          <div className = 'FCB2Col1'>
            <span className = 'FCB2Title'>Company</span>
            <div className = 'FCB2Group'>
              <button className = 'FCB2Text'>About</button>
              <button className = 'FCB2Text'>Careers</button>
              <button className = 'FCB2Text'>Mobile</button>
            </div>
          </div>
          <div className = 'FCB2Col2'>
            <span className = 'FCB2Title'>Contact</span>
            <div className = 'FCB2Group'>
              <button className = 'FCB2Text'>Help/FAQ</button>
              <button className = 'FCB2Text'>Press</button>
              <button className = 'FCB2Text'>Affiliates</button>
            </div>
          </div>
          <div className = 'FCB2Col3'>
            <span className = 'FCB2Title'>More</span>
            <div className = 'FCB2Group'>
              <button className = 'FCB2Text'>Airelinefees</button>
              <button className = 'FCB2Text'>Airline</button>
              <button className = 'FCB2Text'>Low fare tips</button>
            </div>
          </div>
        </div>
        <div className = 'FooterContentBox3'>
          <div className = 'FCB3Socials'>
            <img tabIndex= "0" className = 'FCB3Social' src = {FacebookGO} />
            <img tabIndex= "0" className = 'FCB3Social' src = {InstagramGO} />
            <img tabIndex= "0" className = 'FCB3Social' src = {TwitterGO} />
          </div>
          <div className = 'FCB3Discover'>
            <span className = 'FCB3Text'>Discover our app</span>
            <div className = 'FCB3Gets'>
              <img tabIndex = "0" className = 'FCB3Get' src = {GetGoogleGO} />
              <img tabIndex = "0" className = 'FCB3Get' src = {GetAppleGO} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
