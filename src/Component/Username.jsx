const Username = (props) =>{
    return(
        <div>
            <h1>UserName Comp</h1>
            <h2>Username - {props.Username}<br/> Name- {props.Name}</h2>
            <img src ={props.imagepath} width ={props.width} alt = {props.alt}></img>
        </div>
    )
}
export default Username;