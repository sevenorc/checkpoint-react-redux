import React from "react";
import { useDispatch } from "react-redux";
import { compTask, delTask } from "../actions/action";
import Edit from "./Edit";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(delTask(el.id));
  };
  const completeTask = () => {
    dispatch(compTask(el.id));
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <span
        style={
          el.isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {el.description}
      </span>
      <Edit el={el} />
      <button onClick={deleteTask}>Del</button>
      <input type="checkbox" onClick={completeTask}></input>
    </div>
  );
};

export default Task;
