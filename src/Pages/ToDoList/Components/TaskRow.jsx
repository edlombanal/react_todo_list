const TaskRow = (props) => {
  const { tasks } = props;
  return (
    <tr>
      <th scope="row" className="text-center">
        {tasks.id}
      </th>
      <td>{tasks.task}</td>
      <td>
        <div className="d-grid justify-content-center">
          <input
            type="checkbox"
            className="btn-check"
            id={tasks.id}
            autoComplete="off"
            checked={tasks.completed}
          />
          <label
            className={`btn btn-sm ${
              tasks.completed ? "btn-outline-success" : "btn-danger"
            }`}
            htmlFor={tasks.id}
          >
            {tasks.completed ? "Done" : "Not Completed"}
          </label>
        </div>
      </td>
    </tr>
  );
};

export default TaskRow;
