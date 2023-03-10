import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {actionCreators} from '../store/index'
import { useState } from 'react';
import axios from 'axios';

export default function ContentCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [flag , setFlag] = useState(true);
  const [deleteFlag , setDeleteFlag] = useState(false)
  const [showState , setShowState] = useState(false);
  const [link , setLink] = useState("");
  const [name , setName] = useState('');
  const [bucket , setBucket] = useState('');
  const [isDel , setDel] = useState(false);
 
  let deleteItem = [];
  let count = 0; 
  const data = useSelector(state=>state.watchHistory);
  const setLogin = useSelector(state=>state.setLogin);
  const statecard = useSelector(state=>state.cards);
  const deletedata = useSelector(state=>state.deleteItem);
  let card = statecard.cards;
  

  
  const showIframe = async()=>{
    if(!showState){
      dispatch(actionCreators.updateHistory({
        name : props.name,
        link : props.link,
        time : new Date().toLocaleDateString()
      }))
      const history = data.history;
      const newData = {
        _id : setLogin.clientId,
        history : history
      }
      const result = await axios.post('http://localhost:8000/api/updateUserHistory' , newData);
    }
    setShowState(!showState);

  }

  useEffect(()=>{
    let link = props.link;
    link += "?autoplay=1" ;
    setLink(link);
  },[])

  const handleClick = async()=>{
    setFlag(true);
    setShowState(false);
    // console.log(props);
    card[props.index] = {
        name : name,
        link : link,
        bucket : bucket
    }
    // console.log(card);
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
      let flag = isDel;
      // console.log(!flag);
      setDel(!flag);
      setDeleteFlag(!deleteFlag);
    }
    
    useEffect( ()=>{
      // console.log(isDel)
      const data = {
        name : props.name,
        link : props.link,
        bucket : props.bucket
        }
        if(isDel){
          dispatch(actionCreators.removeItem(data));
        }else{
          dispatch(actionCreators.saveItem(data));
        }
    }, [isDel]);

  return (
    <div className='my-3'>
        <div className="card" style={{"width": "18rem"}} onClick={showIframe}>
            {flag ?
            <div>
                {showState ? <iframe key={props.index} src={link} allow="accelerometer ; clipboard-write;autoplay;encrypted-media;gyroscope;picture-in-picture" allowFullScreen> </iframe> : null}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <button onClick={()=>setFlag(!flag)}>edit</button>
                <button onClick={deleteCard}>{deleteFlag ? <i className="fa-thin fa-xmark"></i> : <i className="fa-solid fa-trash"></i>}</button>
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
