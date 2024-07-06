
import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  console.log(todos);
  return (
    <div className='app-div'>
      <div className='app'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList />
      </div>
    </div>
  )
}

export default App
