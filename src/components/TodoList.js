import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(ele => (
        <Todo key={ele.id} item={ele} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
