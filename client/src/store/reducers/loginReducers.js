const intialState = {
    clientId : '',
    username : '',
    password : ''
};
const reducer =(state=intialState , action)=>{
    if(action.type === "logIn"){
        state.clientId = action.payload._id;
        state.username = action.payload.username;
        state.password = action.payload.password;
        return {
            ...state
        }
    }
    else if(action.type === "logOut"){
        state.clientId = '';
        state.username = '';
        state.password = '';
        return{
            ...state
        }
    }
    else return {
        ...state
    }
}

export default reducer;