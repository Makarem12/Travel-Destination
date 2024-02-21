import './Tours.css';
import Tour from './tour/Tour';
const destinationData=require('../../data/db.json')
function Tours(){
    return(
        <div style={   { display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'}
        }>
        {
            destinationData.map((element,index)=>{
                return(
                    <div key={element.id}> <Tour tour={element} /></div>
                   
                )
            })
          }
        </div>
    )
}
export default Tours;