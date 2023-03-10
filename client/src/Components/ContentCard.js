import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {actionCreators} from '../store/index'
import { useState } from 'react';
import axios from 'axios';

export default function Food(props) {
  const dispatch = useDispatch();
  const [flag , setFlag] = useState(true);
  const [deleteFlag , setDeleteFlag] = useState(false)
  const setLogin = useSelector(state=>state.setLogin);
  const statecard = useSelector(state=>state.cards);
  let card = statecard.cards;
  const [showState , setShowState] = useState(false);
  const navigate = useNavigate();
  const [link , setLink] = useState("");
  const [name , setName] = useState('');
  const [bucket , setBucket] = useState('');
  const showIframe = ()=>{
    setShowState(!showState);
  }

  useEffect(()=>{
    let link = props.link;
    link += "?autoplay=1" ;
    setLink(link);
  },[])

  const handleClick = async()=>{
    setFlag(true);
    card[props.idx] = {
        name : name,
        link : link,
        bucket : bucket
    }
    const userData = {
        clientId : setLogin.clientId,
        cards : card
    }
    await axios.post(`http://localhost:8000/api/updateCards` , userData).then((res)=>{
        dispatch(actionCreators.updateCard(card));
        navigate('/');
    });
    }

    const deleteCard = ()=>{
        //TODO
    }

  return (
    <div className='my-3'>
        <div className="card" style={{"width": "18rem"}} onClick={showIframe}>
            {flag ?
            <div>
                {showState ? <iframe src={link} allow="accelerometer ; clipboard-write;autoplay;encrypted-media;gyroscope;picture-in-picture" allowFullScreen> </iframe> : null}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <button onClick={()=>setFlag(!flag)}>edit</button>
                <button onClick={()=>setDeleteFlag(!deleteFlag)}>{deleteFlag ? <i class="fa-light fa-xmark"></i> : <i class="fa-solid fa-trash"></i>}</button>
                <div className="container">
                    <div className="row"> 
                    <p className="col h5" style={{"textAlign" : "right"}}>Link to video</p>
            </div></div></div></div>
            :<div>
                <input placeholder='enter name' type="text" onChange={(e)=>setName(e.target.value)}></input>
                <input placeholder='enter link' type="text" onChange={(e)=>setLink(e.target.value)}></input>
                <input placeholder='enter bucket' type="text" onChange={(e)=>setBucket(e.target.value)}></input>
                <button onClick={handleClick}>Done</button>
            </div>}
        </div>
    </div>
  )
}
