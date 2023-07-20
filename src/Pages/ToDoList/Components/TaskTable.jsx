import TaskRow from "./TaskRow";

const TasksTable = (props) => {
  const { tasks } = props;
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col" className="text-center">
            #
          </th>
          <th scope="col">Description</th>
          <th scope="col" className="text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskRow key={tasks.id} tasks={task} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
