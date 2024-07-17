import Axios from 'axios';
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);

    const [newWage, setNewWage] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);
    
    const addEmployee = () => {
        Axios.post('http://localhost:3005/create',{
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
        }).then(() => {
            setEmployeeList([...employeeList, {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
        }])
        })
    };

    const getEmployees = () => {
        Axios.get('http://localhost:3005/employees').then((response) => {
            setEmployeeList(response.data);

        })
    }

    const updateEmployeeWage = (id) => {
        Axios.put("http://localhost:3005/update", { wage: newWage, id: id }).then((response) => {
            setEmployeeList(employeeList.map((val) => {
                return val.id == id ? {id: val.id, name: val.name, country: val.country, position: val.position, wage: newWage} : val
            }))
        })
    }

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:3005/delete/${id}`).then((response) => {
            setEmployeeList(employeeList.filter((val) => {
                return val.id != id;
            }))
        })
    }

    return (
        <div className="createEmployee">
            <h1 className="Header">Employee List</h1>
            <label>Name:</label>
            <input type="text" placeholder="Enter name..." onChange={event =>{setName(event.target.value)}}></input>
            <label>Age:</label>
            <input type="number" placeholder="Age..." onChange={event =>{setAge(event.target.value)}}></input>
            <label>Country:</label>
            <input type="text" placeholder="Enter country of residence..." onChange={event =>{setCountry(event.target.value)}}></input>
            <label>Position:</label>
            <input id="positionLabel" type="text" placeholder="Enter work position..." onChange={event =>{setPosition(event.target.value)}}></input>
            <label>Annual Salary:</label>
            <input type="number" placeholder="Salary..." onChange={event =>{setWage(event.target.value)}}></input>
            <button onClick={addEmployee}>Add Employee</button>
            <br />
            <div className='employees'>
                <button onClick={getEmployees}>Reveal Employees</button>
                {employeeList.map((val, key) => {
                    return <div className='employee'>
                                <div>
                                    <h3>Name: {val.name}</h3>
                                    <h3>Age: {val.age}</h3>
                                    <h3>Country: {val.country}</h3>
                                    <h3>Position: {val.position}</h3>
                                    <h3>Country: {val.wage}</h3>
                                </div>
                                <div className='inputArea'>
                                    <input type='text' placeholder='Enter New Wage...'onChange={event =>{setNewWage(event.target.value)}}></input>
                                    <button onClick={() => {updateEmployeeWage(val.id)}}>Update</button>
                                    
                                    <button onClick={() => {deleteEmployee(val.id)}}>Delete</button>
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Login;