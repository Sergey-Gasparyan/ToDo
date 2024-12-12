import React, { useState } from 'react';
import Input from './components/Input';
import Add from './components/Add';
import List from './components/List';
import TodoName from './components/TodoName'
import "./Div1.css"

function Todo() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [deleteAll , setdeleteAll] = useState(false)

  
  function InputChange (event) {
    setNewTask(event.target.value)
  }

  function DeleteAllTasks () {
    setdeleteAll(false)
    setTasks([])
  }

  function deleteTask(task) {
    if(tasks.length !== 1) setTasks(tasks.filter(t => t !== task))
    else {
      setdeleteAll(false)
      setTasks(tasks.filter(t => t !== task))
   }
  }
  
  function AddTask () {
    if (newTask.length !== 0) {
      setTasks([...tasks,newTask])
      setNewTask('')
      setdeleteAll(true)
    }
  }

  return (
    <>
      <TodoName />
      <Input value={newTask} onChange={InputChange} />
      <Add onClick ={AddTask} name="Add"/>
      <List tasks={tasks} deleteTask={deleteTask}/>
      {deleteAll && <button style={{marginLeft:'100px' , marginTop:"40px"}} onClick={DeleteAllTasks}>Delete All</button>}
    </>

  );
}

export default Todo;