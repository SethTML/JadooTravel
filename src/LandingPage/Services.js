import satelliteIcon from '../Images/satelliteIcon.png';
import planeIcon from '../Images/planeIcon.png';
import microphoneIcon from '../Images/microphoneIcon.png';
import gearIcon from '../Images/gearIcon.png';
import plusGrid from '../Images/+grid.png';

function Services() {
  return (
    <div className = "Services reveal">
      <div className = "ServicesContent">
        <span className = "ServicesSubtitle">CATEGORY</span>
        <span className = "ServicesTitle">We Offer Best Services</span>
        <div className = "ServicesBox">
          <div className = "ServiceItem">
            <img src = {satelliteIcon} width= "35%"></img>
            <span className = 'ServiceItemTitle'>Calculated Weather</span>
            <span className = 'ServiceItemDesc'>Built Wicket longer admire do barton vanity itself do in it.</span>
          </div>
          <div className = "ServiceItem">
            <img src = {planeIcon} width= "40%"></img>
            <span className = 'ServiceItemTitle'>Best Flights</span>
            <span className = 'ServiceItemDesc'>Engrossed lsitening. Park gate sell they west hard for the.</span>
          </div>
          <div className = "ServiceItem">
            <img src = {microphoneIcon} width= "30%"></img>
            <span className = 'ServiceItemTitle'>Calculated Weather</span>
            <span className = 'ServiceItemDesc'>Barton vanity itself do in it. Preferd to men it engrossed listening.</span>
          </div>
          <div className = "ServiceItem">
            <img src = {gearIcon} width= "35%"></img>
            <span className = 'ServiceItemTitle'>Customization</span>
            <span className = 'ServiceItemDesc'>We deliver outsourced aviation services for military customers.</span>
          </div>
        </div>
        <img className = 'ServicesDecore' width = "200px" src = {plusGrid} />
      </div>
    </div>
  );
}

export default Services;
