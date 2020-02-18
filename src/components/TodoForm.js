import React, { useState } from "react";

const TodoForm = props => {
  const [newTodo, SetNewTodo] = useState();

  const handleChange = e => {
    SetNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(newTodo);
    SetNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        name="newTodo"
        onChange={handleChange}
      />
      <button>Add Todo</button>
      <button onClick={() => props.clearComplete()}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
