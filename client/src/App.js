import React from 'react'
import './App.css';

import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login';
import Product from './Components/NewProduct'
import History from './Components/History';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default function App() {

  return (
    <div>
      <Router>
      
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/Register' element={< Register />}></Route>
        <Route exact path='/Login' element={< Login />}></Route>
        <Route exact path='/Logout' element={< Login />}></Route>
        <Route exact path='/addNewProduct' element={< Product />}></Route>
        <Route exact path='/History' element={<History/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}
