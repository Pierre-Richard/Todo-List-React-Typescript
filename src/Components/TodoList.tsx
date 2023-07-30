import React from 'react'
import { Todos } from '../App'
import { Todo } from './Todo'
interface PropsTodoList {
  todos: Todos[]
  setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
}
export const TodoList = ({todos,setTodos}:PropsTodoList) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} name={todo.name} todos={todos} setTodos={setTodos} id={todo.id} />
      ))}
    </ul>
  )
}
