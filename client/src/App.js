import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
   const [taskName, setTaskName] = useState("");

   const displayData = () => {
      console.log(taskName);
   };

   const addTask = () => {
      Axios.post('http://localhost:3001/addtask', { taskName: taskName}).then(() => { console.log("success")});
      setTaskName("");
      console.log("DEPTh")
   }
   
   return (
    <div className="App">
      <h1>Todo List</h1>
      <p>Take out trash</p>
      <p>Feed dog</p>
      <p>Clean room</p>
      <hr />

      <div className='addTask'>
         <label>Add Task</label>
         <input type="text" value={taskName} onChange={(event) => {setTaskName(event.target.value)}}></input>
         <button onClick={addTask}>Add task</button>
      </div>
    </div>
  );
}

export default App;
