import React, { useState } from 'react'
import { Todos } from '../App'

interface PropsTodo {
name:string
todos: Todos[]
setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
id: number


}
export const Todo = ({name,todos,setTodos,id}:PropsTodo) => {

const handleDelete = (id:number) => {
 setTodos([...todos].filter(todo => todo.id !== id))
}

const filterTodos = () => {
    console.log("ok ok")
    return todos.filter(todo => todo.completed === true);
}


  return (
    <>
       <li>{name}</li>
       <button onClick={filterTodos}>O</button>
       <button onClick={() => handleDelete(id)}>X</button>
    </>
  )
}
