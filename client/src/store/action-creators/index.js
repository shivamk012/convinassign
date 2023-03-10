export const setToken = (clientData) => {
    return (dispatch) => {
        dispatch({
            type : "logIn",
            payload : clientData
        })
    }
}

export const removeFromCart = (name)=>{
    return (dispatch) => {
        dispatch({
            type : 'removeFromCart',
            payload : name
        })
    }
}

export const initialiseCards = (cart)=>{
    return (dispatch) =>{
        dispatch({
            type : 'initialiseCards',
            payload : cart
        })
    }
}

export const initialiseProducts = (products)=>{
    return (dispatch) => {
        dispatch({
            type : "initialiseProducts",
            payload : products
        })
    }
}

export const deleteItem = (name , qty)=>{
    return (dispatch)=>{
        dispatch({
            type : 'deleteItem',
            payload : {
                name : name,
                qty : qty
            }
        })
    }
}

export const logOutSession = ()=>{
    return (dispatch)=>{
        dispatch({
            type : 'logOut'
        })
    }
}

export const addNewCard = (newData)=>{
    return (dispatch)=>{
        dispatch({
            type : 'addToCards',
            payload : newData
        })
    }   
}

export const updateCard = (newData) => {
    return (dispatch) => {
        dispatch({
            type : 'updateCards',
            payload : newData
        })
    }
}

export const updateHistory = (newData)=>{
    return (dispatch) => {
        dispatch({
            type : 'updateHistory',
            payload : newData
        })
    }
}

export const removeItem = (newData)=>{
    return (dispatch)=>{
        dispatch({
            type : "deleteItem",
            payload : newData
        })
    }
}

export const saveItem = (newData)=>{
    return (dispatch)=>{
        dispatch({
            type : "notdeleteItem",
            payload : newData
        })
    }
}

export const iniHistory = (newData)=>{
    return (dispatch)=>{
        dispatch({
            type : "iniHistory",
            payload : newData
        })
    }
}