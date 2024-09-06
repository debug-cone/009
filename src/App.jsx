import { useEffect, useState } from 'react'

import ToggleModeComponent from './components/ToggleModeComponent'
import TitleComponent from './components/TitleComponent'
import TodoInputComponent from './components/TodoInputComponent'
import TodoItemComponent from './components/TodoItemComponent'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    // console.log(allTodo);
    
  }, [allTodo])

  return (
    <div className={`${darkMode? 'dark' : 'light'}`}>
      <TitleComponent>
          <h1 
          className='
          bg-white dark:bg-slate-500
          text-center text-2xl my-3'
          >
            Todo App
          </h1>
      </TitleComponent>

      <ToggleModeComponent darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="flex gap-3 justify-evenly ">
        <div className="todo">
          <TitleComponent>
            <h1 
            className='
            bg-white dark:bg-slate-500
            text-center text-xl my-3'
            >
              Todo
            </h1>
          </TitleComponent>

          <TodoInputComponent allTodo={allTodo} setAllTodo={setAllTodo} />
          <div className="flex flex-col">
            <TodoItemComponent allTodo={allTodo} setAllTodo={setAllTodo} />
          </div>
        </div>
        <div className="products">
          <TitleComponent>
            <h1 
            className='
            bg-white dark:bg-slate-500
            text-center text-xl my-3'
            >
              All Products
            </h1>
          </TitleComponent>
        </div>
      </div>
    </div>
  )
}

export default App
