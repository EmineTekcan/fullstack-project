import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const url = "http://localhost:8080/users"

export default function AddUser() {

    const navigate=useNavigate()

    const [user, setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user


    const onInputChange=(e)=>{
        setUser({ ...user, [e.target.name]: e.target.value});
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        axios.post(url,user);
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3>Register User</h3>

                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor='name' className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name='name' value={name}
                        onChange={(e)=>onInputChange(e)}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='username' className="form-label">Username</label>
                        <input type="text" className="form-control"  placeholder="Username" name='username' value={username}
                        onChange={(e)=>onInputChange(e)}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Email</label>
                        <input type="email" className="form-control"  placeholder="E-mail" name='email' value={email}
                        onChange={(e)=>onInputChange(e)}
                        ></input>
                    </div>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-danger mx-3'>Add User</button>
                        <Link to="/" className='btn btn-success'>Cancel</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
