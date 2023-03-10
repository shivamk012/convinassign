const initial_state = {
    cards : [],
}

const reducer =(state=initial_state , action)=>{
    if(action.type === "addToCards"){
        const newCard = {
            name : action.payload.name,
            link : action.payload.link,
            bucket : action.payload.bucket
        }
        // console.log(action.payload);
        // console.log(state);
        state.cards.push(newCard);
        return {
            ...state
        }
    }
    else if(action.type === "removeFromCards"){
        const foodDetails = state.products.find((element) => {
            if(element.name === action.payload) return element;
        })
        const isPresent = state.cart.find((element)=>{
            if(element.name === action.payload){
                return true;
            }
        })
        if(!isPresent){
            foodDetails.qty = 1;
            state.cart.push(foodDetails);
            return{
                ...state
            }
        }
        else{
            state.cart.find((element)=>{
                if(element.name === action.payload){
                    element.qty = element.qty-1;
                }
            })
            return{
                ...state
            }
        }
    }
    else if(action.type === "initialiseCards"){
        // console.log(action.payload);
        return {
            ...state,
            cards : action.payload,
        };
    }
    else if(action.type === "updateCards"){
        return {
            ...state,
            cards : action.payload
        }
    }
    else return {
        ...state
    }
}

export default reducer;