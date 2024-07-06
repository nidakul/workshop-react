
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='app-div'>
      <div className='app'>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App
