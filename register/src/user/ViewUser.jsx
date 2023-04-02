import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {


    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });
    
    const {id}=useParams();
    

    useEffect(() => {
        loadUser();
        
    }, [])

    const loadUser = async () => {

        const result = await axios.get('http://localhost:8080/users/'+id);
        console.log(result.data);
        setUser(result.data);
    }
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h3>View User</h3>
                    <div className="card col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: {user.name}</li>
                            <li className="list-group-item">Username: {user.username}</li>
                            <li className="list-group-item">E-mail: {user.email}</li>
                        </ul>
                        <div className="mb-3">
                        <button type='submit' className='btn btn-danger mx-3'>Add User</button>
                        <Link to="/" className='btn btn-success'>Cancel</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
