import React from "react";
import { useDispatch } from "react-redux";
import { compTask, delTask } from "../actions/action";
import Edit from "./Edit";
import { Button } from "reactstrap";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const deleteTask = () => {
    dispatch(delTask(el.id));
  };
  const completeTask = () => {
    dispatch(compTask(el.id));
  };
  return (
    <div className="one-task">
      <div className="task-element">
        <span
          style={
            el.isDone
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {el.description}
        </span>
      </div>
      <div className="task-element">
        <Edit el={el} />
      </div>
      <div className="task-element">
        <Button color="danger" onClick={deleteTask}>
          Delete
        </Button>
      </div>
      <div className="task-element">
        <input type="checkbox" onClick={completeTask}></input>
      </div>
    </div>
  );
};

export default Task;
