import React, { useState } from "react";
import { initialState } from "../store/initialState";

function Tasks() {
  const [tasks, setTasks] = useState(initialState);
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}

export default Tasks;
