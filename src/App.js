import HomeComp from "./components/home/Home";
import TourDetailcomp from "./components/TourDetails/TourDetails";
import { Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <>
    {/* <HomeComp/>
  <TourDetailcomp/> */}
  
  <Routes>
    <Route path="/" element={<HomeComp/>}></Route>
    <Route path="/city/:id" element={<TourDetailcomp />} />
  </Routes>
    </>
  
  );
}

export default App;
