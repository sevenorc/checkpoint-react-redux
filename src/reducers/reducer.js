const initialState = {
  tasks: [
    { id: 1, description: "first blood", isDone: false },
    { id: 2, description: "pentakill", isDone: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Math.random(), description: action.payload, isDone: false },
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, description: action.payload.edited }
            : el
        ),
      };
    default:
      return state;
  }
};

export default reducer;
