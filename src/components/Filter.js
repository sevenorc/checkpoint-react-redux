import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { filterTask } from "../actions/action";

const Filter = () => {
  const dispatch = useDispatch();
  const handleDone = () => {
    dispatch(filterTask("done"));
  };
  const handleNotDone = () => {
    dispatch(filterTask("notdone"));
  };
  const handleAll = () => {
    dispatch(filterTask("all"));
  };

  return (
    <div>
      <span>Filter by</span>
      <Button outline color="success" onClick={handleDone}>
        done
      </Button>
      <Button outline color="secondary" onClick={handleNotDone}>
        not done
      </Button>
      <Button outline color="primary" onClick={handleAll}>
        all
      </Button>
    </div>
  );
};

export default Filter;
