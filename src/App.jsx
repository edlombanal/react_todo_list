import "./App.scss";
import Counter from "./Counter.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="bg-black text-white">To do list and counter project.</h1>
      <div className="container-lg">
        <Counter />
      </div>
    </div>
  );
}

export default App;
