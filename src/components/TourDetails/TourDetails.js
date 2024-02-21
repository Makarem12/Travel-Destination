import HeaderComp from "../header/Header";
import FooterComp from "../footer/Footer";
import { useLocation } from "react-router-dom";
import './TourDetails.css';
const destinationData=require('../../data/db.json')
function TourDetailcomp(){
    const location=useLocation()
 //  const {id}=props.location;
 const tour=destinationData.filter((e)=>e.id==location.state.tourId)
 console.log('hi',tour)
    return(
        <>
        <HeaderComp/>
        <div>

         <p>{tour[0].name}</p>

        <img className="image" src={tour[0].image} alt="destination image" />
        <p>
          <p>{tour[0].info}</p>
        </p> 
        
       
      </div>
        <FooterComp/>
        </>
    )
}
export default TourDetailcomp;