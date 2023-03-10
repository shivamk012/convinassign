const initial_state = {
    deleteItem : []
}

const reducer = (state = initial_state , action)=>{
    if(action.type === "notdeleteItem"){
        // console.log(action.payload);
        let idx = -1;
        for(let i=0 ; i<state.deleteItem.length ; i += 1){
            if(JSON.stringify(state.deleteItem[i]) === JSON.stringify(action.payload.data)){
                idx = i;
                break;
            }
        }
        state.deleteItem.splice(idx , 1);
        return{
            ...state
        }
    }else if(action.type === "deleteItem"){
        // console.log(action.payload);
        state.deleteItem.push(action.payload);
        return{
            ...state
        }
    }else{
        return {
            ...state
        }
    }
}

export default reducer;