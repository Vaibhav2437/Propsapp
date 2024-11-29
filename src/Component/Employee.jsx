const Employee = (props) =>{
    return (
        <div>
            <h1>Employee Details</h1>
            <h2>Id - {props.emp.id} <br/>Name- {props.emp.name} <br/> City {props.emp.city} <br/> Age- {props.emp.age}</h2>
        </div>
    )
}

export default Employee;