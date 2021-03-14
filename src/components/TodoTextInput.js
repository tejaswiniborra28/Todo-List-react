import React from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/todoAction'

function TodoTextInput(props) {
    const dispatch =useDispatch();

   const  handleSubmit = e => {

      const text = e.target.value.trim();
      
      if (e.which === 13) {
        const  id = Math.floor((Math.random() * 10000));

        dispatch(addTodo(id,text));
        e.target.value='';

      }
    }

  const handleChange=e=>{
  

  }
   const handleBlur=e=>{
       console.log(e.target.value);
      e.target.value='';

    }
  return (
    <div>
      <input type="text" placeholder={props.placeholder} onChange={handleChange} className="widt" onBlur={handleBlur} onKeyDown={handleSubmit}/>
    </div>
  )
}

export default TodoTextInput
