import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {actionCreators} from '../store/index'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  const Reset = ()=>{
      setUsername('');
      setPassword('');
  }

  const registerUser = async ()=>{
    let userDetails = {
      username : username,
      password : password,
      card : []
    };
    const port = process.env.PORT;

    await axios.post(`http://localhost:8000/api/setUser` , userDetails).then((res)=>{
        // console.log(res.data.insertedId);
        dispatch(actionCreators.setToken({
            _id : res.data.insertedId,
            username : username,
            password : password
        }));
        dispatch(actionCreators.initialiseCards([]));
        navigate('/');
    }).catch(err => {
      console.log(err);
    });
  }
  
  return (
      <>
      <NavBar/>
    <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
                <div className="card card-registration my-4">
                <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOJO7X2q6uqZ_Z99WgDosHOigQPOy-lwjSy5C3AZ2FzXbQ7frAwuKDUH5Ueso9dUigXc&usqp=CAU"
                         className="img-fluid h-100"/>
                    </div>
                    <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">

                        <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            <label className="form-label" htmlFor="form3Example1m">Username</label>
                            </div>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="password" id="form3Example1m" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <label className="form-label" htmlFor="form3Example1m">Password</label>
                            </div>
                        </div>
                        </div>

                        <div className="d-flex justify-content pt-3">
                        <button type="button" className="btn btn-warning btn-lg ms-2" onClick={registerUser}>Submit form</button>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
  )
}
