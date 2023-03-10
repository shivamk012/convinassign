import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

export default function History() {
  const data = useSelector(state => state.watchHistory);
  console.log(data);
  const history = data.history.reverse();
  return (
    <div> 
        <NavBar/>
        <div>
                <section className="h-100 gradient-custom">
                <div className="container py-5">
                  <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                      <div className="card mb-4">
                        <div className="card-header py-3">
                            <h5 className="mb-0">History</h5>
                        </div>
                        {history.map((element)=>{
                            return <div className='row'>
                              <div className='col mb-lg-0'>
                                <p className='my-auto'><strong>Name:{element.name}</strong></p>
                              </div>
                              <div className='col mb-lg-0'> <div className="card-body">
                                  <div className="row">
                                  
                                    <div className="col  mb-lg-0">
                                      <p><strong>{element.link}</strong></p>
                                    </div>
              
                                    <div className="col  mb-lg-0">
                                      <p id="form1"  type="number">{element.time}</p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        
                        <hr/>
                        </div>
                      })}
                        
                        </div>
              </div>
            </div>          </div>
        </section>
            </div>
    </div>
  )
}
