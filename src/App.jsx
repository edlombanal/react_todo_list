import "./App.scss";
import Counter from "./Pages/Counter/Counter.jsx";
import ToDoList from "./Pages/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <h1 className="bg-black text-white">To do list and counter project.</h1>
      <div className="container-lg">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
