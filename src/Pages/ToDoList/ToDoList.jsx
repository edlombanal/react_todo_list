import { useState } from "react";

const ToDoList = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Develop KPI</td>
            <td>Pending</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Develop time study</td>
            <td>Completed</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Hold call with client</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
      <div className="row justify-content-center">
        <legend>
          Tasks not yet completed:{" "}
          <span className="font-weight-bold text-danger h4">#</span>
        </legend>
        <div className="col-6">
          <div className="form-floating">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              //ref={taskRef}
            />
            <label htmlFor="floatingTextarea">Add a new task:</label>
            <div className="d-flex justify-content-evenly mt-3">
              <button
                type="submit"
                className="btn btn-danger mb-3"
                //onClick={handleClearAll}
              >
                Remove completed tasks
              </button>
              <button
                type="submit"
                className="btn btn-info mb-3"
                //onClick={handleAddTask}
              >
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
