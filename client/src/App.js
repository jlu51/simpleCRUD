import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios';

function App() {
   const [taskName, setTaskName] = useState("");
   const [taskList, setTaskList] = useState([]);



   useEffect(() => {
      showTasks();
   }, [])

   const displayData = () => {
      console.log(taskName);
   };

   const showTasks = () => {
      Axios.get('http://localhost:3001/tasks').then((response) => {
         console.log(response)
         setTaskList(response.data);
      })
   }

   const addTask = () => {
      if (taskName != "") {
         Axios.post('http://localhost:3001/addtask', { taskName: taskName}).then(() => { 
            console.log("success")
            showTasks();  // has to be in this then block in order for update
         });
         setTaskName("");  // but this still works... interesting
         console.log("DEPTh")
      } else {
         console.log("Invalid task name!");
      }
   }
   
   return (
    <div className="App">
      <h1>Todo List</h1>
      {taskList.map((val, key) => {
         return <div key={key}>
            <p>{val.Name}</p></div>
      })}

      <div className='addTask'>
         <label>Add Task</label>
         <input type="text" value={taskName} onChange={(event) => {setTaskName(event.target.value)}}></input>
         <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default App;
