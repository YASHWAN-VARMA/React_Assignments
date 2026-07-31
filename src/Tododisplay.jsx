import React, { useState } from "react";
import Badge from "./Badge";
const Tododisplay = () => {
  const [task, Settask] = useState(["Task1", "Task2"]);
  const [newTask, SetnewTask] = useState("");
  function addTask() {
    if (newTask.trim() === "") {
      return;
    }
    Settask([...task, newTask]);
    SetnewTask("");
  }
  return (
    <div>
      <Badge total={task.length} />
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => SetnewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Tododisplay;