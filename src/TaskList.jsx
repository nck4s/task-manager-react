import { useTaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default TaskList;
