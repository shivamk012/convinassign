import {combineReducers} from "redux";
import loginReducer from './loginReducers'
import cartReducer from './cardReducers'
import historyReducer from './historyReducers'
import deleteReducer from './deleteReducer'

const reducers = combineReducers({
    setLogin : loginReducer,
    cards : cartReducer,
    watchHistory : historyReducer,
    deleteItem : deleteReducer
})

export default reducers;