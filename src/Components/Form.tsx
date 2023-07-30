import React, { useState } from 'react'
import { Todos } from '../App';

interface FormProps {
input: string;
setInput:React.Dispatch<React.SetStateAction<string>>;
todos:Todos[];
setTodos:React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const Form = ({input,setInput,todos,setTodos}:FormProps) => {

    const [disabled,setDisabled] = useState<boolean>(true);

    

    const addValueTodo = () => {
        setTodos([...todos,{ id: Math.floor(Math.random() * 1000), name:input, completed: false}]);
    }
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        if(inputValue.length >= 1){
            setDisabled(false);
        }else {
            setDisabled(true)
        }
    }
  return (
    <>
     <input type="text" value={input} onChange={handleChange} />
     <button onClick={addValueTodo} disabled={disabled}>Send</button>
    </>
  )
}
