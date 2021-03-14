import {ADD_TODO,DELET,COMPLETED,DELCOMPLETED , ALL,ACTIVE,COMPLETED_LIST,CLEAR_COMPLETED,CLEAR_LIST,EDIT_TODO} from './todoActionTypes'


export const addTodo=(index,value)=>{
    return {
        type : ADD_TODO,
        id :index,
         payload :value
    }
}

export const delet=(index)=>{
    return {
type:DELET,
payload:index
    }
}


export const completed=(index,value)=>{
    return {
type:COMPLETED,
payload:value,
id:index
    }
}

export const delCompleted=(index)=>{
    return {
type:DELCOMPLETED,
id:index
    }
}

export const all=()=>{
    return {
        type:ALL
    }
}

export const active=()=>{
    return {
        type:ACTIVE
    }
}

export const completedList=()=>{
    return {
        type:COMPLETED_LIST
    }
}

export const clearCompleted=()=>{
    return {
        type:CLEAR_COMPLETED
    }
}
export const clearList=(value)=>{
    return{
        type:CLEAR_LIST,
        payload : value
    }
}

export const editTodo=(index,value)=>{
    return{
        type:EDIT_TODO,
        id:index,
        payload:value,
    
    }
}