import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/Todoitem2'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center className='todo-container'>
        <AppName></AppName>
        <div className='items-container'>
          <AddTodo></AddTodo>

          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
        </div>

        
      </center>
    </>
  )
}

export default App
