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

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  const removeCompleted = (id) => {
    const newTasks = tasks.filter((task) => task.completed);
    setTasks(newTasks);
  };

  return (
    <div className="container-xl mt-3">
      <h1>To Do List</h1>
      <TasksTable tasks={tasks} toggleTask={toggleTask} />
      <div className="row justify-content-center">
        <legend>
          Tasks not yet completed:{" "}
          <span className="font-weight-bold text-danger h4">
            {tasks.filter((task) => !task.completed).length}
          </span>
        </legend>
        <AddRemoveTasks
          taskRef={taskRef}
          handleAddTask={handleAddTask}
          removeCompleted={removeCompleted}
        />
      </div>
    </div>
  );
};

export default ToDoList;
