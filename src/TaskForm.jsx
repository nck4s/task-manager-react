import { useState } from "react";
import { useTaskContext } from "./TaskContext";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const { dispatch } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: taskText, completed: false },
    });

    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
