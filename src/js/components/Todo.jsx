export const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const validateInput = () => {
      if(inputValue === "") alert("The input cannot be empty");
    }

    const setTodos = () => {
        if(todos !=="") {
            <button onClick={setTodos}>Set Task</button>
        } else {validateInput};
    }

    return (
        <div>
            <input type="text" placeholder="What needs to be done?" className="form-control border-0 border-bottom rounded-0 px-4 py-3" 
            onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <button onClick={validateInput}>Click to validate empty</button>
            <button onClick={setTodos}>Click to validate empty</button>
        </div>
    );

    // 
};

export default Todo;