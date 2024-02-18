import HeaderComp from "../header/Header";
import ToursComp from "../tours/Tours";
import FooterComp from "../footer/Footer";

const destinationData=require('../../data/db.json')
function HomeComp(){
    return(
        <>
        <HeaderComp/>
          {
            destinationData.map(element=>{
                return(
                    <div> <ToursComp destinationName={element.name} destinationImage={element.image}/></div>
                   
                )
            })
          }
          <FooterComp/>
        </>
    )
    
}
export default HomeComp; 