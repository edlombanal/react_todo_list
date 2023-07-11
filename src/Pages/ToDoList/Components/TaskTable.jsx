const TasksTable = () => {
  return (
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
  );
};

export default TasksTable;
