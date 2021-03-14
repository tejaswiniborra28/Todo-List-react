import React from 'react'
import TodoTextInput from './TodoTextInput'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import TodoItems from './TodoItems'
import './test.css'



function TodoHeader() {
  const value=useSelector(state=>state.filter.value);

  return (
    <div>
      <h1 className='head'>Todos</h1>
      <TodoTextInput className="wid"
     /* newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}*/
      placeholder="What needs to be done?"
    />
   {(value==='all')?
  <div> <TodoList /></div>:(value==='active')?<div><TodoItems /> </div>:<div><TodoFilter value={value}/></div>
    }

<Footer />

    </div>
  )
}

export default TodoHeader
