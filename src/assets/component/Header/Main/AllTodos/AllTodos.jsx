import { useContext } from "react";
import Todo from "../Shared/Todo";
import { TodoContext } from "../../../../../Provider/TodoContextProvider";

const AllTodos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="AllTodos TodosList p-4">
      <div className="text-center mb-4">
        <h3>
          Your todos list:
          <bold className="alltodosLength">{todos?.length}</bold>
        </h3>
      </div>
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index}></Todo>
      ))}
    </div>
  );
};

export default AllTodos;
