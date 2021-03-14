import {ALL,ACTIVE,COMPLETED_LIST,CLEAR_COMPLETED} from '../todoActionTypes'

const filterState={
    value:'all'
}

const filterReducer=(state=filterState,Action)=>{
switch(Action.type){
 case ALL : return{
     ...state,
     value: 'all'
      }
 case ACTIVE : return{
    ...state,
    value :'active'
}
case COMPLETED_LIST : return{
    ...state,
    value:'cList'
}
case CLEAR_COMPLETED : return{
    ...state,
    value:'clearList'
}
default : return state
}

}

export default filterReducer 