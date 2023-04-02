import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const url = "http://localhost:8080/users"

function Home() {

    const [users, setUsers] = useState([])

    const {id}=useParams

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get(url);
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
       await axios.delete('http://localhost:8080/users/'+id)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-5'>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {users.map((user,index) =>(
                            <tr key={index}>
                            <th scope="row"  >{index+1}</th>
                            <td >{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={'/view/'+user.id} className="btn btn-primary mx-3">View</Link>
                                <Link to={'/edit/'+user.id} className='btn btn-outline-primary mx-3'>Edit</Link>
                                <button onClick={()=>deleteUser(user.id)} type='button' className='btn btn-danger mx-3'>Delete</button>
                            </td>
                          </tr>
                       ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home