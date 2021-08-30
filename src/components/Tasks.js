import React, { useState } from "react";
import { initialState } from "../store/initialState";
import Task from "./Task";

function Tasks() {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
    </div>
  );
}

export default Tasks;
