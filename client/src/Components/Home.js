import React, { useEffect } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {actionCreators} from '../store/index';
import ContentCard from './ContentCard'

export default function Home() {
    const [card , setCard] = useState([]); 
    // const setLogin = useSelector(state => state.setLogin);
    const dispatch = useDispatch();
    const setLogin = useSelector(state=>state.setLogin)
    const port = process.env.PORT;
    const tempcard = useSelector(state=>state.cards);
    useEffect(() => {
        if(setLogin.clientId === null){

        }else{
          setCard(tempcard.cards);
        }
        console.log(typeof(card));
        // eslint-disable-next-line
    },[])
    
  return (
    <div>
      <div>
            <NavBar/>
            <div className="container">
            <div className="row my-4">
                {card.map((element)=>{
                return <div className='col-sm' key={element.name}>
                    <ContentCard name={element.name} link={element.link} bucket={element.link}/>
                    </div>
                })}
            </div>
            </div>
            </div> 
    </div>
  )
}

