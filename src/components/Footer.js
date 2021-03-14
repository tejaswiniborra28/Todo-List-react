import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {all,active,completedList, clearList} from '../redux/todoAction'


function Footer() {
    const content= useSelector(state=>state.todo.content);
    const i2 =useSelector(state=>state.todo.comContent);
    const dispatch =useDispatch();
    
    const check=i2.map(s=>s[0]);


    const itemsLeft=content.length-i2.length;
  const handleAll=()=>
  {
        dispatch(all());
  }
  const handleActive=()=>{
         dispatch(active());
  }
  const handleClearCompleted=()=>{
       dispatch(clearList(check))
  }
  const handleCompleted=()=>{
        dispatch(completedList())
        console.log(i2.keys());
  }
  return (
    <div>
{itemsLeft} items left
<button type="submit" className="btn btn-lighton" onClick={handleAll}>All</button>
<button type="submit" className="btn btn-lighton" onClick={handleActive}>Active</button>
<button type="submit"  className="btn btn-lighton" onClick={handleCompleted}>Completed</button>
<button type="submit" className="btn btn-lighton" onClick={handleClearCompleted}>Clear completed</button>
    </div>
  )
}

export default Footer
