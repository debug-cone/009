import React from 'react'

function TodoItemComponent( {allTodo, setAllTodo} ) {
  function handleRemove(id) {
    let arrayRemovedItem = allTodo.filter(elem => elem.id !== id)
    setAllTodo(arrayRemovedItem)
  }

  return (
    <div>
        {allTodo.map((elem) => 
        <div 
        key={elem.id}
        className='flex justify-between items-center border-2 border-slate-500 rounded mt-2 mb-2 p-2'
        >
            <p>{elem.title}</p>
            <button
            className='border text-red-500 border-1 border-slate-500 bg-slate-500 rounded p-2'
            onClick={() => handleRemove(elem.id)}
            >
              REMOVE
            </button>
        </div>
        )}
    </div>
  )
}

export default TodoItemComponent