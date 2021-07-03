import { combineReducers, createStore, applyMiddleware } from "redux";
import menuReducer from './menuReducer'
import thunk from "redux-thunk";


let reducers = combineReducers({ menu: menuReducer })


let store = createStore(reducers, applyMiddleware(thunk));

export default store