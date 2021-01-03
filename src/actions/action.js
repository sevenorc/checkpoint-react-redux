export const addNewTask = (val) => {
  return {
    type: "ADD_TASK",
    payload: val,
  };
};

export const delTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export const compTask = (id) => {
  return {
    type: "COMPLETE_TASK",
    payload: id,
  };
};

export const editTask = (x) => {
  return {
    type: "EDIT_TASK",
    payload: x,
  };
};
