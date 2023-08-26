import Colosseum from '../Images/Colosseum.png';
import London from '../Images/London.png';
import Europe from '../Images/Europe.png';
import LocationPointer from '../Images/LocationPointer.png';
import DestinationDecore from '../Images/DestinationsDecore.png';

function Destinations() {
  return (
    <div className = "Destinations reveal">
      <span className = 'DestinationsSubtitle'>Top Selling</span>
      <span className = 'DestinationsTitle'>Top Destinations</span>
      <div className = 'DestinationsBox'>
        <div className = "DestinationItem">
          <div className = 'DestinationImage' >
            <img src = {Colosseum} className = 'DestinationImg' />
          </div>
          <div className = 'DestinationContent'>
            <div className = 'DestinationContentBox'>
              <div className = 'DestinationInfo'>
                <span className = 'DestinationTitle'>Rome,Italy</span>
                <span className = 'DestinationPrice'>$5,42k</span>
              </div>
              <div className = 'DestinationTravel'>
                <img width= "20px" src = {LocationPointer} />
                <span className = 'DestinationTravelText'>10 Days Trip</span>
              </div>
            </div>
          </div>
        </div>
        <div className = "DestinationItem">
          <div className = 'DestinationImage' >
            <img src = {London} className = 'DestinationImg' />
          </div>
          <div className = 'DestinationContent'>
            <div className = 'DestinationContentBox'>
              <div className = 'DestinationInfo'>
                <span className = 'DestinationTitle'>London, UK</span>
                <span className = 'DestinationPrice'>$4.2k</span>
              </div>
              <div className = 'DestinationTravel'>
                <img width= "20px" src = {LocationPointer} />
                <span className = 'DestinationTravelText'>12 Days Trip</span>
              </div>
            </div>
          </div>
        </div>
        <div className = "DestinationItem">
          <div className = 'DestinationImage' >
            <img src = {Europe} className = 'DestinationImg' />
          </div>
          <div className = 'DestinationContent'>
            <div className = 'DestinationContentBox'>
              <div className = 'DestinationInfo'>
                <span className = 'DestinationTitle'>Full Europe</span>
                <span className = 'DestinationPrice'>$15k</span>
              </div>
              <div className = 'DestinationTravel'>
                <img width= "20px" src = {LocationPointer} />
                <span className = 'DestinationTravelText'>28 Days Trip</span>
              </div>
            </div>
          </div>
          <img className = 'DestinationDecore' src = {DestinationDecore} height = "50%" />
        </div>
      </div>
    </div>
  );
}

export default Destinations;
