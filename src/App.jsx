import { useState } from 'react'
import './App.css'
import { Logos } from './Components/Logos'
import { ShowTask } from './Components/ShowTask'
import { AddTask } from './Components/addtask'


function App() {
  const [tasks, setTask] = useState([])

const addTask = (newTask)=> {
  let object ={
    task: newTask,
    status: false
  }
  setTask([...tasks,object])
}

const changeStatus = (indice)=>{
  tasks[indice].status =!tasks[indice].status
  setTask([...tasks])
}
const removeTasks = (indice) => {
  tasks.splice(indice,1)
  setTask([...tasks])
}

  return (
    <>
   <Logos/>     
   <h1>Administrador de tareas</h1>
   <AddTask addTask={addTask}/>
   <ShowTask taskList={tasks} changeStatus={changeStatus} removeTasks={removeTasks}/>
    </>
  )
}

export default App
