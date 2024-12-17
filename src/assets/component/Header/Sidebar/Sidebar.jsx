import { FcTodoList } from "react-icons/fc";
import { CgToday } from "react-icons/cg";
import { IoAddOutline } from "react-icons/io5";
import { GrStatusWarning } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useContext, useState } from "react";
//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Time picker
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

import ModalComp from "../Main/UI/ModalComp";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import moment from "moment";
import Today from "../Main/Today/Today";
import AllTodos from "../Main/AllTodos/AllTodos";
import Status from "../Main/Status/Status";
import { TodoContext } from "../../../../Provider/TodoContextProvider";
//import TodoContextProvider, { TodoContext } from "../../../../Provider/TodoContextProvider";
//import { TodoContext } from "../../../../App";

const Sidebar = () => {
  //const [todos, setTodos] = useState([]);
  const { todos, setTodos } = useContext(TodoContext);

  //const [todos, setTodos] = useState([]);
  const [all, setAll] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState("");
  //console.log(all);

  // ----------handle----------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (name && time) {
      setError("");
      setTodos([
        ...todos,
        {
          id: Math.ceil(Math.random() * 1000),
          names: name,
          times: moment(time, "HH:mm:ss").format("hh:mm a"),
          dates: moment(date, "DD/MM/YYYY"),
          checked: false,
        },
      ]);
      setTime("");
      setName("");
      setShowModal(false);
    } else {
      setError("Provide name and time!");
    }
  };

  console.log("todos", todos);
  //------------Todo------------------
  return (
    <div className="sideBar">
      <div className="sidebar-box">
        <div className="text-center">
          <p className="todosOf">
            <FcTodoList /> Todos Of
          </p>
          <button
            className="btn add-btn p-2"
            onClick={() => {
              setAll("make-todo");
              setShowModal(true);
              setShowUI("all");
            }}
          >
            <IoAddOutline />
            Make a Todo
          </button>

          {/* --------------Today------------------- */}
          <div className="todo-container">
            <div className="todosOf_item">
              <a
                className="px-4 py-2 mt-2 todosOf_items todosOf_item-today "
                onClick={(e) => {
                  e.preventDefault();
                  setShowUI("today");
                  // setAll("today");
                  // setShowModal(true);
                }}
              >
                <CgToday className="m-1" /> Today
              </a>

              <br />
              {/* ------------Next7------------------------ */}
              <a
                className="px-4 py-2 mt-2 todosOf_items todosOf_item--next "
                onClick={(e) => {
                  e.preventDefault();
                  setShowUI("next7");
                  // setAll("next7");
                  // setShowModal(true);
                }}
              >
                <SlCalender className="m-2" /> Next 7 days
              </a>
              <br />
              {/* -----------showall-------------------- */}
              <a
                className="px-4 py-2 mt-2 todosOf_items todosOf_item--all "
                onClick={(e) => {
                  e.preventDefault();
                  setShowUI("all");
                  // setAll("showAll");
                  // setShowModal(true);
                }}
              >
                <FaList className="m-2" /> Show All
              </a>
              <br />
              {/* ----------status-------------------------- */}
              <a
                className="px-4 py-2 mt-2 todosOf_items todosOf_item--all "
                onClick={(e) => {
                  e.preventDefault();
                  setShowUI("status");
                  // setAll("status");
                  // setShowModal(true);
                }}
              >
                <GrStatusWarning className="m-2" /> Status
              </a>
            </div>
          </div>
          {/* ---------------Modal----------------------- */}
          <div className="todoBox">
            {all === "make-todo" && showModal && (
              <ModalComp showModal={showModal} setShowModal={setShowModal}>
                <div className="modalBox mt-3 ">
                  <div className="text-center">
                    <h3>Add a New Todo</h3>
                  </div>
                  {/* ---------------------form start------------- */}
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        className="todoName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter todo name"
                      />
                    </div>
                    {/* --------------------datepicker----------- */}
                    <div className="datePicker">
                      <p>
                        <MdDateRange></MdDateRange> Pick a Date
                      </p>
                      <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                      />
                    </div>
                    {/* ---------------------------time------------------------ */}
                    <div className="TimePicker">
                      <p>
                        <IoMdTime></IoMdTime> Pick a Time
                      </p>

                      <TimePicker
                        onChange={(time) => setTime(time)}
                        value={time}
                        selected={time}
                        disableClock={true}
                        closeClock={true}
                        hourPlaceholder="hh"
                        minutePlaceholder="mm"
                        secondPlaceholder="ss"
                        clearIcon={true}
                        classaName="date"
                        amPmAriaLabel
                      />
                    </div>
                    {/* -------------------------------add todo-------------- */}
                    <div className="text-center mt-5">
                      <button
                        type="submit"
                        value="Add todo"
                        className="btn w-100 add-btn submit-btn p-2"
                      >
                        Add todo
                      </button>
                    </div>
                  </form>
                  {/* -------------------error------------------------- */}
                  {error && (
                    <div className="text-center">
                      <p className="error" style={{ color: "red" }}>
                        {error}
                      </p>
                    </div>
                  )}
                </div>
              </ModalComp>
            )}
          </div>
        </div>
      </div>
      <div className="todoBox">
        {showUI === "today" && <Today />}
        {showUI === "next7" && <h1>Next 7 days</h1>}
        {showUI === "all" && <AllTodos />}
        {showUI === "status" && <Status />}
      </div>
    </div>
  );
};

export default Sidebar;
