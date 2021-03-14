import {ADD_TODO, DELET, COMPLETED,DELCOMPLETED,CLEAR_LIST,EDIT_TODO} from '../todoActionTypes'


const todoState={
    content : [],
    comContent : []
}



const todoReducer=(state =  todoState, Action )=>{
    switch(Action.type){
        case ADD_TODO : return{
            ...state,
           content: [[Action.id, Action.payload], ...state.content],
        }
        case DELET : return{
            ...state,
            content : state.content.filter((t)=> Action.payload!==t[0]),
            comContent : state.comContent.filter((t)=>t[0]!== Action.payload)
                
        }
        case COMPLETED : return{
            ...state,
            comContent:[[Action.id,Action.payload],...state.comContent]
        
        
        }

        case DELCOMPLETED : return {
            ...state,
           comContent: state.comContent.filter(s=>  s[0]!== Action.id)}

           case CLEAR_LIST : return{
            ...state,
            content : state.content.filter(s=>Action.payload.indexOf(s[0])===-1),
            comContent : []

        }

        case EDIT_TODO : {

            return {
                ...state,
            content:state.content.map(a=> (a[0]===parseInt(Action.id))? [a[0],Action.payload]:a) 

            }
        }
            
        
           
        default : return state
    }
   
}



export default todoReducer

