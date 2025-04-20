import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo'
import { InsertTodo } from './components/InserTodo'

function App() {
  const [todos,settodos]=useState([]);
  fetch("http://localhost:3014/todos")
  .then(async function(res){
    const json=await res.json();
    settodos(json.todos);
  })
 
  return (

   <div>
     <InsertTodo />
    <Todo 
    todos={todos}
    />
   </div>
  );
}


export default App
