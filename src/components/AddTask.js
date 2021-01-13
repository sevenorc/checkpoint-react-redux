import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/action";
import { Button } from "reactstrap";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addNewTask(input));
    setInput("");
  };

  return (
    <form className="one-task" onSubmit={handleAdd}>
      <div className="task-element">
        <input
          type="text"
          placeholder="add a task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
      </div>
      <div className="task-element">
        <Button color="primary" onClick={handleAdd}>
          Add task
        </Button>
      </div>
    </form>
  );
};

export default AddTask;
