import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const todos = useSelector((state) => state.tasks);
  return (
    <div>
      {todos.map((el) => (
        <Task el={el} />
      ))}
    </div>
  );
};

export default ListTask;
