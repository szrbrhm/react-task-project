import React, { useState } from "react";
import { initialState } from "./store/initialState";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [isTaskBarShowed, setIsTaskBarShow] = useState(false);

  // Create a task

  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task };
    setTasks((prevState) => [...prevState, newTask]);
  };

  // Delete Task
  const onDelete = (deletedItemId) =>
    setTasks(tasks.filter((task) => task.id !== deletedItemId));

  // Toggle Done

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Toggle Show and hide

  const toggleShow = () => setIsTaskBarShow(prevState => !prevState)

  return (
    <div className="container">
      <Header title={"Task Tracker"} isTaskBarShowed={isTaskBarShowed} toggleShow={toggleShow}/>
      {isTaskBarShowed && <CreateTask onCreate={onCreate} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      ) : (
        <p>No Task to show</p>
      )}
    </div>
  );
}

export default App;
