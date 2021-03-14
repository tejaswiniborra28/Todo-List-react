import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {delCompleted,delet} from '../redux/todoAction';
import './test.css';


function TodoFilter(props) {
  var final=useSelector(state=>state.todo.comContent);
  const dispatch=useDispatch();



  const handleChange=(index)=>{
  console.log(final);
    dispatch(delCompleted(index))
  }
 
 
      return(<div className='mar'>
{final.map((s)=><div key={s[0]}>
  <input type="checkbox" id={s[0]} onChange={()=>handleChange(s[0])} defaultChecked />
  <input type="text"  className="textdecor" key={s[0]} value={s[1]} readOnly/>
  <button id={s[0]}className="btn btn-lighton"  onClick={()=>dispatch(delet(s[0]))}>X</button>

</div>
)}

</div>


  )
}

export default TodoFilter
