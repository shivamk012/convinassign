import React from 'react'
import {
  Link
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { actionCreators } from '../store/index';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const setLogin = useSelector(state=>state.setLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const port = process.env.PORT;
  let button1;
  let cartButton;
  let addNewItem;
  
  const Logout = async()=>{
    dispatch(actionCreators.logOutSession());
    dispatch(actionCreators.updateCard([]));
    dispatch(actionCreators.updateHistory([]));
    navigate('/');    
  }

  if(!setLogin.clientId){
    button1 = <Link className="btn btn-success my-2 my-sm-0 text-align-center" to='/Login'>Login</Link>;
  }
  else{
    button1 = <button className="btn btn-danger my-2 my-sm-0" onClick={Logout}>Logout</button>;
    cartButton = <Link className="btn btn-secondary my-2 my-sm-0" to={setLogin.clientId === null ? '/Login' : '/History'}>History</Link>;
    addNewItem = <Link className="btn btn-secondary my-2 my-sm-0" to='/addNewProduct'>Add New Food Product</Link>
  }
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"fontSize" : "25px"}}>
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li></ul>
    </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item mx-2 mt-1">
          {button1}
        </li>
        <li className="nav-item mx-2 mt-1">
          {addNewItem}
        </li>
      </ul>
    <div className="d-flex align-items-center">
      <div className="text-reset mt-1 mx-2" href="#">
        {cartButton}
      </div>
    </div>
  </div>
</nav>

  )
}

