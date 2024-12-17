import { useEffect, useState } from "react";

const Completed = ({ todos }) => {
  const [completedTodos, setCompletedTodos] = useState([]);

  console.log("completedTodos", completedTodos);

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.checked === true));
  }, [todos]);

  return <div>completed</div>;
};

export default Completed;
