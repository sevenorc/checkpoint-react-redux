import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}

export default App;
