import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "50px auto",
    width: "600px",
    boxShadow: "0rem 0.2rem 1.4rem #0000001A",
    borderRadius: "5px",
    padding: "40px",
    backgroundColor: "#D2F4EA"
  }

  return (
    <div className='container ' style={myStyle}>
      <h3 className=' text-center my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )
        })
      }
    </div>
  )
}
