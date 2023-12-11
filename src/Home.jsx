import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


function Home () {

const users = useSelector((state) => state.users);
  return (
    <div className='container mt-4'>
        <h2>React redux crud app</h2>
        <Link to="/create" className=' btn btn-success my-3'>Add record</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users, index) => (
                   <tr key={index}>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>
                        <button className='btn btn-small btn-primary'>Edit</button>
                        <button className='btn btn-small btn-danger ms-2'>Delete</button>
                    </td>
                   </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
 
export default Home