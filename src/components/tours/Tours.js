function ToursComp(props){
    console.log(11111,props)
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