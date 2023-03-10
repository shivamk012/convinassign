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
    const deleteData = useSelector(state=>state.deleteItem);
    // useEffect(() => {
        
    //     // console.log(typeof(card));
    //     // eslint-disable-next-line
    // },[])

    useEffect(()=>{
      if(setLogin.clientId === null){
        setCard([]);
      }else{
        setCard(tempcard.cards);
      }
    } , [setLogin.clientId])

    const deleteItem = async()=>{
      const arr = deleteData.deleteItem;
      // console.log(arr);
      let idx = new Array(card.length).fill(false);
      for(let i=0 ; i<card.length ; i += 1){
        for(let j = 0 ; j<arr.length ; j += 1){
          console.log(arr[j]);
          console.log(card[i]);
          if(arr[j].name === card[i].name && arr[j].link === card[i].link && arr[j].bucket === card[i].bucket){
            idx[i] = true;
          }
        }
      }
      let newCard = [];
      for(let i=0 ; i<card.length ; i += 1){
        if(idx[i] === false){
          newCard.push(card[i]);
        }
      }
      // console.log(newCard);
      setCard(newCard);
      dispatch(actionCreators.updateCard(newCard));
      const userData = {
        clientId : setLogin.clientId,
        cards : newCard
      }
      const result = await axios.post(`http://localhost:8000/api/updateCards` , userData);
    }
    
  return (
    <div>
      <div>
            <NavBar/>
            <div className="container">
            <div className="row my-4">
                <button onClick={deleteItem}>Delete Selected</button>
                {card.map((element , idx)=>{
                return <div className='col-sm' key={element.name}>
                    <ContentCard name={element.name} link={element.link} bucket={element.bucket} index={idx}/>
                    </div>
                })}
            </div>
            </div>
            </div> 
    </div>
  )
}

