import HeaderComp from "../header/Header";
import ToursComp from "../tours/Tours";
import FooterComp from "../footer/Footer";

const destinationData=require('../../data/db.json')
function HomeComp(){
    // console.log(destinationData[0])
    return(
        <>
        <HeaderComp/>
          
          {/* <ToursComp destinationName={destinationData[0].name} destinationImage={destinationData[0].image}/> */}
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