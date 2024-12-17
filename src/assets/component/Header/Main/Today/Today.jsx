import moment from "moment";
import { useState, useEffect, useContext } from "react";
import Todo from "../Shared/Todo";
import { TodoContext } from "../../../../../Provider/TodoContextProvider";

const Today = () => {
  const { todos } = useContext(TodoContext);
  const [todayTodos, setTodayTodos] = useState([]);

  const date = new Date();
  const todayDate = moment(date).format("DD/MM/YYYY");

  useEffect(() => {
    setTodayTodos(todos?.filter((todo) => todo?.dates === todayDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);
  console.log("todayTodos", todayTodos);

  return (
    <div className="Today TodosList p-4">
      <div className="text-center">
        <h3>Today&apos;s todos:</h3>
      </div>
      {todayTodos.length > 0 &&
        todayTodos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)}
    </div>
  );
};

export default Today;
