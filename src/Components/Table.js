import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../Css/table.css";

const Table = () => {
    const [usersData, setUsersData] = useState([]);
    
    const history = useNavigate();
    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
           setUsersData(response.data);
        }
        getData()
    }, [])
    
    return (
        <>
    
     <div><h1>View all Users</h1></div>
        <div className='tableContainer'>
            <table>
                <tr>
                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNo</th>
                    <th>Actions</th>
                </tr>
                {usersData.map((data) => {

                    return (
                        <tbody key={data.id}>
                            <tr >
                                <td>{data.name}</td>
                               
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <Link
                                        className='edit'
                                        to=" " state={data} >
                                       View
                                    </Link>
                                    
                                </td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
           
        </div>
        </>   
    )
}

export default Table
