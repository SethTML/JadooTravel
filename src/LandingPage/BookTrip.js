import TripBookImage from '../Images/TripBookImage.png';
import ChooseDestination from '../Images/ChooseDestination.png';
import MakePayment from '../Images/MakePayment.png';
import ReachAirport from '../Images/ReachAirport.png';

function BookTrip() {
  return (
    <div className = "BookTrip reveal">
      <div className = 'BookTripContent'>
        <div className = 'BookTripDesc'>
          <span className = 'BookTripSubtitle'>Easy and Fast</span>
          <span className = 'BookTripTitle'>Book Your Next Trip In 3 Easy Steps</span>
          <div className = 'BookTripDescBox'>
            <img className = 'BookTripDescImage' src = {ChooseDestination} />
            <div className = 'BookTripDescBoxContent'>
              <span className = 'BookTripDescBoxContentTitle'>Choose Destination</span>
              <span className = 'BookTripDescBoxContentDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </span>
            </div>
          </div>
          <div className = 'BookTripDescBox'>
            <img className = 'BookTripDescImage' src = {MakePayment} />
            <div className = 'BookTripDescBoxContent'>
              <span className = 'BookTripDescBoxContentTitle'>Make Payment</span>
              <span className = 'BookTripDescBoxContentDesc'>Lorem ipsum dolor sit amet, consectetur adipscing elit. Urna, tortor tempus.</span>
            </div>
          </div>
          <div className = 'BookTripDescBox'>
            <img className = 'BookTripDescImage' src = {ReachAirport} />
            <div className = 'BookTripDescBoxContent'>
              <span className = 'BookTripDescBoxContentTitle'>Reach Airport on Selected Date</span>
              <span className = 'BookTripDescBoxContentDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </span>
            </div>
          </div>
        </div>
        <div className = 'BookTripImage'>
          <img className = 'BookTripImg' src = {TripBookImage} />
        </div>
      </div>
    </div>
  );
}

export default BookTrip;
