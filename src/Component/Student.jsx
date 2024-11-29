import '../App.css'
const Student =(props)=>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Batch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.stuDetails.map((stu,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{stu.id}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.city}</td>
                                    <td>{stu.batch}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Student;