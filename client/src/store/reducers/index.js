import {combineReducers} from "redux";
import loginReducer from './loginReducers'
import cartReducer from './cardReducers'

const reducers = combineReducers({
    setLogin : loginReducer,
    cards : cartReducer,
})

export default reducers;