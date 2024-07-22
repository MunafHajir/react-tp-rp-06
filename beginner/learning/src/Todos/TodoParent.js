import { useState } from "react";
import TodoChild from "./TodoChild";

function TodoParent() {

  var [tasks, setTasks] = useState([]);
  var [input, setInput] = useState("");
  var [taskCount, setTaskCount] = useState(0);

  function addTask() {
    tasks.push(input);
    setTasks(tasks);
    setTaskCount(tasks.length);
  }

  function addInput(event) {
    var value = event.target.value;
    setInput(value);
  }


  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Todo</h1>

      <div>
        <input placeholder="Enter Task" onChange={addInput}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <TodoChild  tasks={tasks} taskCount={taskCount} />
    </div>
  );
}

export default TodoParent;
