import { useRef, useState } from "react";
import TasksTable from "./Components/TaskTable";
import AddRemoveTasks from "./Components/AddRemoveTasks";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Work on task 1", completed: false },
    { id: 2, task: "Develop project 2", completed: true },
  ]);

  const taskRef = useRef();

  const handleAddTask = () => {
    const newTask = taskRef.current.value;
    if (newTask === "") return;
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuidv4(), task: newTask, completed: false }];
    });
    taskRef.current.value = "";
  };

  return (
    <div className="container-xl mt-3">
      <h1>To Do List</h1>
      <TasksTable tasks={tasks} />
      <div className="row justify-content-center">
        <legend>
          Tasks not yet completed:{" "}
          <span className="font-weight-bold text-danger h4">#</span>
        </legend>
        <AddRemoveTasks taskRef={taskRef} handleAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default ToDoList;
