import { useEffect, useState } from "react";

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const createUser = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/Guillermo", { method: "POST" })
            const data = await response.json()      // transforma a formato JS con la funcion json()
        } catch (error) {
            console.error(error)
        }
    }

    // JSON.stringify({"label": inputValue, "is_done": false})

    const getTodos = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/todo/users/Guillermo")
            if (response.status == 404) {
                createUser()
                return null
            }
            const data = await response.json()      // transforma a formato JS con la funcion json()
            setTodos(data.todos)
        } catch (error) {
            console.error(error)
        }
    }

    const postTodo = async () => {
        fetch('https://playground.4geeks.com/todo/todos/Guillermo', {
            method: "POST",
            body: JSON.stringify({
                "label": inputValue,
                "is_done": false
                }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                if(resp.ok) {
                    return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
                }    
            })
            .then(data => {
                if (data){
                    setTodos([...todos, data])
                }
                console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
            })
            .catch(error => {
                // Manejo de errores
                console.log(error);
            });
    }


    const validateInput = () => {
        if (inputValue === "") {
            alert("The input cannot be empty")
            return false
        };
        return true
    };


    const addNewTask = (e) => {
        if (e.key == "Enter") {
            if (validateInput()) {
                postTodo()    // forma 1:
                // setTodos(todos.concat(inputValue))  // forma 2:
                setInputValue("")
            }
        }
    } 

    const deleteTask = async (index) => {
        const todoId = todos[index].id;  // Extraer el id real del todo

        try {
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Eliminar localmente la tarea también
            const todosFiltrados = todos.filter((item, indice) => {
                console.log(item, indice)
                return (
                    index === indice ? false : true
                )
            })
            setTodos(todosFiltrados);
        } else {
            console.log('Error al eliminar en el backend:', response.status, response.statusText);
        }
        } catch (error) {
            console.error('Error en la llamada DELETE:', error);
        }
        
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <input type="text" placeholder="What needs to be done?" className="form-control text-center border-0 border-bottom rounded-0 px-4 py-3"
                onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={addNewTask} />

            <ul className="list-group">
                {todos.map((item, index) => {
                    return (
                        <li key={index} className="todo list-group-item mt-2 d-flex justify-content-between align-items-center">
                            <span>{item.label}</span>
                            <button className="btn btn-danger" onClick={() => { deleteTask(index) }}>X</button>
                        </li>
                    )
                })}

            </ul>
        </div>
    );

    // 
};

export default Todo;