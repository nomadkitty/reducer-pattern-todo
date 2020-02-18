export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ],
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map(ele =>
          ele.id === action.payload
            ? { ...ele, completed: !ele.completed }
            : ele,
        ),
      };
    case "CLEAR_COMPLETE":
      return {
        todos: state.todos.filter(ele => !ele.completed),
      };
    default:
      return state;
  }
};
