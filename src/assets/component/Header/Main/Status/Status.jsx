import { useContext, useState } from "react";
import AllTodos from "../AllTodos/AllTodos";
import Completed from "./Completed";
import { TodoContext } from "../../../../../Provider/TodoContextProvider";
//import Completed from "./Completed";

const Status = () => {
  const { todos } = useContext(TodoContext);
  const [status, setStatus] = useState("");

  const handleOption = (e) => {
    if (e.target.value === "all") {
      setStatus("all");
    }
    if (e.target.value === "completed") {
      setStatus("completed");
    }
    if (e.target.value === "uncompleted") {
      setStatus("uncompleted");
    }
  };

  return (
    <>
      <div className="text-center TodosList p-4">
        <select className="form-select" onChange={handleOption}>
          <option selected>Please choose an Option</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div>
        {status === "all" && <AllTodos todos={todos} />}
        {status === "completed" && <Completed todos={todos} />}
        {status === "uncompleted" && <h1>Uncompleted</h1>}
      </div>
    </>
  );
};

export default Status;
