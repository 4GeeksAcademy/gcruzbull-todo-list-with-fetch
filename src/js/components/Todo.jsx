import { useState } from "react";

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const validateInput = () => {
        if(inputValue === "") {
            alert("The input cannot be empty")
            return false
        };
        return true
    };

    
    const addNewTask = (e) => {
        if (e.key == "Enter") { 
            if (validateInput()) {
                setTodos([...todos, inputValue])    // forma 1:
                // setTodos(todos.concat(inputValue))  // forma 2:
                setInputValue("")
            }
        }
    }

    const deleteTask = (index) => {
        console.log(index);
        const todosFiltrados = todos.filter((item, indice) => {
            console.log(item, indice)
            return (
                index === indice ? false : true
            )
        })
        setTodos(todosFiltrados) 
    }

    return (
        <div>
            <input type="text" placeholder="What needs to be done?" className="form-control text-center border-0 border-bottom rounded-0 px-4 py-3" 
            onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={addNewTask} />
            
            <ul className="list-group">
                {todos.map((item, index)=>{
                    return (
                        <li key={index} className="todo list-group-item mt-2 d-flex justify-content-between align-items-center">
                            <span>{item}</span>
                            <button className="btn btn-danger" onClick={() => {deleteTask(index)}}>X</button>
                        </li>
                    )
                })}
                
            </ul>
        </div>
    );

    // 
};

export default Todo;