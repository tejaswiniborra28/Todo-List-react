import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { completed, delCompleted, delet,editTodo} from '../redux/todoAction';
import './test.css'


function TodoItems() {
const  comContent=useSelector(state=>state.todo.comContent);
  const content=useSelector(state=>state.todo.content);

  const dispatch=useDispatch();
  const check=comContent.map(s=>s[0]);
  const aList=content.filter(a=>check.indexOf(a[0])===-1)

  const handleChange=(index)=>{
    console.log(document.getElementById(index).checked);
    const v=content.filter(s=>s[0]===index)
    const value=v[0][1];
   if( document.getElementById(index).checked){

     console.log(index);
          dispatch(completed(index,value))
    }
    else{
    dispatch(delCompleted(index))
      
  
    }
  
  }


  const handleEdit=(e)=>{
    console.log("double click");
    e.target.readOnly=false
  }
  
  const  handleEditSubmit = e => {
  
    const text = e.target.value.trim();
  
    if (e.which === 13) {   
      dispatch(editTodo(e.target.id,text))
      e.target.readOnly=true
    }
  }
  return(<div className='mar'>   {aList.map((e)=>
     <div key={e[0]}>
    <input type="checkbox" id={e[0]} onChange={()=>handleChange(e[0])}/>  
    
      <input type="text" id={e[0]} key={e[0]} defaultValue={e[1]} onDoubleClickCapture={(handleEdit)} onKeyDown={handleEditSubmit} readOnly={true}/>

    <button id={e[0]} className="btn btn-lighton head"  onClick={()=>dispatch(delet(e[0]))}>X</button>
</div>)}

    </div>
      )
  }


export default TodoItems
