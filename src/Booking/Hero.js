import JadooPlaneWoman from '../Images/JadooPlaneWoman.png';
import DropDownIndicator from '../Images/DropdownIndicator.png';
import { Link,useNavigate } from 'react-router-dom';
import {useEffect,useState,useRef} from 'react';
import { addDoc,collection,doc,getDoc, getDocs,query, where,deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';
import { createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

function Hero() {
  const [location,setLocation] = useState("");
  const [price,setPrice] = useState("");
  const [passengers,setPassengers] = useState("");
  const [date,setDate] = useState("");
  const [isSignedIn,setSignedIn] = useState(null);
  const [BookingDisplay,setBookingDisplay] = useState();

  let navigate = useNavigate();

  const bookings = collection(db,"bookings");

  let ID = auth?.currentUser?.uid;

  async function createBooking(){
    try{
        const q = await query(bookings,where("content", "==",{location,price,passengers,date}));

        const querySnapshott = await getDocs(q);
        if (querySnapshott.empty){
            await addDoc(bookings,{content:{location,price,passengers,date},id:ID})
        }
        else{
            alert("Trip already exist...");
        }
    }
    catch(err) {
        alert("There was an issue")
    }
  };

  const logout = async () => {
    try{
      await signOut(auth);
    }
    catch(err){
      console.log(err);
    }
  }

  async function deleteItem(id){
    const BookingDoc = doc(db,'bookings',id);
    await deleteDoc(BookingDoc);
  }
  

  async function loadItems(){

    

    const q = await query(bookings,where("id", "==",ID));

    const qSnapshot = await getDocs(q);
    console.log(qSnapshot);

    const readableData = qSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }))

    const DIVTable = readableData.map((data) => {
        return (
        <div className = 'BookingDataDisplayItem'>
            <span className = 'BookingDisplayFont'>Trip to {data.content.location}</span>
            <span className = 'BookingDisplayFont'>Group of {data.content.passengers}</span>
            <span className = 'BookingDisplayFont'>${data.content.price}</span>
            <span className = 'BookingDisplayFont'>Date: {data.content.date}</span>
            <button onClick = {(e) => {deleteItem(data.id); setTimeout(loadItems,1000)}} className = 'BookingDisplayFont BookingDisplayCancel'>CANCEL</button>
        </div>
        )
    });

    setBookingDisplay(DIVTable);

  }

  useEffect(() => {
    if (isSignedIn){
        let turn = loadItems();
    }
  },[isSignedIn])

  useEffect(() => {
    onAuthStateChanged(auth,(data) => {
      if (data === null) {
        setSignedIn(false);
        navigate("/");
      }
      else{
        setSignedIn(true);
        console.log("Logged in");
      }
    })
  },[])

  return (
    <div className = "Hero">
        <div className = "Header">
          <Link to = "/" className = "HeaderLogo"></Link>

          <div className = "HeaderButtons">
            <button className = "LoginHeaderButton">EN <img className = "HeaderIcon" height={"6px"} src = {DropDownIndicator}/> </button>
            {isSignedIn && <button onClick={logout} className = "HeaderButton">Sign Out </button>}
          </div>
        </div>
        <div className = "HeroContent">
            <div className = 'BookingHeroContent'> 
                <div className = 'BookingDataDisplay'>
                    {BookingDisplay}
                </div>
                <div className = 'BookingDataEntry'>
                    <span className = 'BookingTitle'>Create Booking</span>

                    <label htmlFor='BookingEntry' className = 'BookingEntryLabel'>Location</label>
                    <input maxLength={30} onChange={(e) => {setLocation(e.target.value);}} id = "BookingEntry" className = 'BookingEntry' type = "text"></input>
                    
                    <label htmlFor='BookingEntry' className = 'BookingEntryLabel'>Price ($USD)</label>
                    <input maxLength={10} onChange={(e) => {setPrice(e.target.value);}} id = "BookingEntry" className = 'BookingEntry' type = "number"></input>
                    
                    <label htmlFor='BookingEntry' className = 'BookingEntryLabel'>Amount of Passengers</label>
                    <input max={3} onChange={(e) => {setPassengers(e.target.value);}} id = "BookingEntry" className = 'BookingEntry' type = "number"></input>

                    <label htmlFor='BookingEntry' className = 'BookingEntryLabel'>Date of Trip</label>
                    <input onChange={(e) => {setDate(e.target.value);}} id = "BookingEntry" className = 'BookingEntry' type = "date"></input>

                    <button onClick={() => {
                        createBooking();
                        setTimeout(loadItems,1000);
                    }} className = 'BookingSubmit'>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
