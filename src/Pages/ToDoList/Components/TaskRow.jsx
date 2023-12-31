const TaskRow = (props) => {
  const { tasks, index, toggleTask } = props;

  return (
    <tr>
      <th scope="row" className="text-center">
        {index + 1}
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
            onChange={() => toggleTask(tasks.id)}
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
