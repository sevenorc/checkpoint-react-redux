import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const todos = useSelector((state) => state);
  return (
    <div>
      {todos.y === "all"
        ? todos.tasks.map((el) => <Task el={el} />)
        : todos.y === "done"
        ? todos.tasks.filter((el) => el.isDone).map((el) => <Task el={el} />)
        : todos.tasks.filter((el) => !el.isDone).map((el) => <Task el={el} />)}
    </div>
  );
};

export default ListTask;
