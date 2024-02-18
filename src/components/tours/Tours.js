import './Tours.css';
function ToursComp(props){
    return(
        <>
        <div>
            <p>{props.destinationName}</p>
            <img src={props.destinationImage} alt="destination image"/>
        </div>
        </>
    )
}
export default ToursComp;