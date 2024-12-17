import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { red } from "@mui/material/colors";
// import { useState } from "react";
// import { TodoContext } from "../../../../../Provider/TodoContextProvider";
//import { TodoContext } from "../../../../../App";
// import { useContext } from "react";

const Todo = ({ todo }) => {
  //const [todos, setTodos] = useContext(TodoContext);
  //console.log("todos from Todo component", Todo);
  /**
   * @Description and do it complete
   **/

  //  const handleCheck = (id) => {
  //    console.log("id", id);
  //   setTodos(todos);
  // };
  console.log("todo", todo);
  return (
    <div className="Todo m-4">
      <div className="todoItem">
        <div>
          <p className="todoNames">{todo?.names}</p>
        </div>
        <div className="todoIconBox">
          <button
            className="iconBtn"
            title="Edit"
            data-placement="tooltip"
            data-toggle="top"
            //onClick={() => handleEdit(todo.id)}
          >
            <FaEdit className="todoIcon" />
          </button>
          <button
            className="iconBtn doneBtn"
            title="Done"
            data-placement="tooltip"
            data-toggle="top"
            //onClick={() => handleCheck(id)}
          >
            <MdRadioButtonUnchecked className="" />
          </button>
          <button
            className="todoIcons"
            title="Delete"
            data-placement="tooltip"
            data-toggle="top"
            //onClick={() => handleDelete(todo.id)}
          >
            <RiDeleteBin5Line className="todoIcons" style={{ color: red }} />
          </button>
        </div>
      </div>
      <div className="todoDetails">
        <div className="todoTimes">
          <p>
            <CgCalendarDates />
            {todo?.dates}
          </p>
        </div>
        <div>
          <div className="todoTimes">
            <p>
              <CgCalendarDates />
              {todo?.times === "invalid date" ? "invalid time" : todo?.times}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
