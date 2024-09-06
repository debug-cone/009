import { useState } from 'react'

function TodoInputComponent( {allTodo, setAllTodo} ) {
    
    const [inputValue, setInputValue] = useState("");
    function handleInputValue(e) {
        setInputValue(e.target.value)
    }

    function handleTodo() {
        setAllTodo([...allTodo, {id: new Date().getTime(), title: inputValue}])
        setInputValue("");
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder='Add New TODO!' 
            className='border border-slate-500 px-4 py-2'
            onChange={(e) => handleInputValue(e)}
            value={inputValue}
            />
            <button
            className='border border-slate-500 px-4 py-2 text-red-500'
            onClick={handleTodo}
            >
                ADD TODO
            </button>
        </div>
    )
}

export default TodoInputComponent