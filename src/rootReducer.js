import todoReducer from './redux/reducers/todoReducer'
import filterReducer from './redux/reducers/filterReducer'
import { combineReducers } from "redux"

const root = combineReducers({todo:todoReducer, filter : filterReducer});

export default root;