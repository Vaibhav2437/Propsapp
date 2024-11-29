import './App.css';
import Username from './Component/Username'
import Employee from './Component/Employee';
import reactlogo from './Images/react.png'
import Student from './Component/Student';
function App() {
  let image = reactlogo;
  const employee ={
    id : 101,
    name : 'Vaibhav',
    city : 'Nagpur',
    age : 22
  }

  const students = [
    {id:101, name :'vaibhav', city :'Nagpur',batch :'MERN'},
    {id:102, name :'Mahi', city :'Pune',batch :'MEAN'},
    {id:103, name :'Rohit', city :'Mumbai',batch :'Python'},
    {id:104, name :'Virat', city :'Jaipur',batch :'Java'},
    {id:105, name :'Rishab', city :'Nashik',batch :'C Lang'},
  ]
  return (
    <div className="App">
      <h1>Learn Props in React</h1>
      <h2></h2>
      
      {/* <Username Username = 'Vaibhav@123' Name ='Vaibhav Mehar' imagepath = {reactlogo} width='200' alt = 'reactlogo' /> */}
      {/* <Employee emp ={employee}/> */}

      <Student stuDetails = {students}/>
    </div>
  );
}

export default App;
