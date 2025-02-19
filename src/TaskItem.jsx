import { useTaskContext } from "./TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useTaskContext();

  return (
    <li>
      <span
        onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>🗑️</button>
    </li>
  );
};

export default TaskItem;
