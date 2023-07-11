import { useState } from "react";
import TasksTable from "./Components/TaskTable";
import AddRemoveTasks from "./Components/AddRemoveTasks";

const ToDoList = () => {
  return (
    <div className="container-xl mt-3">
      <h1>To Do List</h1>
      <TasksTable />
      <div className="row justify-content-center">
        <legend>
          Tasks not yet completed:{" "}
          <span className="font-weight-bold text-danger h4">#</span>
        </legend>
        <AddRemoveTasks />
      </div>
    </div>
  );
};

export default ToDoList;
