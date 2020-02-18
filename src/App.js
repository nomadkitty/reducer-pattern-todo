import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });
  const toggleTodo = id => dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  const clearComplete = () => dispatch({ type: "CLEAR_COMPLETE" });

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} clearComplete={clearComplete} />
    </div>
  );
}

export default App;
