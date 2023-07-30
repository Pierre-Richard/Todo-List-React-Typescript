import React, { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { TodoList } from './Components/TodoList';
export interface Todos {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [input,setInput] = useState<string>("");
  const [listeTodo,setListeTodo] = useState([]);
  const [todos, setTodos] = useState<Todos[]>([]);
  return (
    <div className="App">
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
