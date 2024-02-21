
import './Tour.css';
import { Link, useNavigate } from 'react-router-dom';

function Tour({ tour }) {
    const navigate=useNavigate()
  return (
    
      
    
    <button className='btn'
    onClick={()=>navigate("/city/:id",{state:{tourId:tour.id}})}>
      <div className='container' style={{
            backgroundImage: `url(${tour.image})`

      }} />
      
      <p className='para'>
        {tour.name}
      </p>
    </button>
     
          /* <p>{tour.name}</p> 
         <img src={tour.image} alt="destination image" /> */
    //     <p>
    //       <button onClick={()=>navigate("/city/:id",{state:{tourId:tour.id}})}>more info</button>
    // {/* <Route path="/city/:id" element={<TourDetailcomp />} /> */}
    //       {/* <Link to={{pathname:"/city/:id",state:tour}}>More Info</Link> */}
    //     </p>
       
    
      
    
  );
}

export default Tour;