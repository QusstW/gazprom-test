import menuReducer from './menuReducer'
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({ menu: menuReducer })

let store = createStore(reducers)

export default store