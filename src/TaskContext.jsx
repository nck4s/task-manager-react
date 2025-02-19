import { createContext, useReducer, useContext, useEffect } from "react";

// 🎯 Загружаем данные из localStorage
const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

// 🎯 Редьюсер
function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "REMOVE_TASK":
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };
    default:
      return state;
  }
}

// 🎯 Контекст
const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // ✅ Сохраняем в localStorage при каждом изменении задач
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]); // Запускается при изменении tasks

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
