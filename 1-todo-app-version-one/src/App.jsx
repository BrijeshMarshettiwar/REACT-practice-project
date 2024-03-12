import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css';

function App() {
  const todoItems = [{
    name: "Buy Mike",
    dueDate: "4/10/2023",
  },
  {
    name: "Go to College",
    dueDate: "4/10/2023",
  },
  {
    name: "Like this vidoe",
    dueDate: "4/10/2023",
  }
];

  return (
    <>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
        

        
      </center>
    </>
  )
}

export default App
