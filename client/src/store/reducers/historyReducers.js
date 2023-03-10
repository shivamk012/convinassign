const initial_state = {
    history : []
}

const reducer = (state = initial_state , action)=>{
    if(action.type === "updateHistory"){
        let idx = -1;
        for(let i=0 ; i<state.history.length ; i += 1){
            if(state.history[i].name === action.payload.name && state.history[i].link === action.payload.link){
                idx = i;
                break;
            }
        }
        if(idx === -1){
            state.history.push(action.payload);
        }else{
            state.history.splice(idx , 1);
            state.history.push(action.payload);
        }
        return{
            ...state
        }
    }else if(action.type === "iniHistory"){
        return{
            ...state,
            history : action.payload
        }
    }
    else{
        return {
            ...state
        }
    }
}

export default reducer;