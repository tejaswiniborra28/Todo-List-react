import React from 'react'
import '../styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { completed, delCompleted, delet, editTodo} from '../redux/todoAction';


function TodoList() {
    const content= useSelector(state=>state.todo.content);
const i2 =useSelector(state=>state.todo.comContent);
const dispatch =useDispatch();
const check=i2.map(s=>s[0]);

const handleChange=(index)=>{
  console.log(document.getElementById(index).checked);
  const v=content.filter(s=>s[0]===index)
  const value=v[0][1];
 if( document.getElementById(index).checked){
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

      return( <div className="mar">
    {content.map((s,index)=>{if(check.indexOf(s[0])!==-1){ return (<div key={s[0]}>
      <input type="checkbox" defaultChecked id={s[0]} onChange={()=> (handleChange(s[0]))}/>
      <input type="text"  style={{textDecoration:'line-through'}} id={s[0]} key={index} value={s[1]} readOnly/>
      <button id={s[0]} className="btn btn-lighton" onClick={()=>dispatch(delet(s[0]))}>X</button>
</div>)}
else
{ return(
  <div key={s[0]}>
  <input type="checkbox" id={s[0]} onChange={()=>handleChange(s[0])}/>
  <input type="text" id={s[0]} key={index} defaultValue={s[1]} onDoubleClickCapture={(handleEdit)} onKeyDown={handleEditSubmit} readOnly={true}/>
  <button id={s[0]} className="btn btn-lighton" onClick={()=>dispatch(delet(s[0]))}>X</button>
</div>)
}}
    )}

    </div>

  
      )
    }


export default TodoList
