import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
