import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  //const TodoContext = createContext(null);

  const [todos, setTodos] = useState([]);

  const value = { todos, setTodos };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
