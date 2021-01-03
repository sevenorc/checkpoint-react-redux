import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../actions/action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleAdd = () => {
    dispatch(addNewTask(input));
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button onClick={handleAdd}>Add task</button>
    </div>
  );
};

export default AddTask;
