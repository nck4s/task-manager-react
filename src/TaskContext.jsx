import { createContext, useReducer, useContext } from "react";

// 🎯 Initial state
const initialState = {
  tasks: [],
};

// 🎯 Reducer function
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

// 🎯 Create Context
const TaskContext = createContext();

// 🎯 Provider Component
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// 🎯 Custom hook to use context
export function useTaskContext() {
  return useContext(TaskContext);
}
