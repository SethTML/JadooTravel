import SubscribeMailcon from '../Images/SubscribeMailcon.png';
import SubscribeMailGO from '../Images/SubscribeMailGO.png';
import SubscribeDecore from '../Images/+grid2.png';

import {useEffect} from 'react';

function Subscribe() {

  function HandleSubmit(event){
    event.preventDefault();
  }

  return (
    <div className = "Subscribe reveal">
      <div className = "SubscribeContent">
        <span className = "SubscribeDesc">Subscribe to get information, latest news and other interesting offers about Jadoo</span>
        <form onSubmit={HandleSubmit} className = "SubscribeBox">
          <div className = "SubscribeInput">
            <img className = 'SubscribeMailcon' height = "30%" src = {SubscribeMailcon} />
            <input className = 'SubscribeText' placeholder='Your email'></input>
          </div>
          <input className = 'SubscribeButton' type = 'submit' value = "Subscribe"></input>
        </form> 
        <img className = 'SubscribeContentDecore' src = {SubscribeMailGO} />
      </div>
      <img src = {SubscribeDecore} className = 'SubscribeDecore'/>
    </div>
  );
}

export default Subscribe;
