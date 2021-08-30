import React, { useState } from "react";
import { initialState } from "./store/initialState";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(initialState);

  // Create a task

  // Delete Task
  const onDelete = (deletedItemId) => setTasks(tasks.filter((task) => task.id !== deletedItemId))





  return (
    <div className="container">
     <Header title={"Task Tracker"}/>
     <Tasks tasks={tasks} onDelete={onDelete}/>
    </div>
  );
}



export default App;
