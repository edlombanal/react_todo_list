const AddRemoveTasks = () => {
  return (
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
  );
};

export default AddRemoveTasks;
