import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../store/index';
import axios from 'axios';

export default function Login() {
  const [username , setUsername] = useState('');
  const [pass , setPass] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const port = process.env.PORT;
  const loginUser = async ()=>{
    const userDetails = {
      username : username,
      password : pass,
    }
    // console.log(userDetails);
    await axios.post(`http://localhost:8000/api/loginUser` , userDetails).then((res)=>{
        console.log(res.data);
        dispatch(actionCreators.setToken(res.data));
        dispatch(actionCreators.initialiseCards(res.data.cards));
        dispatch(actionCreators.iniHistory(res.data.history));
        navigate('/');
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{"borderRadius": "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{"borderRadius": "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{"color": "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{"letterSpacing": "1px"}}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
                          <label className="form-label" htmlFor="form2Example17" >Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" className="form-control form-control-lg" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={loginUser}>Login</button>
                        </div>

                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{"color": "#393f81"}}>Don't have an account? <Link to="/register"
                            style={{"color": "#393f81"}}>Register here</Link></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
