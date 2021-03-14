import { createStore, applyMiddleware } from 'redux';
import  root from './rootReducer'
import logger from 'redux-logger'



const store=createStore(root, applyMiddleware(logger));


export default store